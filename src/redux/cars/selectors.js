import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectMakes = state => state.cars.makes;
const selectAllCars = state => state.cars.items;
const selectFavoriteIds = state => state.cars.favoriteIds;

export const selectCars = createSelector(
  [selectFavoriteIds, selectAllCars],
  (favoriteIds, items) => {
    console.log(items);
    console.log(favoriteIds);
    const result = items.map(car => ({ ...car, favorite: false }));

    favoriteIds.forEach(id => {
      const carFinded = result.find(car => car.id === id);
      carFinded && (carFinded.favorite = true);
    });

    return result;
  }
);

// export const selectFavoriteCars = state => {
//   const items = selectCars(state);
//   return items.filter(car => car.favorite === true);
// };

export const selectFavoriteCars = createSelector([selectCars], items =>
  items.filter(car => car.favorite === true)
);
