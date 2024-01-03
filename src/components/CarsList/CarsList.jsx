import {
  List,
  Item,
  Image,
  LearnMoreBtn,
  Like,
  LikeBtn,
} from './CarsList.styled';
import { useState } from 'react';
import {
  calcWidth,
  getFirstLine,
  getSecondLine,
  substitudeImages,
} from 'utils';
import { CarTitle } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';
import { useDispatch } from 'react-redux';
import { setFavorite } from 'redux/cars/carsSlice';
import { ModalWrapper } from 'components/ModalWrapper/ModalWrapper';
import { useTheme } from 'styled-components';

export const CarsList = ({ cars }) => {
  const theme = useTheme();
  cars = substitudeImages(cars, 274, theme.width);
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
            width={calcWidth(274, theme.width)}
            height="268"
          />
          <CarTitle car={car} />
          <Line carInfo={getFirstLine(car)} />
          <Line carInfo={getSecondLine(car)} />
          <LearnMoreBtn
            className="accent-button"
            type="buton"
            onClick={() => toggleModal(car)}
          >
            Learn more
          </LearnMoreBtn>
        </Item>
      ))}
      {showModal && <ModalWrapper car={car} toggleModal={toggleModal} />}
    </List>
  );
};
