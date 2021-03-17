import React from "react";
import styles from "../styles/ListCars.module.scss";
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
          priceDaysUsd={car.priceDaysUsd}
          priceDaysByn={car.priceDaysByn}
          priceHoursUsd={car.priceHoursUsd}
          priceHoursByn={car.priceHoursByn}
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
