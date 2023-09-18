import React from 'react';

// import m1 from '../../images/mainPage/phohe/phone_calendar.png';
// import m1Retina from '../../images/mainPage/phohe/phone_calendar@2x.png';
// import t1 from '../../images/mainPage/tablet/tablet_calendar.png';
// import t1Retina from '../../images/mainPage/tablet/tablet_calendar@2x.png';
// import d1 from '../../images/mainPage/desktop/desktop_calendar.png';
// import d1Retina from '../../images/mainPage/desktop/desktop_calendar@2x.png';

// import m2 from '../../images/mainPage/phohe/phone_sidebar.png';
// import m2Retina from '../../images/mainPage/phohe/phone_sidebar@2x.png';
// import t2 from '../../images/mainPage/tablet/tablet_sidebar.png';
// import t2Retina from '../../images/mainPage/tablet/tablet_sidebar@2x.png';
// import d2 from '../../images/mainPage/desktop/desktop_sidebar.png';
// import d2Retina from '../../images/mainPage/desktop/desktop_sidebar@2x.png';

// import m3 from '../../images/mainPage/phohe/phone_all.png';
// import m3Retina from '../../images/mainPage/phohe/phone_all@2x.png';
// import t3 from '../../images/mainPage/tablet/tablet_all.png';
// import t3Retina from '../../images/mainPage/tablet/tablet_all@2x.png';
// import d3 from '../../images/mainPage/desktop/desktop_all.png';
// import d3Retina from '../../images/mainPage/desktop/desktop_all@2x.png';

import {
  Info,
  InfoWrapper,
  ListItem,
  StyledLabel,
  StyledNumber,
  StyledText,
  TitleWrapper,
} from './Description.styled';

const Description = () => {
  return (
    <ul>
      <ListItem>
        <InfoWrapper>
          <TitleWrapper>
            <StyledNumber>1.</StyledNumber>
            <StyledLabel>Calendar</StyledLabel>
            <StyledText>View</StyledText>
          </TitleWrapper>
          <Info>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </Info>
        </InfoWrapper>
      </ListItem>
      <ListItem>
        <InfoWrapper>
          <TitleWrapper>
            <StyledNumber>2.</StyledNumber>
            <StyledText>Sidebar</StyledText>
          </TitleWrapper>
          <Info>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </Info>
        </InfoWrapper>
      </ListItem>
      <ListItem>
        <InfoWrapper>
          <TitleWrapper>
            <StyledNumber>3.</StyledNumber>
            <StyledLabel>All in</StyledLabel>
            <StyledText>One</StyledText>
          </TitleWrapper>
          <Info>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </Info>
        </InfoWrapper>
      </ListItem>
    </ul>
  );
};

export default Description;
