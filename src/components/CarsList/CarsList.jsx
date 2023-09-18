import { CarModal } from 'components/CarModal/CarModal';
import {
  List,
  Item,
  Image,
  LearnMoreBtn,
  Like,
  LikeBtn,
} from './CarsList.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { getFirstLine, getSecondLine } from 'utils';
import { CarTitle } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';
import { useDispatch } from 'react-redux';
import { setFavorite } from 'redux/cars/carsSlice';
import { ModalWrapper } from 'components/ModalWrapper/ModalWrapper';

export const CarsList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);
  const [car, setCar] = useState();

  const toggleModal = car => {
    setShowModal(prevState => !prevState);
    setCar(car);
  };

  const dispatch = useDispatch();
  const handleClick = id => {
    dispatch(setFavorite(id));
  };

  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <LikeBtn
            type="button"
            className={car.favorite ? 'liked' : 'non-liked'}
            onClick={() => handleClick(car.id)}
          >
            <Like
              width={18}
              height={18}
              className={car.favorite ? 'liked' : 'non-liked'}
            />
          </LikeBtn>
          <Image
            src={car.img}
            alt={`${car.make} ${car.model}, ${car.year}`}
            width="100%"
            height="268"
          />
          <CarTitle car={car} />
          <Line carInfo={getFirstLine(car)} />
          <Line carInfo={getSecondLine(car)} />
          <LearnMoreBtn type="buton" onClick={() => toggleModal(car)}>
            Learn more
          </LearnMoreBtn>
        </Item>
      ))}
      {showModal && <ModalWrapper car={car} toggleModal={toggleModal} />}
    </List>
  );
};
