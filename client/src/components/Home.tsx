import { BrowserRouter, Route } from "react-router-dom";
import Title from "./Title";
import ListCars from "./ListCars";
import AddCar from "./AddCar";
import { Switch } from "react-router";

function Home() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Switch>
          <Route path="/addCar" component={AddCar} />
          <Route render={() => <ListCars />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Home;
