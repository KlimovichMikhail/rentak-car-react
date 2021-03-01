import "../styles/ListCars.css";
import Car from "./Car";
import audi from "../Image/Audi A7.png";
import bmw from "../Image/BMW X5.png";
import jeep from "../Image/Jeep Patriot.png";
import kia from "../Image/Kia Rio.png";

function ListCars() {
  const cars = [
    { id: 1, title: "Audi A7", image: audi, 
    priceUsd1: "100 USD", priceByn1:"260 BYN",
    priceUsd2: "90 USD", priceByn2:"235 BYN",
    priceUsd3: "80 USD", priceByn3:"210 BYN",
    priceUsd4: "70 USD", priceByn4:"180 BYN",
    priceUsd5: "60 USD", priceByn5:"155 BYN"},
    { id: 2, title: "BMW X5", image: bmw, 
    priceUsd1: "120 USD", priceByn1:"315 BYN",
    priceUsd2: "110 USD", priceByn2:"285 BYN",
    priceUsd3: "100 USD", priceByn3:"260 BYN",
    priceUsd4: "90 USD", priceByn4:"235 BYN",
    priceUsd5: "80 USD", priceByn5:"210 BYN"},
    { id: 3, title: "Jeep Patriot", image: jeep, 
    priceUsd1: "45 USD", priceByn1:"115 BYN", 
    priceUsd2: "40 USD", priceByn2:"105 BYN",
    priceUsd3: "35 USD", priceByn3:"90 BYN",
    priceUsd4: "30 USD", priceByn4:"80 BYN",
    priceUsd5: "25 USD", priceByn5:"65 BYN"},
    { id: 4, title: "Kia Rio", image: kia , 
    priceUsd1: "40 USD", priceByn1:"105 BYN",
    priceUsd2: "35 USD", priceByn2:"90 BYN",
    priceUsd3: "30 USD", priceByn3:"80 BYN",
    priceUsd4: "25 USD", priceByn4:"65 BYN",
    priceUsd5: "20 USD", priceByn5:"50 BYN"}
  ];
  const listCars = cars.map(car => 
  <Car title={car.title} 
  image={car.image} 
  priceUsd1={car.priceUsd1}
  priceByn1={car.priceByn1}
  priceUsd2={car.priceUsd2}
  priceByn2={car.priceByn2}
  priceUsd3={car.priceUsd3}
  priceByn3={car.priceByn3}
  priceUsd4={car.priceUsd4}
  priceByn4={car.priceByn4}
  priceUsd5={car.priceUsd5}
  priceByn5={car.priceByn5}
  />);
  return (
    <div className="conteiner">
      <div className="catalog-list">
        {listCars}
      </div>
    </div>
  );
}

export default ListCars;
