import PropTypes from "prop-types";
import { CarSection, BrandName, CarInfo, Model } from "./Car.styled";

export const Car = ({
  car: { img, brand, model, carBody, color, price, year },
}) => {
  return (
    <CarSection>
      <BrandName>{brand}</BrandName>
      <CarInfo>
        <img src={img} alt={model} width={200} />
        <Model>Model: {model}</Model>
        <p>Car body: {carBody}</p>
        <p>Color: {color}</p>
        <p>Price: {price}</p>
        <p>Year: {year}</p>
      </CarInfo>
    </CarSection>
  );
};

Car.propTypes = {
  car: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string.isRequired,
    carBody: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

// Компонент Car в теле функции деструктуризирует пропсы
// возвращает разметку
// прописаны проптайпы
