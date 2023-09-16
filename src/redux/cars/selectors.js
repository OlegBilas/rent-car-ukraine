import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavoriteIds = state => state.cars.favoriteIds;

export const selectFavoriteCars = createSelector(
  [selectFavoriteIds, selectCars],
  (favoriteIds, items) => {
    const favoriteCars = [];
    favoriteIds.forEach(id => {
      const carFinded = items.find(car => car.id === id);
      carFinded && favoriteCars.push(carFinded);
    });
    return favoriteCars;
  }
);
