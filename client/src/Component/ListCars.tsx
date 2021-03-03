import styles from "../styles/ListCars.module.scss";
import Car from "./Car";
import audi from "../Image/Audi A7.png";
import bmw from "../Image/BMW X5.png";
import jeep from "../Image/Jeep Patriot.png";
import kia from "../Image/Kia Rio.png";

function ListCars() {
  const cars = [
    {
      id: 1,
      title: "Audi A7",
      image: audi,
      priceUsd: [100, 90, 80, 70, 60],
      priceByn: [260, 235, 210, 180, 155]
    },
    { id: 2, title: "BMW X5", image: bmw, priceUsd: [120, 110, 100, 90, 80], priceByn: [315, 285, 260, 235, 210] },
    { id: 3, title: "Jeep Patriot", image: jeep, priceUsd: [45, 40, 35, 30, 25], priceByn: [115, 105, 90, 80, 65] },
    { id: 4, title: "Kia Rio", image: kia, priceUsd: [40, 35, 30, 25, 20], priceByn: [105, 90, 80, 65, 50] }
  ];
  const listCars = cars.map(car => (
    <Car
      title={car.title}
      image={car.image}
      priceUsd1={car.priceUsd[0]}
      priceByn1={car.priceByn[0]}
      priceUsd2={car.priceUsd[1]}
      priceByn2={car.priceByn[1]}
      priceUsd3={car.priceUsd[2]}
      priceByn3={car.priceByn[2]}
      priceUsd4={car.priceUsd[3]}
      priceByn4={car.priceByn[3]}
      priceUsd5={car.priceUsd[4]}
      priceByn5={car.priceByn[4]}
    />
  ));
  return (
    <div className={styles.conteiner}>
      <div className={styles.catalogList}>{listCars}</div>
    </div>
  );
}

export default ListCars;
