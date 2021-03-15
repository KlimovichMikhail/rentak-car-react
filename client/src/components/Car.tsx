import styles from "../styles/Car.module.scss";
import ListPriceDays from "./ListPriceDays";
export interface CarProps {
  title?: string;
  image?: string;
  priceUsd: Array<number>;
  priceByn: Array<number>;
}

function Car({ title, image, priceUsd, priceByn }: CarProps) {
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
        priceUsd={priceUsd}
        priceByn={priceByn}
        />
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
