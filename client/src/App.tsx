import React from "react";
import Home from "./Component/Home";
import styles from "./Styles/App.module.scss";

type cars = {
  id: number;
  title: string;
  image: string;
  priceUsd: Array<number>;
  priceByn: Array<number>;
};
export interface AppProps {
	cars: cars[],
	
}
function App({
  cars
}:AppProps) {
  return (
    <div className={styles.App}>
      <Home cars={cars}/>
    </div>
  );
}
export default App;
