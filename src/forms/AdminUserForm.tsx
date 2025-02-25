import { z } from 'zod';

import { USER_ROLE_ADMIN } from 'config/constants';

import { createForm } from './createForm';
import { zEthAddress, zBooleanToNumber } from './formHelpers';

import { IUser, ICircle } from 'types';

interface IUserAndCircle {
  user?: IUser;
  circle: ICircle;
}

const schema = z
  .object({
    name: z.string().refine(val => val.trim().length >= 3, {
      message: 'Name must be at least 3 characters long.',
    }),
    address: zEthAddress,
    non_giver: z.boolean(),
    fixed_non_receiver: z.boolean(),
    // this isn't presented in the UI
    // non_receiver: z.boolean(),
    role: zBooleanToNumber,
    starting_tokens: z.number(),
    fixed_payment_amount: z.number(),
  })
  .strict();

const AdminUserForm = createForm({
  name: 'adminUserForm',
  getInstanceKey: (v: IUserAndCircle) => (v?.user ? String(v?.user.id) : `new`),
  getZodParser: () => schema,
  load: (v: IUserAndCircle) => ({
    name: v.user?.name ?? '',
    address: v.user?.address ?? '',
    non_giver: v.user?.non_giver ?? false,
    fixed_non_receiver: !!v.user?.fixed_non_receiver ?? false,
    // this isn't presented in the UI so it's disabled for now
    // non_receiver: !!v.user?.fixed_non_receiver || !!v.user?.non_receiver,
    role: v.user?.role === USER_ROLE_ADMIN ?? false,
    starting_tokens: v.user?.starting_tokens ?? 100,
    fixed_payment_amount: v.user?.fixed_payment_amount ?? 0,
  }),
  fieldKeys: Object.keys(schema.shape),
  fieldProps: {},
});

export default AdminUserForm;
