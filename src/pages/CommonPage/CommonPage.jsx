import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { CarsList } from 'components/CarsList/CarsList';
import { FormSearch } from 'components/Form/Form';

import { getCars } from 'utils';
import { LoadMoreBtn } from './CommonPage.styled';
import { Helmet } from 'react-helmet-async';

const CommonPage = ({ allCars, title }) => {
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

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
    if (carsObject.overallLength === 0 && page === 1) {
      // відсутні дані
      toast.error("We didn't find any info on your request!");
      ref.current = true;
      return;
    }

    if (carsObject.overallLength === carsObject.carsFiltered.length) {
      // кінець колекції
      toast.warn("It's the end of the collection!");
      ref.current = true;
    }
    setCars(carsObject.carsFiltered);
  };

  return (
    <section>
      <Helmet>
        <title>{title}</title>
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

export default CommonPage;
