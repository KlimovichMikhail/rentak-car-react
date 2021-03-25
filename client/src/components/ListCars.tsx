import React from "react";
import styles from "../styles/ListCars.module.scss";
import Car from "./Car";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCars } from "../redux/actions/carAction";

class ListCars extends React.Component<any, any> {
  showList() {
    return this.props.cars.map(car => {
      return (
        <Car
          key={car.id}
          id={car.id}
          title={car.title}
          image={car.image}
          priceDaysUsd={car.priceDaysUsd}
          priceDaysByn={car.priceDaysByn}
          priceHoursUsd={car.priceHoursUsd}
          priceHoursByn={car.priceHoursByn}
          setTitle={this.props.addCars}
        />
      );
    });
  }
  componentDidMount() {
    this.props.getCars();
  }
  render() {
    return (
      <div className={styles.conteiner}>
        <NavLink to="/addCar">+ Add Car</NavLink>
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
function mapDispatchToProps(dispatch) {
  return {
    getCars: () => {
      dispatch(getCars());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCars);
