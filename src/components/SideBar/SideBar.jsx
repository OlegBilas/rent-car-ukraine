import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  SearchBtn,
  FieldMake,
  FieldPrice,
  FieldFrom,
  FieldTo,
  Label,
} from './SideBar.styled';

import { useSelector } from 'react-redux';
import { selectCars, selectMakes } from 'redux/cars/selectors';
import { getPriceRanges } from 'utils';
import * as Yup from 'yup';

// function NumberField({ field }) {
//   return (
//     <NumericFormat
//       {...field}
//       decimalScale={0}
//       suffix={'$'}
//       allowNegative={false}
//     />
//   );
// }

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
      validationSchema={Yup.object().shape({
        make: Yup.string().oneOf(makes, 'Invalid make of car'),
        rentalPrice: Yup.number().oneOf(prices, 'Invalid value of price'),
        mileageFrom: Yup.number(),
        mileageTo: Yup.number(),
      })}
      onSubmit={values => {
        setQuery(values);
        console.log(values);
      }}
    >
      {props => {
        const { values, setFieldValue } = props;
        return (
          <Form>
            <Label>
              Car brand
              <FieldMake
                name="make"
                type="text"
                as="select"
                onChange={val => {
                  setFieldValue('make', val.target.value);
                }}
              >
                <option value="">Enter the text</option>
                {getOptions(makes)}
              </FieldMake>
              <ErrorMessage name="make" />
            </Label>

            <Label>
              Price/1 hour
              <FieldPrice
                name="rentalPrice"
                type="number"
                as="select"
                onChange={val => {
                  setFieldValue('rentalPrice', val.target.value);
                }}
              >
                <option value="">To $</option>
                {getOptions(prices)}
              </FieldPrice>
              <ErrorMessage name="rentalPrice" />
            </Label>

            <Label>
              Сar mileage/km
              <div>
                <FieldFrom
                  value={values.mileageFrom}
                  onValueChange={val =>
                    setFieldValue('mileageFrom', val.floatValue)
                  }
                />
                <ErrorMessage name="mileageFrom" />
                <FieldTo
                  value={values.mileageTo}
                  onValueChange={val =>
                    setFieldValue('mileageTo', val.floatValue)
                  }
                />
                <ErrorMessage name="mileageTo" />
              </div>
            </Label>

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
