import { Component } from "react";
import styles from "../styles/AddCar.module.scss";
import { connect } from 'react-redux';  
import { addCars } from '../redux/actions/carAction';

class AddCar extends Component<any, any> {
  constructor(props) {
    super(props)
    this.onBtnClick = this.onBtnClick.bind(this)
  }
onBtnClick(event) {
    return this.props.setTitle(event.target.text)
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Add Car</h1>
        <form className={styles.form}>
          <br />
          <br />
          <input required type="text" placeholder="Enter Car Title" />
          <br />
          <br />
          <button onClick={this.onBtnClick}>Add</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({  
  cars: state.cars  
});
export default connect(mapStateToProps, { addCars}) (AddCar);
