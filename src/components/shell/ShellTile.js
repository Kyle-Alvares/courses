import './Shell.css';
import PropTypes from 'prop-types';

const ShellTile = ({text, icon, color, number}) => {

  return (
    // TODO: Convert to Link & add title attr.
    <div className="shell-tile"> 
      <div className="vertical-align">
        {icon}
        <span>{text}</span>
      </div>
      {number && <div className={`number ${color}`}>{number}</div>}
      {!number && <div className="dot" style={{backgroundColor: color}}></div>}
    </div>
  )
}

ShellTile.propTypes = {
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default ShellTile;