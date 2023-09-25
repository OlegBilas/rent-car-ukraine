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
      car =>
        Number.parseInt(
          car.rentalPrice.replaceAll('$', '').replaceAll(',', '')
        ) <= Number.parseInt(rentalPrice)
    );
  }

  if (mileageFrom) {
    result = result.filter(car => car.mileage >= mileageFrom);
  }

  if (mileageTo) {
    result = result.filter(car => car.mileage <= mileageTo);
  }

  const index = page * PER_PAGE;

  const resultByPage = result.slice(0, index);
  return {
    overallLength: result.length,
    carsFiltered: resultByPage,
  };
};
