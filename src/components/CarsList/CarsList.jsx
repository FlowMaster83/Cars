import PropTypes from "prop-types";
import { Car } from "../Cars/Car";
import { ContainerList, CarList, CarElement } from "./CarList.styled";

export const CarsList = ({ items }) => {
  return (
    <ContainerList>
      <CarList>
        {items.map((car) => (
          <CarElement key={car.brand}>
            <Car car={car} />
          </CarElement>
        ))}
      </CarList>
    </ContainerList>
  );
};

CarsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/* Компонент CarsList 

принимает в себя Компонент Car
возвращает разметку
методом map создаёт элементы списка
метод map пишется на названии пропса Компонента CarsList items
прописаны проптайпы

*/
