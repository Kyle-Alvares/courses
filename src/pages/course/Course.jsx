import styles from './Course.module.css';
import Tag from '../../components/Tag';
import CourseDetails from './CourseDetails';

export default function Course() {
  return (
    <div className={styles.course}>
      <div className={styles.main}>
        <header className='space-between'>
          <p className={styles.courseName}>Systems Programming</p>
          <div className="vertical-align">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-columns" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
          </div>
        </header>
        <div className={`vertical-align ${styles.courseDetails}`}>
          <Tag text="Lecture: Mon, Wed at 10am - 11:30am"></Tag>
          <Tag text="Lab: Fri at 1:40pm - 2:30pm"></Tag>
        </div>
        <div className={styles.quickLinks}></div>
      </div>
      <div className={styles.panel}>
        <div className={`vertical-align ${styles.panelHeader}`}>
          <div>
            <p className={styles.panelTitle}>CSCI 3110U</p>
            <p className={styles.panelSubtitle}>Winter 2023</p>
          </div>
        </div>
        <div className={styles.courseDetailsContainer}>
          <CourseDetails
            type="Lecture"
            instructor="Rupinder Brar"
            times="6:10 PM - 9:30 PM"
            location="UA 1350"
            crn="42623"
            mon={true} thurs={true} />
          <CourseDetails
            type="Labs"
            instructor="Emily Wu"
            times="6:10 PM - 9:30 PM"
            location="ERC 1010"
            crn="42625"
            wed={true} />
          <CourseDetails
            type="Tutorials"
            instructor="Tammy Wang"
            times="6:10 PM - 9:30 PM"
            location="OT-Online"
            crn="42628"
            fri={true} />
          <div className={styles.newCourseDetails}>
            <Tag text="Add Section" backgroundColor='var(--accent)' color='var(--gray-10)' fontWeight='400'
              leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>}></Tag>
          </div>
        </div>
      </div>
    </div>
  )
}
