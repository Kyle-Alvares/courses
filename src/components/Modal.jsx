import styles from './Modal.module.css';

export default function Modal({
    children,
    width = '600px',
    border = '1px solid var(--border-clr)',
    animation = '',
    onBackdropClick = null,

}) {

    const handleClick = (e) => {
        if (onBackdropClick)
            e.target === e.currentTarget && onBackdropClick();
    }

    return (
        <div className={styles.modalBackdrop} onClick={e => handleClick(e)}>
            <div className={styles.modal}
                style={{
                    border,
                    width,
                    animation,
                }}>
                {children}
            </div>
        </div>
    )
}
