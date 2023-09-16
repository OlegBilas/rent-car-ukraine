import { CarTitle } from 'components/CarTitle/CarTitle';
import {
  Container,
  FirstLineModal,
  Img,
  SecondLineModal,
} from './CarModal.styled';
import { getFirstLineModal, getSecondLineModal } from 'utils';

export const CarModal = ({ car, toggleModal }) => {
  return (
    <Container>
      <button type="button" onClick={() => toggleModal()}></button>
      <Img
        src={car.img}
        alt={`${car.make} ${car.model}, ${car.year}`}
        width="100%"
        height="auto"
      />
      <CarTitle car={car} />
      <FirstLineModal carInfo={getFirstLineModal(car)} />
      <SecondLineModal carInfo={getSecondLineModal(car)} />
    </Container>
  );
};
