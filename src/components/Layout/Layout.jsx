import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Section } from './Layout.styled';
import Loader from '../Loader/Loader';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Section>
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
};
