import assert from 'assert';

import type {
  VercelRequest,
  VercelResponse,
  VercelApiHandler,
} from '@vercel/node';
import { z } from 'zod';

import { composeHasuraActionRequestBody, circleIdInput } from '../src/lib/zod';

import { getUserFromProfileId } from './findUser';
import { GraphQLError } from './gql/__generated__/zeus';
import { UnauthorizedError } from './HttpError';
import { verifyHasuraRequestMiddleware } from './validate';

const middleware =
  (handler: VercelApiHandler) =>
  async (req: VercelRequest, res: VercelResponse): Promise<void> => {
    try {
      const {
        input: { payload: input },
        session_variables: sessionVariables,
      } = composeHasuraActionRequestBody(circleIdInput).parse(req.body);

      // the admin role is validated early by zod
      if (sessionVariables.hasuraRole === 'admin') {
        await handler(req, res);
        return;
      }

      if (sessionVariables.hasuraRole === 'user') {
        const { circle_id } = input;
        const profileId = sessionVariables.hasuraProfileId;

        const { role } = await getUserFromProfileId(profileId, circle_id);
        assert(isCircleAdmin(role));

        await handler(req, res);
        return;
      }
    } catch (err) {
      if (err instanceof z.ZodError || err instanceof GraphQLError) {
        // let the default errorHandlers handle this
        throw err;
      }
      throw new UnauthorizedError('User not circle admin', err);
    }

    // Reject request by if not validated above
    throw new UnauthorizedError('User not circle admin');
  };

const isCircleAdmin = (role: number): boolean => role === 1;

export const authCircleAdminMiddleware = (handler: VercelApiHandler) =>
  verifyHasuraRequestMiddleware(middleware(handler));
