export const getCars = (cars, query, page, PER_PAGE = 8) => {
  let result = [];
  if (cars.lenth === 0) return result;

  const { make, rentalPrice, mileageFrom, mileageTo } = query;
  result = [...cars];

  if (make) {
    result = result.filter(car => car.make === make);
  }

  if (rentalPrice) {
    result = result.filter(
      car => Number.parseInt(car.rentalPrice) <= Number.parseInt(rentalPrice)
    );
  }

  if (mileageFrom) {
    result = result.filter(
      car =>
        Number.parseInt(car.mileageFrom.replaceAll(',', '')) >=
        Number.parseInt(mileageFrom.replaceAll(',', ''))
    );
  }

  if (mileageTo) {
    result = result.filter(
      car =>
        Number.parseInt(car.mileageTo.replaceAll(',', '')) <=
        Number.parseInt(mileageTo.replaceAll(',', ''))
    );
  }

  const index = page * PER_PAGE - 1;
  return result.slice(index, index + PER_PAGE);
};
