import React from "react";
import styles from "../Styles/ListCars.module.scss";
import Car from "./Car";
import { connect } from "react-redux";
class ListCars extends React.Component<any, any> {
  showList() {
    return this.props.cars.map(car => {
      return (
        <Car
          key={car.id}
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
      );
    });
  }
  render() {
    return (
      <div className={styles.conteiner}>
        <div className={styles.catalogList}>{this.showList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}
export default connect(mapStateToProps)(ListCars);
