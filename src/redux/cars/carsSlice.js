import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars, fetchMakes } from 'redux/cars/operations';


const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [fetchCars, fetchMakes];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favoriteIds: [],
    makes: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    setFavorite(state, action) {
      const carIndex = state.favoriteIds.findIndex(id => id === action.payload);
      if (carIndex >= 0) {
        state.favoriteIds.splice(carIndex, 1);
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFetchCars)
      .addCase(fetchMakes.fulfilled, handleFetchMakes)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.REJECTED)),
        handleRejected
      );
  },
});

function handleFetchCars(state, action) {
  state.items = action.payload;
}

function handleFetchMakes(state, action) {
  state.makes = action.payload;
}

function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const { setFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
