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
  Div,
  TextTo,
  TextFrom,
} from './Form.styled';

import { useSelector } from 'react-redux';
import { selectCars, selectMakes } from 'redux/cars/selectors';
import { getPriceRanges } from 'utils';
import * as Yup from 'yup';

const initialValues = {
  make: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

export const FormSearch = ({ setQuery }) => {
  const makes = useSelector(selectMakes);
  const cars = useSelector(selectCars);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setPrices(getPriceRanges(cars)); // array of numbers
  }, [cars]);

  const getMakeOptions = items =>
    items.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  const getPriceOptions = items =>
    items.map(item => (
      <option key={item} value={item}>
        {`${item}$`}
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
                {getMakeOptions(makes)}
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
                {getPriceOptions(prices)}
              </FieldPrice>
              <ErrorMessage name="rentalPrice" />
            </Label>

            <Label>
              Сar mileage/km
              <Div>
                <TextFrom>From </TextFrom>
                <FieldFrom
                  value={values.mileageFrom}
                  onValueChange={val =>
                    setFieldValue('mileageFrom', val.floatValue)
                  }
                />
                <ErrorMessage name="mileageFrom" />
                <TextTo>To </TextTo>
                <FieldTo
                  value={values.mileageTo}
                  onValueChange={val =>
                    setFieldValue('mileageTo', val.floatValue)
                  }
                />

                <ErrorMessage name="mileageTo" />
              </Div>
            </Label>

            <SearchBtn type="submit">Search</SearchBtn>
          </Form>
        );
      }}
    </Formik>
  );
};
