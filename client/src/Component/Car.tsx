import "../styles/Car.css";


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
}) {
  return (
    <div className="car content">
      <img src={image} alt="Audi" />
      <div className="bottom-info">
        <div className="w-name">
          <span>{title}</span>
          <hr />
        </div>
        <div className="description">1 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd1}</span>
          <span className="price-byn"> ≈ {priceByn1}</span>
        </div>
        <div className="description">2-3 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd2}</span>
          <span className="price-byn"> ≈ {priceByn2}</span>
        </div>
        <div className="description">4-7 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd3}</span>
          <span className="price-byn"> ≈ {priceByn3}</span>
        </div>
        <div className="description">8-15 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd4}</span>
          <span className="price-byn"> ≈ {priceByn4}</span>
        </div>
        <div className="description">16-30 сутки</div>
        <div className="price">
          <span className="price-usd">{priceUsd5}</span>
          <span className="price-byn"> ≈ {priceByn5}</span>
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
export default Car;