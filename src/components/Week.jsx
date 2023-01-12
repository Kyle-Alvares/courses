import styles from './Week.module.css';

export default function Week({
    includeWeekends=false,
    sun=false,
    mon=false,
    tues=false,
    wed=false,
    thurs=false,
    fri=false,
    sat=false,
}) {
  return (
    <div className={styles.week}>
        {includeWeekends && <span className={`day ${sun && styles.selected}`}>S</span> }
        <span className={`${styles.day} ${mon && styles.selected}`}>M</span>
        <span className={`${styles.day} ${tues && styles.selected}`}>T</span>
        <span className={`${styles.day} ${wed && styles.selected}`}>W</span>
        <span className={`${styles.day} ${thurs && styles.selected}`}>T</span>
        <span className={`${styles.day} ${fri && styles.selected}`}>F</span>
        {includeWeekends && <span className={`day ${sat && styles.selected}`}>S</span> }
    </div>
  )
}
