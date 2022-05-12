import React from 'react';
import { Control, useController } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import { v4 as uuidv4 } from 'uuid';

import { floatToCurrencyFormat } from '../services/currency-format';

type TypeProps = {
  name: string;
  defaultValue: number;
  control: Control<Record<string, any>>;
  prefix?: string;
  suffix?: string;
  rules?: any;
};

const InputCurrency = ({
  name,
  defaultValue,
  control,
  rules,
  ...rest
}: TypeProps) => {
  const rulesDefault = {
    required: {
      value: true,
      message: 'campo obrigatório',
    },
  };

  const valueFormatted = floatToCurrencyFormat(defaultValue ?? 0);

  const {
    field: { ...input },
  } = useController({
    name,
    control,
    defaultValue: valueFormatted,
    rules: rules ?? rulesDefault,
  });

  const id = uuidv4();

  const handleClick = () => {
    const element = document.getElementById(id) as HTMLInputElement | null;

    element?.select();
  };

  return (
    <NumberFormat
      id={id}
      isNumericString={false}
      className="form-control"
      thousandsGroupStyle="thousand"
      displayType="input"
      thousandSeparator="."
      allowNegative={false}
      decimalSeparator=","
      fixedDecimalScale={false}
      decimalScale={2}
      onClick={handleClick}
      {...input}
      {...rest}
    />
  );
};

export default InputCurrency;
