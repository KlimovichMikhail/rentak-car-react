import "../styles/ListCars.css";
import CarAudi from './CarAudi';
import CarBmw from "./CarBmw";
import CarJeep from "./CarJeep";
import CarKia from "./CarKia";

function ListCars() {
    return (
      <div className="conteiner">
        <div className="catalog-list">
            <CarAudi></CarAudi>
            <CarBmw></CarBmw>
            <CarJeep></CarJeep>
            <CarKia></CarKia>
        </div>
      </div>
    );
  }
  
  export default ListCars;