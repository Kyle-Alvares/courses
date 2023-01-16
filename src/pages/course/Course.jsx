import styles from './Course.module.css';
import Tag from '../../components/Tag';
import Task from './Task';
import CourseDetails from './CourseDetails';

export default function Course() {
  return (
    <div className={styles.course}>
      <div className={styles.main}>
        <header className='space-between'>
          <p className={styles.courseName}>Systems Programming</p>
          <div className={`vertical-align ${styles.actions}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
          </div>
        </header>
        <div className={`vertical-align ${styles.quickLinks}`}>
          <Tag text="Lecture" backgroundColor='var(--green-100)' borderColor='var(--green-50)' color="var(--green-10)"
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--green-50)" className="w-6 h-6">
              <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            }></Tag>
          <Tag text="Lab" backgroundColor='var(--blue-100)' borderColor='var(--blue-50)'
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--blue-50)" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            }></Tag>
          <Tag text="Course Link" backgroundColor='var(--cool-gray-100)' borderColor='var(--cool-gray-50)'
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--cool-gray-50)" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            }></Tag>
          <Tag text="Discord" backgroundColor='var(--purple-100)' borderColor='var(--purple-50)'
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--purple-50)" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            }></Tag>
        </div>
        <Task title="Create Python Scripts"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--blue-50)" className="w-6 h-6">
            <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
          </svg>} subtasks={[{ task: 'CSV to JSON', date: 'Nov 22' }]}></Task>
        <Task title="Create Python Scripts"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--green-50)" className="w-6 h-6">
            <path d="M16.5 7.5h-9v9h9v-9z" />
            <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
          </svg>
          } subtasks={[{ task: 'Read about multicore processing', date: 'Nov 22' }, { task: 'CSV to JSON', date: 'Nov 22' }]}></Task>
        <Task title="Create Python Scripts"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--purple-50)" className="w-6 h-6">
            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
            <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
          </svg>

          } subtasks={[{ task: 'Read about multicore processing', date: 'Nov 22' }, { task: 'CSV to JSON', date: 'Nov 22', completed: true }]}></Task>
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
