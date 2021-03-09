import { BrowserRouter, Route } from "react-router-dom";
import Title from "./Title";
import ListCars from "./ListCars";

function Home() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Route render={() => <ListCars />} />
      </div>
    </BrowserRouter>
  );
}

export default Home;
