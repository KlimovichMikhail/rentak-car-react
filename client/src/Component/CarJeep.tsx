import "../styles/Car.css";
 import jeep from '../Image/Jeep Patriot.png'

function CarJeep() {
    return (
      <div className="car content">
        <img src={jeep} alt="Jeep" />
        <div className="bottom-info">
        <div className="w-name">
          <span>Jeep Patriot</span>
          <hr />
        </div>
        <div className="description">1 сутки</div>
        <div className="price">
          <span className="price-usd">45 USD</span>
          <span className="price-byn"> ≈ 115 BYN</span>
        </div>
        <div className="description">2-3 сутки</div>
        <div className="price">
          <span className="price-usd">40 USD</span>
          <span className="price-byn"> ≈ 105 BYN</span>
        </div>
        <div className="description">4-7 сутки</div>
        <div className="price">
          <span className="price-usd">35 USD</span>
          <span className="price-byn"> ≈ 90 BYN</span>
        </div>
        <div className="description">8-15 сутки</div>
        <div className="price">
          <span className="price-usd">30 USD</span>
          <span className="price-byn"> ≈ 80 BYN</span>
        </div>
        <div className="description">16-30 сутки</div>
        <div className="price">
          <span className="price-usd">25 USD</span>
          <span className="price-byn"> ≈ 65 BYN</span>
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
  
  export default CarJeep;