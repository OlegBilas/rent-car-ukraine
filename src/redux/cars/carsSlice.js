import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from 'redux/cars/operations';

// const initialItems = [
// {"id": 9582,
// "year": 2008,
// "make": "Buick",
// "model": "Enclave",
// "type": "SUV",
// "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
// "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
// "fuelConsumption": "10.5",
// "engineSize": "3.6L V6",
// "accessories": [
//     "Leather seats",
//     "Panoramic sunroof",
//     "Premium audio system"
// ],
// "functionalities": [
//     "Power liftgate",
//     "Remote start",
//     "Blind-spot monitoring"
// ],
// "rentalPrice": "$40",
// "rentalCompany": "Luxury Car Rentals",
// "address": "123 Example Street, Kiev, Ukraine",
// "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
// "mileage": 5858},
// ];

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favoriteIds: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    setFavorite(state, action) {
      const carIndex = state.favoriteIds.findIndex(id => id === action.payload);
      if (carIndex >= 0) {
        state.favoriteIds = state.favoriteIds.splice(carIndex, 1);
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state, action) {
  state.items = action.payload;

  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const { setFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
