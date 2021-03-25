import styles from "../styles/Car.module.scss";

export interface ListPriceHoursProps {
  priceUsd: Array<number>;
  priceByn: Array<number>;
}

function ListPriceHours({
  priceUsd,
  priceByn,
  
}: ListPriceHoursProps) {
  return (
    <div>
      <div className={styles.description}>1-3 часа</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[0]} USD</span>
        <span> ≈ {priceByn[0]} BYN</span>
      </div>
      <div className={styles.description}>4-6 часов</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[1]} USD</span>
        <span> ≈ {priceByn[1]} BYN</span>
      </div>
      <div className={styles.description}>7-9 часов</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[2]} USD</span>
        <span> ≈ {priceByn[2]} BYN</span>
      </div>
      <div className={styles.description}>9-12 часов</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[3]} USD</span>
        <span> ≈ {priceByn[3]} BYN</span>
      </div>
    </div>  
  );
}
export default ListPriceHours;