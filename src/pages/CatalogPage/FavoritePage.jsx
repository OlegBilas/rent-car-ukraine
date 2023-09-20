import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { CarsList } from 'components/CarsList/CarsList';
import { SideBar } from 'components/SideBar/SideBar';

import { getCars } from 'utils';
import { LoadMoreBtn } from './CatalogPage.styled';
import { Helmet } from 'react-helmet-async';

export const FavoritePage = ({ allCars }) => {
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const handleClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const ref = useRef();

  useEffect(() => {
    setPage(1);
    setCars([]);
    ref.current = false;
  }, [query]);

  useEffect(() => {
    const carsFiltered = getCars(allCars, query, page);

    if (carsFiltered.length === 0 && page === 1) {
      // відсутні дані
      toast.error("We didn't find any adverts on your request!");
      ref.current = true;
    }

    if (carsFiltered.length === 0 && page > 1) {
      // кінець колекції
      toast.warn("It's the end of the adverts' collection!");
      ref.current = true;
    }

    if (page > 1) {
      // запит по тих самих ключових полях
      setCars(prevState => [...prevState, ...carsFiltered]);
    } else {
      // новий запит
      setCars(carsFiltered);
    }
  }, [page, allCars, query]);

  return (
    <section>
      <Helmet>
        <title>Your cars</title>
      </Helmet>
      <SideBar setQuery={setQuery} />
      <CarsList cars={cars} />
      {!ref.current && (
        <LoadMoreBtn type="buttton" onClick={handleClickLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};
