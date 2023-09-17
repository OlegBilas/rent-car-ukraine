import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

import { CarsList } from 'components/CarsList/CarsList';
import { SideBar } from 'components/SideBar/SideBar';

import { getCars } from 'utils';
import { LoadMoreBtn } from './CatalogPage.styled';

export const CatalogPage = ({ allCars, favorite }) => {
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState();

  const handleClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const carsFiltered = getCars(allCars, query, page);

  useEffect(() => {
    if (carsFiltered.length === 0 && page === 1) {
      // відсутні дані
      toast.error("We didn't find any adverts on your request!");
    }

    if (carsFiltered.length === 0 && page > 1) {
      // кінець колекції
      toast.warn("It's the end of the adverts' collection on your request!");
    }

    if (page > 1) {
      // запит по тих самих ключових полях
      setCars(prevState => [...prevState, ...carsFiltered]);
    } else {
      // новий запит
      setCars(carsFiltered);
    }
  }, [allCars, carsFiltered, query, page]);

  return (
    <section>
      <Helmet>
        {favorite ? <title>Your cars</title> : <title>Our adverts</title>}
      </Helmet>
      <SideBar setQuery={setQuery} />
      <CarsList cars={cars} />
      {carsFiltered.length > 0 && (
        <LoadMoreBtn type="buttton" onClick={handleClickLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};
