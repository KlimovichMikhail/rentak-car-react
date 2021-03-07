import styles from "../Styles/Car.module.scss";
import ListPriceDays from "./ListPriceDays";
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
    <div className={styles.car}>
      <img src={image} alt="Audi" />
      <div className={styles.bottom}>
        <div className={styles.name}>
          <span>{title}</span>
          <hr />
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <a className={styles.tabDays}>Посуточная</a>
          </div>
          <div className={styles.tab}>
            <a className={styles.tabHours}>Почасовая</a>
          </div>
        </div>
        <ListPriceDays
        priceUsd1={priceUsd1}
        priceByn1={priceByn1}
        priceUsd2={priceUsd2}
        priceByn2={priceByn2}
        priceUsd3={priceUsd3}
        priceByn3={priceByn3}
        priceUsd4={priceUsd4}
        priceByn4={priceByn4}
        priceUsd5={priceUsd5}
        priceByn5={priceByn5}/>
        <div className={styles.buttonOrder}>
          <a href="/brest/catalog" className={styles.buttonBlock}>
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}
export default Car;
