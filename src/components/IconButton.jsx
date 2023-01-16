import styles from './IconButton.module.css';

export default function IconButton({
    children,
    iconSize,
    padding = "1px", 
    border = "none",
    outline = "none",
    borderRadius="6px",
    backgroundColor = "transparent"
}) {
    return (
        <button className={styles.iconButton} style={{
            padding,
            outline,
            border,
            borderRadius,
            backgroundColor,
        }}>
            <div className="vertical-align">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        </button>
    )
}
