import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
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
  TextToDol,
  TextFrom,
  OpenDiv,
  DivWrapper,
  ErrorMessage,
} from './Form.styled';
import { ReactComponent as OpenedSvg } from 'images/Form/opened.svg';
import { ReactComponent as ClosedSvg } from 'images/Form/closed.svg';

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
  const [openedMake, setOpenedMake] = useState(false);
  const [openedPrice, setOpenedPrice] = useState(false);
  const [isShownToDol, setIsShownToDol] = useState(false);

  useEffect(() => {
    setPrices(getPriceRanges(cars)); // array of numbers
  }, [cars]);

  const toggleMakeMenu = () => {
    setOpenedMake(prevState => !prevState);
  };

  const togglePriceMenu = () => {
    setOpenedPrice(prevState => !prevState);
  };

  const getMakeOptions = items =>
    items.map(item => (
      <option
        key={item}
        value={item}
        onClick={() => {
          setOpenedMake(false);
        }}
      >
        {item}
      </option>
    ));

  const getPriceOptions = items =>
    items.map(item => (
      <option
        key={item}
        value={item}
        onClick={() => {
          setOpenedPrice(false);
        }}
      >
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
        // mileageTo: Yup.number().moreThan(
        //   Number.parseInt(Yup.ref('mileageFrom')),
        //   'To should be > From'
        // ),
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
              <Div>
                <FieldMake
                  name="make"
                  type="text"
                  as="select"
                  onClick={toggleMakeMenu}
                  onChange={val => {
                    setFieldValue('make', val.target.value);
                    setOpenedMake(true);
                  }}
                >
                  <option value="">Enter the text</option>
                  {getMakeOptions(makes)}
                </FieldMake>
                <OpenDiv>
                  {openedMake ? (
                    <OpenedSvg width={20} height={20} />
                  ) : (
                    <ClosedSvg width={20} height={20} />
                  )}
                </OpenDiv>
                <ErrorMessage name="make" />
              </Div>
            </Label>

            <Label>
              Price/1 hour
              <Div>
                {isShownToDol && <TextToDol>To </TextToDol>}
                <FieldPrice
                  name="rentalPrice"
                  type="number"
                  as="select"
                  className={isShownToDol && 'isShownToDol'}
                  onClick={togglePriceMenu}
                  onChange={val => {
                    setFieldValue('rentalPrice', val.target.value);
                    setOpenedPrice(true);
                    val.target.value === ''
                      ? setIsShownToDol(false)
                      : setIsShownToDol(true);
                  }}
                >
                  <option value="">To $</option>
                  {getPriceOptions(prices)}
                </FieldPrice>
                <OpenDiv>
                  {openedPrice ? (
                    <OpenedSvg width={20} height={20} />
                  ) : (
                    <ClosedSvg width={20} height={20} />
                  )}
                </OpenDiv>

                <ErrorMessage name="rentalPrice" />
              </Div>
            </Label>

            <Label>
              Сar mileage/km
              <DivWrapper>
                <Div>
                  <TextFrom>From </TextFrom>
                  <FieldFrom
                    value={values.mileageFrom}
                    onValueChange={val =>
                      setFieldValue('mileageFrom', val.floatValue)
                    }
                  />
                  <ErrorMessage name="mileageFrom" />
                </Div>
                <Div>
                  <TextTo>To </TextTo>
                  <FieldTo
                    value={values.mileageTo}
                    onValueChange={val =>
                      setFieldValue('mileageTo', val.floatValue)
                    }
                  />

                  <ErrorMessage style={{ display: 'block' }} name="mileageTo" />
                </Div>
              </DivWrapper>
            </Label>

            <SearchBtn className="accent-button" type="submit">
              Search
            </SearchBtn>
          </Form>
        );
      }}
    </Formik>
  );
};
