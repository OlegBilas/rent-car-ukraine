import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { CarsList } from 'components/CarsList/CarsList';
import { FormSearch } from 'components/Form/Form';

import { getCars } from 'utils';
import { LoadMoreBtn } from './CatalogPage.styled';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/cars/selectors';

const FavoritePage = () => {
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const allCars = useSelector(selectFavoriteCars);

  const ref = useRef();

  useEffect(() => {
    setPage(1);
    setCars([]);
    ref.current = false;
  }, [query]);

  useEffect(() => {
    const carsObject = getCars(allCars, query, page);

    setCars(carsObject.carsFiltered);
  }, [allCars, page, query]);

  const handleClickLoadMore = () => {
    const carsObject = getCars(allCars, query, page);
    setPage(prevState => prevState + 1);
    if (allCars.length > 0 && carsObject.overallLength === 0 && page === 1) {
      // відсутні дані
      toast.error("We didn't find any info on your request!");
      ref.current = true;
      return;
    }

    if (
      allCars.length > 0 &&
      carsObject.overallLength === carsObject.carsFiltered.length
    ) {
      // кінець колекції
      toast.warn("It's the end of the collection!");
      ref.current = true;
    }
    setCars(carsObject.carsFiltered);
  };

  return (
    <section>
      <Helmet>
        <title>Your cars</title>
      </Helmet>
      <FormSearch setQuery={setQuery} />
      <CarsList cars={cars} />
      {!ref.current && (
        <LoadMoreBtn type="buttton" onClick={handleClickLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default FavoritePage;
