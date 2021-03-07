import { BrowserRouter, Route } from "react-router-dom";
import Title from "./Title";
import ListCars from "./ListCars";

type cars = {
  id: number;
  title: string;
  image: string;
  priceUsd: Array<number>;
  priceByn: Array<number>;
};
export interface HomeProps {
  cars: cars[];
}
function Home({ cars }: HomeProps) {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Route render={() => <ListCars cars={cars}/>} />
      </div>
    </BrowserRouter>
  );
}

export default Home;
