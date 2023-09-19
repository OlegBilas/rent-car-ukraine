import React from 'react';

import back from 'images/HomePage/parking-825371_1280.jpg';

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
