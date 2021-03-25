import styles from "../styles/Car.module.scss";

export interface ListPriceProps {
  priceUsd: Array<number>;
  priceByn: Array<number>;
}

function ListPriceDays({
  priceUsd,
  priceByn,
  
}: ListPriceProps) {
  return (
    <div>
      <div className={styles.description}>1 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[0]} USD</span>
        <span> ≈ {priceByn[0]} BYN</span>
      </div>
      <div className={styles.description}>2-3 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[1]} USD</span>
        <span> ≈ {priceByn[1]} BYN</span>
      </div>
      <div className={styles.description}>4-7 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[2]} USD</span>
        <span> ≈ {priceByn[2]} BYN</span>
      </div>
      <div className={styles.description}>8-15 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[3]} USD</span>
        <span> ≈ {priceByn[3]} BYN</span>
      </div>
      <div className={styles.description}>16-30 сутки</div>
      <div className={styles.price}>
        <span className={styles.priceUsd}>{priceUsd[4]} USD</span>
        <span> ≈ {priceByn[4]} BYN</span>
      </div>
    </div>
  );
}
export default ListPriceDays;
