import { calcWidthForImage } from './forCSS';


export const substitudeImages = (
  cars,
  imageSize,
  widthWindow
) => {
  const imageWidth = calcWidthForImage(imageSize, widthWindow);

  return cars.map((car) => {
    const newImage = car.img.replace(
      'upload/',
      `upload/c_fill,g_auto,w_${imageWidth}/`
    );
    return { ...car, img: newImage };
  });
};
