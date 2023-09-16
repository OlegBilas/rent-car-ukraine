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

export const getFirstLineModal = ({ address, rentalCompany, accessories }) => {
  const { city, country } = getCarLocation(address);

  const array = [city, country, rentalCompany];

  for (const item of accessories) {
    if (item.toLowerCase().contains('premium')) return array.push('Premium');
  }

  return array;
};

export const getSecondLineModal = ({
  type,
  model,
  mileage,
  functionalities,
}) => {
  return [type, model, mileage, functionalities[0]];
};
