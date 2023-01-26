import './Shell.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShellTile = ({
    link,
    text, 
    icon, 
    color, 
    number
  }) => {

  return (
    // TODO: Convert to Link & add title attr.
    <Link className="shell-tile" to={link}> 
      <div className="vertical-align">
        {icon}
        <span>{text}</span>
      </div>
      {number && <div className={`number ${color}`}>{number}</div>}
      {!number && <div className="dot" style={{backgroundColor: color}}></div>}
    </Link>
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