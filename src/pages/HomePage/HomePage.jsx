import Description from 'components/Description/Description';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';
import { Section } from './HomePage.styled';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

export const HomePage = () => {
  return (
    <Section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Description />
      <ReviewsSlider />
    </Section>
  );
};
