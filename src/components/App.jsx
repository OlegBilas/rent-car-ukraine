import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import {
  selectCars,
  selectFavoriteCars,
  selectIsLoading,
} from 'redux/cars/selectors';
import { fetchCars } from 'redux/cars/operations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const allCars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  return isLoading ? (
    <Loader />
  ) : (
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
        <Route path="*" element={<Layout />} />
      </Route>
    </Routes>
  );
}
