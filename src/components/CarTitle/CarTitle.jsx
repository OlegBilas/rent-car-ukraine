import React from 'react';
import { Model, Title, TitleWrapper } from './CarTitle.styled';

export const CarTitle = ({ car }) => {
  return (
    <TitleWrapper>
      <Title>
        <span>car.make</span>
        <Model>car.model</Model>
        <span>car.year</span>
      </Title>
      <p>{car.rentalPrice}</p>
    </TitleWrapper>
  );
};
