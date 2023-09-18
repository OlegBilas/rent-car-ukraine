import { CarTitle } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';

import {
  Close,
  CloseBtn,
  Container,
  Description,
  FirstLineModal,
  Img,
  ListRequirements,
  PhoneUs,
  SecondLineModal,
  Title,
} from './CarModal.styled';
import { getFirstLineModal, getSecondLineModal } from 'utils';

export const CarModal = ({ car, toggleModal }) => {
  const getOtherRequirements = ({ rentalConditions, mileage, rentalPrice }) => {
    let array = rentalConditions.split('\n');
    const age = Number.parseInt(array[0]);
    array = array.slice(1);
    const price = `${rentalPrice.replace('$', '')}$`;
    return [
      `Minimum age: <span>${age}</span>`,
      ...array,
      `Mileage: <span>${mileage}</span>`,
      `Price: <span>${price}</span>`,
    ];
  };

  return (
    <Container>
      <CloseBtn type="button" onClick={() => toggleModal()}>
        <Close width={24} height={24} />
      </CloseBtn>

      <Img
        src={car.img}
        alt={`${car.make} ${car.model}, ${car.year}`}
        width="100%"
        height="auto"
      />
      <CarTitle car={car} />
      <FirstLineModal carInfo={getFirstLineModal(car)} />
      <SecondLineModal carInfo={getSecondLineModal(car)} />
      <Description>{car.description}</Description>
      <Title style={{ marginBottom: 8 }}>
        Accessories and functionalities:
      </Title>
      <Line carInfo={car.accessories} />
      <Line carInfo={car.functionalities} />
      <Title style={{ marginTop: 24, marginBottom: 8 }}>
        Rental Conditions:
      </Title>
      <ListRequirements>
        {getOtherRequirements(car).map((item, index) => (
          <li key={index}>{`${item}`}</li>
        ))}
      </ListRequirements>
      <PhoneUs href="tel:+380730000000">Rental car</PhoneUs>
    </Container>
  );
};
