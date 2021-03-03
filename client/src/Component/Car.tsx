import "../styles/Car.scss";
export interface CarProps {
  title?: string;
  image?: string;
  priceUsd1?: number;
  priceByn1?: number;
  priceUsd2?: number;
  priceByn2?: number;
  priceUsd3?: number;
  priceByn3?: number;
  priceUsd4?: number;
  priceByn4?: number;
  priceUsd5?: number;
  priceByn5?: number;
}

function Car({
  title,
  image,
  priceUsd1,
  priceByn1,
  priceUsd2,
  priceByn2,
  priceUsd3,
  priceByn3,
  priceUsd4,
  priceByn4,
  priceUsd5,
  priceByn5
}: CarProps) {
  return (
    <div className="car content">
      <img src={image} alt="Audi" />
      <div className="bottom">
        <div className="name">
          <span>{title}</span>
          <hr />
        </div>
        <div className="description">1 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd1} USD</span>
          <span className="price-byn"> ≈ {priceByn1} BYN</span>
        </div>
        <div className="description">2-3 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd2} USD</span>
          <span className="price-byn"> ≈ {priceByn2} BYN</span>
        </div>
        <div className="description">4-7 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd3} USD</span>
          <span className="price-byn"> ≈ {priceByn3} BYN</span>
        </div>
        <div className="description">8-15 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd4} USD</span>
          <span className="price-byn"> ≈ {priceByn4} BYN</span>
        </div>
        <div className="description">16-30 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd5} USD</span>
          <span className="price-byn"> ≈ {priceByn5} BYN</span>
        </div>
        <div className="buttonOrder">
          <a href="/brest/catalog" className="buttonBlock">
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}
export default Car;
