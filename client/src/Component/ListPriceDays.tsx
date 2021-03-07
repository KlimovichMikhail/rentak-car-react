import styles from "../Styles/Car.module.scss";

export interface ListPriceProps {
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

function ListPriceDays({
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
}: ListPriceProps) {
  return (
    <div>
      <div className={styles.description}>1 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd1} USD</span>
        <span> ≈ {priceByn1} BYN</span>
      </div>
      <div className={styles.description}>2-3 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd2} USD</span>
        <span> ≈ {priceByn2} BYN</span>
      </div>
      <div className={styles.description}>4-7 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd3} USD</span>
        <span> ≈ {priceByn3} BYN</span>
      </div>
      <div className={styles.description}>8-15 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd4} USD</span>
        <span> ≈ {priceByn4} BYN</span>
      </div>
      <div className={styles.description}>16-30 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd5} USD</span>
        <span> ≈ {priceByn5} BYN</span>
      </div>
    </div>
  );
}
export default ListPriceDays;
