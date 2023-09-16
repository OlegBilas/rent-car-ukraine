import { CarModal } from 'components/CarModal/CarModal';
import {
  List,
  Item,
  Image,
  FirstLine,
  SecondLine,
  LearnMoreBtn,
} from './CarsList.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { getFirstLine, getSecondLine } from 'utils';
import { CarTitle } from 'components/CarTitle/CarTitle';

export const CarsList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <Image
            src={car.img}
            alt={`${car.make} ${car.model}, ${car.year}`}
            width="100%"
            height="auto"
          />
          <CarTitle car={car} />
          <FirstLine carInfo={getFirstLine(car)} />
          <SecondLine carInfo={getSecondLine(car)} />
          <LearnMoreBtn type="buton" onClick={toggleModal}>
            Learn more
          </LearnMoreBtn>
          {showModal && (
            <Modal car={car} toggleModal={toggleModal}>
              <CarModal car={car} toggleModal={toggleModal} />
            </Modal>
          )}
        </Item>
      ))}
    </List>
  );
};
