import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';

import { MainPageContainer } from './mainPage.styled';

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
