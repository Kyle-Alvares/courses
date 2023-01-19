import styles from './BoxToggle.module.css';

export default function BoxToggle({
    children,
    setValue = null,
    value = false,
}) {

    const handleClick = () => {
        if(setValue)
            setValue(!value)
    }

    return (
        <div 
            className={`${styles.boxToggle} ${value && styles.selected}`} 
            onClick={() => handleClick()}>
            {children}
        </ div>
    )
}
