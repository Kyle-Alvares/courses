import styles from './CourseDetails.module.css';
import PropTypes from 'prop-types';
import Week from '../../components/Week';

const CourseDetails = ({
  type,
  isProf = false,
  instructor,
  times,
  location,
  schedule = [false, false, false, false, false, false, false]
}) => {
  return (
    <div className={styles.courseDetails}>
      <p className={styles.type}>{type}</p>
      <div className={`space-between ${styles.classes}`}>
        <Week
          mon={schedule[1]}
          tues={schedule[2]}
          wed={schedule[3]}
          thurs={schedule[4]}
          fri={schedule[5]} />
        <span className={styles.time}>{times}</span>
      </div>
      <div className={styles.details}>
        <span>Location:</span>
        <span>{location}</span>
      </div>
      {instructor && <div className={styles.details}>
        <span>{isProf ? 'Professor:' : 'Instructor:'}</span>
        <span>{instructor}</span>
      </div>}
    </div>
  )
}

CourseDetails.propTypes = {
  type: PropTypes.string.isRequired,
  instructor: PropTypes.string
}

export default CourseDetails;

