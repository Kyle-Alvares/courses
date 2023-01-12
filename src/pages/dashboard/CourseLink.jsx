import './CourseLink.css';
import PropTypes from 'prop-types';

const CourseLink = ({ 
    text, 
    icon,
    backgroundColor = "var(--cool-gray-80)", 
    color = "var(--gray-10)" 
}) => {
    return (
        <div className="course-link vertical-align" style={{ backgroundColor }}>
            { icon }
            <span style={{ color }}>{text}</span>
        </div>
    )
}

CourseLink.propTypes = {
    text: PropTypes.string.isRequired
}

export default CourseLink;