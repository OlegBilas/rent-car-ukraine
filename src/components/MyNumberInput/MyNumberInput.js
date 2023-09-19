import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

export const MyNumberInput = props => {
  const [value, setValue] = useState('');

  return (
    <NumericFormat
      valueIsNumericString={true}
      thousandSeparator={true}
      decimalScale={0}
      allowNegative={false}
      prefix={props.prefix}
      value={value}
      onValueChange={vals => setValue(vals.formattedValue)}
      {...props}
    />
  );
};
