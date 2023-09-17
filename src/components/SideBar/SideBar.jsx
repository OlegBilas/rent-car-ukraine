import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { validateSchema } from './validateSchema';
import { useSelector } from 'react-redux';
import { selectMakes } from 'redux/cars/selectors';

const initialValues = {
  make: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

export const SideBar = ({ setQuery }) => {
  const makes = useSelector(selectMakes);

  const getMakesOptions = makes =>
    makes.map(make => (
      <option key={make} value={make}>
        {make.capitalize()}
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
          <Field name="make" type="text" as="select">
            {getMakesOptions(makes)}
          </Field>
          <ErrorMessage name="make" />
        </label>

        <label>
          Price/1 hour
          <Field name="rentalPrice" type="text" as="select">
            <option value="red">Red</option>
          </Field>
          <ErrorMessage name="rentalPrice" />
        </label>

        <label>
          Сar mileage/km
          <Field name="mileageFrom" type="text" />
          <ErrorMessage name="mileageFrom" />
          <Field name="mileageTo" type="text" />
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
