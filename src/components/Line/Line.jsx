import { LineList } from './Line.styled';

export const Line = ({ carInfo }) => {
  return (
    <LineList>
      {carInfo.map(item => (
        <li key={item}>{item}</li>
      ))}
    </LineList>
  );
};
