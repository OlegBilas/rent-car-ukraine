export const getCarLocation = address => {
  const array = address.split(',');
  return {
    city: array[2],
    country: array[1],
  };
};

export const getFirstLine = ({ address, rentalCompany, accessories }) => {
  const { city, country } = getCarLocation(address);

  const array = [city, country, rentalCompany];

  for (const item of accessories) {
    if (item.toLowerCase().contains('premium')) return array.push('Premium');
  }

  return array;
};

export const getSecondLine = ({ type, model, mileage, functionalities }) => {
  return [type, model, mileage, functionalities[0]];
};

export const getFirstLineModal = ({
  address,
  rentalCompany,
  id,
  year,
  type,
}) => {
  const { city, country } = getCarLocation(address);

  return [city, country, `id: ${id}`, `Year: ${year}`, `Type: ${type}`];
};

export const getSecondLineModal = ({ fuelConsumption, engineSize }) => {
  return [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];
};

function MyCeil10(val) {
  return Math.ceil(val / 10) * 10;
}

export const getPriceRanges = cars => {
  const priceMinMax = cars.reduce(
    (reducer, { rentalPrice }) => {
      rentalPrice < reducer.min && (reducer.min = rentalPrice);
      rentalPrice > reducer.max && (reducer.max = rentalPrice);
      return reducer;
    },
    { min: Number.MAX_SAFE_INTEGER, max: 0 }
  );

  const minPrice = MyCeil10(priceMinMax.min);
  const maxPrice = MyCeil10(priceMinMax.max);

  const priceRanges = [];
  for (let price = minPrice; price <= maxPrice; price += 10) {
    priceRanges.push(price);
  }

  return priceRanges;
};
