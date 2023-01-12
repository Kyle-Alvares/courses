import styles from './CourseDetails.module.css';
import PropTypes from 'prop-types';
import Tag from '../../components/Tag';
import Week from '../../components/Week';

const CourseDetails = ({
  type,
  isProf = false,
  instructor,
  times,
  location,
  crn,
  mon = false,
  tues = false,
  wed = false,
  thurs = false,
  fri = false
}) => {
  return (
    <div className={styles.courseDetails}>
        <p className={styles.type}>{type}</p>
      <div className={`space-between ${styles.classes}`}>
        <Week mon={mon} tues={tues} wed={wed} thurs={thurs} fri={fri} />
        <span className={styles.time}>{times}</span>
      </div>
      <div className={styles.details}>
        <span>Location:</span>
        <span>{location}</span>
      </div>
      {instructor && <div className={styles.details}>
        <span>{isProf ? 'Professor:' : 'Instructor:'}</span>
        <span>{instructor}</span>
      </div> }
      { crn && <div className={styles.details}>
        <span>CRN:</span>
        <span>{crn}</span>
      </div> }
    </div>
  )
}

CourseDetails.propTypes = {
  type: PropTypes.string.isRequired,
  instructor: PropTypes.string
}

export default CourseDetails;

