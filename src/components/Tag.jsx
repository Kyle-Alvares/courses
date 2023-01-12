import styles from './Tag.module.css';
import PropTypes from 'prop-types';

const Tag = ({
    text,
    leftIcon,
    rightIcon,
    link,
    fullyRounded = false,
    iconSize,
    fontSize = '13px',
    fontWeight,
    backgroundColor = "var(--cool-gray-80)",
    color = "var(--gray-10)"
}) => {
    return (
        <div className={styles.tag} style={{
            padding: fullyRounded ? ' 4px 12px' : '4px 8px',
            backgroundColor, borderRadius:
                fullyRounded ? '16px' : '6px'
        }}>
            {leftIcon && <div className='vertical-align' style={{ marginRight: "4px", height: iconSize, width: iconSize }}>{leftIcon}</div>}
            <span style={{ color, fontSize, fontWeight }}>{text}</span>
            {rightIcon && <div className='vertical-align' style={{ marginLeft: "4px", height: iconSize, width: iconSize }}>{rightIcon}</div>}
        </div>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired
}

export default Tag;