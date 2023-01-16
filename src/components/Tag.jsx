import styles from './Tag.module.css';
import PropTypes from 'prop-types';

// TODO: FIX iconSize

const Tag = ({
    children,
    preText,
    text,
    leftIcon,
    rightIcon,
    link,
    width,
    fullyRounded = false,
    iconSize,
    fontSize = '13px',
    fontWeight,
    borderColor,
    backgroundColor = "var(--cool-gray-80)",
    preTextColor = "var(--cool-gray-30)",
    color = "var(--gray-10)",
    onClick
}) => {
    return (
        <div className={styles.tag} onClick={onClick} style={{
            width,
            border: `1px solid ${borderColor}`,
            padding: fullyRounded ? ' 4px 12px' : '4px 8px',
            backgroundColor, borderRadius:
                fullyRounded ? '16px' : '6px',
        }}>
            {leftIcon && <div className='vertical-align' style={{ marginRight: "4px", height: iconSize, width: iconSize }}>{leftIcon}</div>}
            {preText && <span style={{ color: preTextColor, fontSize, fontWeight, marginRight: '4px' }}>{preText}</span> }
            <span style={{ color, fontSize, fontWeight }}>{text}</span>
            {children}
            {rightIcon && <div className='vertical-align' style={{ marginLeft: "4px", height: iconSize, width: iconSize }}>{rightIcon}</div>}
        </div>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired
}

export default Tag;