import React from 'react';

import UserNav from '../Header/Header';
import LogoutBtn from '../MainBtn/MainBtn';
import { ContainerSideBar } from './SideBar.styled';

function SideBar({ isShown, handleClick }) {
  return (
    <ContainerSideBar className={isShown ? 'shown' : 'hidden'}>
      <UserNav handleClick={handleClick}></UserNav>
      <LogoutBtn></LogoutBtn>
    </ContainerSideBar>
  );
}

export default SideBar;
