import React from "react";
import styles from "../styles/Car.module.scss";
import ListPriceDays from "./ListPriceDays";
import ListPriceHours from "./ListPriceHours";
import { connect } from "react-redux";
import { deleteCar} from "../redux/actions/carAction";
export interface CarProps {
  id: number;
  title: string;
  image: string;
  priceDaysUsd: Array<number>;
  priceDaysByn: Array<number>;
  priceHoursUsd: Array<number>;
  priceHoursByn: Array<number>;
}

class Car extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.handlePriceDaysClick = this.handlePriceDaysClick.bind(this);
    this.handlePriceHoursClick = this.handlePriceHoursClick.bind(this);
    this.state = {
      isPriceDays: false
    };
  }

  deleteCar = id => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteCar(id);
    }
  };

  clearData = () => {
    this.setState({
      id: 0,
      title: "",
      image: "",
      priceDaysUsd: [],
      priceDaysByn: [],
      priceHoursUsd: [],
      priceHoursByn: []
    });
  };
  handlePriceDaysClick() {
    this.setState({ isPriceDays: true });
  }

  handlePriceHoursClick() {
    this.setState({ isPriceDays: false });
  }
  render() {
    const isPriceDays = this.state.isPriceDays;

    return (
      <div className={styles.car}>
        <img src={this.props.image} alt="Audi" />
        <div className={styles.bottom}>
          <div className={styles.name}>
            <span>{this.props.title}</span>
            <hr />
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab}>
              <div className={styles.tabDays} onClick={this.handlePriceDaysClick}>
                Посуточная
              </div>
            </div>
            <div className={styles.tab}>
              <div className={styles.tabHours} onClick={this.handlePriceHoursClick}>
                Почасовая
              </div>
            </div>
          </div>
          <div>
            {isPriceDays ? (
              <ListPriceDays priceUsd={this.props.priceDaysUsd} priceByn={this.props.priceDaysByn} />
            ) : (
              <ListPriceHours priceUsd={this.props.priceHoursUsd} priceByn={this.props.priceHoursByn} />
            )}
          </div>
          <div className={styles.buttonOrder}>
            <a href="/brest/catalog" className={styles.buttonBlock}>
              Заказать
            </a>
          </div>
        </div>
        <button>EDIT</button>
        <button onClick={() => this.deleteCar(this.props.id)}>DELETE</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}
export default connect(
  mapStateToProps,
  { deleteCar }
)(Car);
