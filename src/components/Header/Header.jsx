import React from 'react';

// import PropTypes from 'prop-types'

import {
  CalendarSvg,
  NavLink,
  StatisticsSvg,
  UserSvg,
  LogoContainer,
  LogoInnerText,
  LogoText,
  LogoWrapper,
  CloseSvg,
  ButtonClose,
  NavigationBlock,
  NavigationLegend,
  Wrapper,
} from './Header.styled';
import { format } from 'date-fns';

export const Header = ({ handleClick }) => {
  const currentMonth = format(new Date(), 'yyyy-MM');

  const closeSideBar = () => {
    if (window.innerWidth < 1440) {
      handleClick();
    }
  };

  return (
    <Wrapper>
      <LogoContainer>
        <LogoWrapper />
        <LogoText>
          G<LogoInnerText>oo</LogoInnerText>seTrack
        </LogoText>
        <ButtonClose type="button" onClick={handleClick}>
          <CloseSvg />
        </ButtonClose>
      </LogoContainer>
      <NavigationBlock>
        <NavigationLegend>User Panel</NavigationLegend>
        <NavLink to="/account" onClick={closeSideBar}>
          <UserSvg />
          My account
        </NavLink>
        <NavLink to={`/calendar/month/${currentMonth}`} onClick={closeSideBar}>
          <CalendarSvg />
          Calendar
        </NavLink>
        <NavLink to="/statistics" onClick={closeSideBar}>
          <StatisticsSvg />
          Statistics
        </NavLink>
      </NavigationBlock>
    </Wrapper>
  );
};

// UserNav.propTypes = {

// }
