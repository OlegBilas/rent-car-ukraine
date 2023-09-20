import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectCars,
  selectFavoriteCars,
  selectIsLoading,
} from 'redux/cars/selectors';

import { Layout } from './Layout/Layout';
import { fetchCars, fetchMakes } from 'redux/cars/operations';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { FavoritePage } from 'pages/CatalogPage/FavoritePage';

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
          <Route path="catalog" element={<CatalogPage allCars={allCars} />} />
          <Route
            path="favorites"
            element={<FavoritePage allCars={favoriteCars} />}
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
