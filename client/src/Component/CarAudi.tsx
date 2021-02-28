import "../styles/Car.css";
import audi from "../Image/Audi A7.png";

function CarAudi() {
  return (
    <div className="car content">
      <img src={audi} alt="Audi" />
      <div className="bottom-info">
        <div className="w-name">
          <span>Audi A7</span>
          <hr />
        </div>
        <div className="description">1 сутки</div>
        <div className="price">
          <span className="price-usd">100 USD</span>
          <span className="price-byn"> ≈ 260 BYN</span>
        </div>
        <div className="description">2-3 сутки</div>
        <div className="price">
          <span className="price-usd">90 USD</span>
          <span className="price-byn"> ≈ 235 BYN</span>
        </div>
        <div className="description">4-7 сутки</div>
        <div className="price">
          <span className="price-usd">80 USD</span>
          <span className="price-byn"> ≈ 210 BYN</span>
        </div>
        <div className="description">8-15 сутки</div>
        <div className="price">
          <span className="price-usd">70 USD</span>
          <span className="price-byn"> ≈ 180 BYN</span>
        </div>
        <div className="description">16-30 сутки</div>
        <div className="price">
          <span className="price-usd">60 USD</span>
          <span className="price-byn"> ≈ 155 BYN</span>
        </div>
        <div className="button-order">
          <a href="/brest/catalog" className="button-block">
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarAudi;
