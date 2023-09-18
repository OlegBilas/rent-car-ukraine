import { CarTitle } from 'components/CarTitle/CarTitle';
import {
  Close,
  CloseBtn,
  Container,
  FirstLineModal,
  Img,
  SecondLineModal,
} from './CarModal.styled';
import { getFirstLineModal, getSecondLineModal } from 'utils';

export const CarModal = ({ car, toggleModal }) => {
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
    </Container>
  );
};
