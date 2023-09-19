import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

import {
  Container,
  Title,
  AvatarWrapper,
  AvatarImg,
  Name,
  SliderCard,
  UserInfo,
  ReviewContainer,
} from './ReviewsSlider.styled';

import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';

const ReviewsSlider = () => {
  const cars = useSelector(selectCars);

  SwiperCore.use([Autoplay]);

  return (
    <Container>
      <Title>Our adverts</Title>
      <div>
        <Swiper
          initialSlide={1}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: '#prev-button',
            nextEl: '#next-button',
          }}
          modules={[Navigation]}
          direction={'horizontal'}
          autoHeight={true}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            1440: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {cars.map(car => (
            <SwiperSlide key={car.id}>
              <SliderCard>
                <ReviewContainer>
                  <AvatarWrapper>
                    <AvatarImg
                      src={car.img}
                      alt={`${car.make} ${car.model}, ${car.year}`}
                      width="100%"
                      height="86%"
                    />
                    <UserInfo>
                      <Name>{`${car.make} ${car.model}, ${car.year}`}</Name>
                    </UserInfo>
                  </AvatarWrapper>
                </ReviewContainer>
              </SliderCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
export default ReviewsSlider;
