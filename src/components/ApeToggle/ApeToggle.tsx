import React, { useState } from 'react';

import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';

import { makeStyles, ButtonGroup, Button, Theme } from '@material-ui/core';

import { ApeInfoTooltip } from 'components';
import { Text } from 'ui';

const useStyles = makeStyles<Theme, { variant: string }>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  inactive: {
    color: theme.colors.text,
    background: theme.colors.surface,
    '&:hover': {
      background: theme.colors.complete + '80',
      color: theme.colors.white,
    },
  },
  active: {
    color: theme.colors.white,
    background: theme.colors.complete,
    '&:hover': {
      background: theme.colors.complete,
    },
  },
  grouped: {
    minWidth: 102,
    borderRadius: 8,
    fontWeight: 300,
    '&:not(:last-child)': {
      borderRight: '1px solid white',
    },
  },
  helper: {
    fontSize: 13,
    lineHeight: 1.2,
    marginTop: theme.spacing(1.5),
    color: theme.colors.text + '80',
  },
  error: {
    fontSize: 13,
    lineHeight: 1.2,
    fontWeight: 600,
    marginTop: theme.spacing(1.5),
    color: theme.colors.alert,
  },
  disabled: {
    opacity: 0.6,
  },
}));

export const ApeToggle = ({
  value,
  onChange,
  disabled,
  label,
  helperText,
  errorText,
  error,
  className,
  infoTooltip,
  variant = 'primary',
}: {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  className?: string;
  infoTooltip?: React.ReactNode;
  variant?: string;
}) => {
  const classes = useStyles({ variant });
  const [groupId] = useState(uniqueId('text-field-'));

  return (
    <div
      className={clsx(className, classes.root, {
        [classes.disabled]: disabled,
      })}
    >
      {(!!label || infoTooltip) && (
        <Text
          variant="label"
          as="label"
          htmlFor={groupId}
          className={classes.label}
        >
          {label}{' '}
          {infoTooltip && <ApeInfoTooltip>{infoTooltip}</ApeInfoTooltip>}
        </Text>
      )}
      <ButtonGroup
        id={groupId}
        variant="contained"
        color="default"
        disableElevation
        disabled={disabled}
        classes={{
          grouped: classes.grouped,
          disabled: classes.disabled,
        }}
      >
        <Button
          onClick={() => onChange(true)}
          className={value ? classes.active : classes.inactive}
        >
          Yes
        </Button>
        <Button
          onClick={() => onChange(false)}
          className={!value ? classes.active : classes.inactive}
        >
          No
        </Button>
      </ButtonGroup>
      {!!helperText && (
        <span
          className={clsx({
            [classes.helper]: !error,
            [classes.error]: !!error,
          })}
        >
          {errorText ?? helperText}
        </span>
      )}
    </div>
  );
};

export default ApeToggle;
