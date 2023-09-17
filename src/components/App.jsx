import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import {
  selectCars,
  selectFavoriteCars,
  selectIsLoading,
} from 'redux/cars/selectors';
import { fetchCars, fetchMakes } from 'redux/cars/operations';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchMakes());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  const allCars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="catalog"
            element={<CatalogPage allCars={allCars} favorite={false} />}
          />
          <Route
            path="favorites"
            element={<CatalogPage allCars={favoriteCars} favorite={true} />}
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
