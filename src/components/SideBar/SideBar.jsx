import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { validateSchema } from './validateSchema';
import { useSelector } from 'react-redux';
import { selectCars, selectMakes } from 'redux/cars/selectors';
import { getPriceRanges } from 'utils';
import { NumericFormat } from 'react-number-format';
import * as Yup from 'yup';

function NumberField({ field }) {
  return (
    <NumericFormat
      {...field}
      decimalScale={0}
      prefix={'$'}
      valueIsNumericString={true}
      thousandSeparator={true}
      allowNegative={false}
    />
  );
}

const initialValues = {
  make: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

export const SideBar = ({ setQuery }) => {
  const makes = useSelector(selectMakes);
  const cars = useSelector(selectCars);
  const prices = getPriceRanges(cars); // array of numbers

  const getOptions = items =>
    items.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validateSchema}

      onSubmit={values => setQuery(values)}
    >
      <Form>
        <label>
          Car brand
          <Field name="make" type="text" as="select" value={''}>
            {getOptions(makes)}
          </Field>
          <ErrorMessage name="make" />
        </label>

        <label>
          Price/1 hour
          <Field name="rentalPrice" type="text" as="select">
            {getOptions(prices)}
          </Field>
          <ErrorMessage name="rentalPrice" />
        </label>

        <label>
          Сar mileage/km
          <Field name="mileageFrom" type="number" component={NumberField} />
          <ErrorMessage name="mileageFrom" />
          <Field name="mileageTo" type="number" component={NumberField} />
          <ErrorMessage name="mileageTo" />
        </label>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

// SideBar.propTypes = {
//   setQuery: PropTypes.func.isRequired,
// };
