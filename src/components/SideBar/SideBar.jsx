import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Form, Field, SearchBtn } from './SideBar.styled';

import { useSelector } from 'react-redux';
import { selectCars, selectMakes } from 'redux/cars/selectors';
import { getPriceRanges } from 'utils';
import { NumericFormat } from 'react-number-format';
import * as Yup from 'yup';

// function NumberField({ field }) {
//   return (
//     <NumericFormat
//       {...field}
//       decimalScale={0}
//       prefix={'$'}
//       valueIsNumericString={true}
//       thousandSeparator={true}
//       allowNegative={false}
//     />
//   );
// }

const MyNumberInput = props => {
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

const initialValues = {
  make: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

export const SideBar = ({ setQuery }) => {
  const makes = useSelector(selectMakes);
  const cars = useSelector(selectCars);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setPrices(getPriceRanges(cars)); // array of numbers
  }, [cars]);

  const getOptions = items =>
    items.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  return (
    <Formik
      initialValues={initialValues}
      // enableReinitialize
      // validationSchema={validateSchema}
      validationSchema={Yup.object().shape({
        make: Yup.string(),
        rentalPrice: Yup.number(),
        mileageFrom: Yup.number(),
        mileageTo: Yup.number(),
      })}
      onSubmit={values => setQuery(values)}
    >
      {props => {
        const { values, setFieldValue } = props;
        return (
          <Form>
            <label>
              Car brand
              <Field name="make" type="text" as="select">
                {getOptions(makes)}
              </Field>
              <ErrorMessage name="make" />
            </label>

            <label>
              Price/1 hour
              <Field name="rentalPrice" type="number" as="select">
                {getOptions(prices)}
              </Field>
              <ErrorMessage name="rentalPrice" />
            </label>

            <label>
              Сar mileage/km
              <MyNumberInput
                value={values.mileageFrom}
                onValueChange={val =>
                  setFieldValue('mileageFrom', val.floatValue)
                }
              />
              <ErrorMessage name="mileageFrom" />
              <MyNumberInput
                value={values.mileageTo}
                onValueChange={val =>
                  setFieldValue('mileageTo', val.floatValue)
                }
              />
              <ErrorMessage name="mileageTo" />
            </label>

            <SearchBtn type="submit">Search</SearchBtn>
          </Form>
        );
      }}
    </Formik>
  );
};

// SideBar.propTypes = {
//   setQuery: PropTypes.func.isRequired,
// };
