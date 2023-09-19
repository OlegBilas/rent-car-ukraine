import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';
import { Section } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Section>
      <Description />
      <ReviewsSlider />
    </Section>
  );
};
