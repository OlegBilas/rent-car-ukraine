import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

import { MainPageContainer } from './HomePage.styled';

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <Description />
        <ReviewsSlider />
      </MainPageContainer>
    </>
  );
};

export default MainPage;
