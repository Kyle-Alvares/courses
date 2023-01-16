import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <p className={styles.main}>404</p>
            <p className={styles.sub}>Sorry! Page Not Found :(</p>
        </div>
    )
}
