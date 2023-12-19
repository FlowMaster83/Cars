import { CarsList } from './CarsList/CarsList';

import cars from '../data/cars.json';

const App = () => {
  return <CarsList items={cars} />;
};

export default App;

// Компонент App принимает в себя файл данных, все остальные компоненты и их пропы
