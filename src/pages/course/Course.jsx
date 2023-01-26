import styles from './Course.module.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import Tag from '../../components/Tag';
import QuickLink from '../../components/QuickLink';
// import Task from './Task';
import Task from '../../components/Task';
import CourseDetails from './CourseDetails';
import NewQuickLink from './NewQuickLink';
import NewSection from './NewSection';
import EditSection from './EditSection';
import { formatTime } from '../../data/dates';

export default function Course({ courses, updateCourses, tasks, updateTasks }) {

  const params = useParams();
  const navigate = useNavigate();

  const [showNewQuickLink, setShowNewQuickLink] = useState(false);
  const [showNewSection, setShowNewSection] = useState(false);
  const [showEditSection, setShowEditSection] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [newTask, setNewTask] = useState('');

  // find course

  let courseIndex = -1;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === params.id) {
      courseIndex = i;
      break;
    }
  }

  if (courseIndex === -1) navigate('/404');

  let course = courses[courseIndex];

  const semesters = ["Winter", "Summer", "Fall"];
  const today = new Date();

  const semester = semesters[Math.floor(today.getMonth() / 4)] + " " + today.getFullYear();

  const editSection = (index) => {
    setSectionIndex(index);
    setShowEditSection(true);
  }

  const handleNewTask = (e) => {
    if (e.key === 'Escape') {
      setNewTask('');
      setShowNewTask(false);
    } else if (e.key === "Enter") {
      if (newTask.trim() !== "") saveNewTask();
    }
  }

  const saveNewTask = () => {
    tasks = [{
      id: uuid(),
      task: newTask,
      subtasks: [],
      group: courses[courseIndex].id,
      completed: false,
      pinned: false,
      dueDate: '',
      time: '',
    }, ...tasks];
    updateTasks(tasks);
    setNewTask('');
    setShowNewTask(false);
  }

  return (
    <div className={styles.course}>

      {showNewQuickLink &&
        <NewQuickLink
          courses={courses}
          updateCourses={updateCourses}
          courseIndex={courseIndex}
          dismissModal={() => setShowNewQuickLink(false)} />
      }

      {showNewSection &&
        <NewSection
          courses={courses}
          updateCourses={updateCourses}
          courseIndex={courseIndex}
          dismissModal={() => setShowNewSection(false)}
        />
      }

      {showEditSection &&
        <EditSection
          courses={courses}
          updateCourses={updateCourses}
          courseIndex={courseIndex}
          sectionIndex={sectionIndex}
          dismissModal={() => setShowEditSection(false)}
        />
      }

      <div className={styles.main}>
        <header className='space-between'>
          <p className={styles.courseName}>{course.course}</p>
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
        <div className={`space-between ${styles.quickLinks}`}>
          <div className={styles.left}>
            {course.quicklinks && course.quicklinks.map((quicklink, index) =>
              <QuickLink key={index}
                text={quicklink.text}
                color={quicklink.color}
                href={quicklink.href}
                icon={
                  // TODO: FIND SOLUTION FOR SVG STROKE
                  <img
                    height="16px"
                    width="16px"
                    style={{ filter: 'invert(90%)' }}
                    src={`/icons/outline/${quicklink.icon}.svg`} alt={quicklink.icon} />}
              />
            )}
          </div>
          <div className={styles.right}>
            <QuickLink text="Edit Links" color="cool-gray" onClick={() => setShowNewQuickLink(true)} icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            } />
          </div>
        </div>
        <div className={styles.tasks}>
          {/* <Task title="Create Python Scripts"
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

          {courses[courseIndex].tasks
            && courses[courseIndex].tasks.map(task =>
              <Task key={task.id}
                title={task.task}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--purple-50)" className="w-6 h-6">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>

                } subtasks={[{ task: 'Read about multicore processing', date: 'Nov 22' }, { task: 'CSV to JSON', date: 'Nov 22', completed: true }]}></Task>
            )} */}

          {tasks.map((task, index) => {
            if (task.group === courses[courseIndex].id)
              return (
                <Task key={task.id}
                  tasks={tasks}
                  taskIndex={index}
                  updateTasks={updateTasks}
                />);
          })}

          {showNewTask &&
            <div className={`${styles.newTask} vertical-align`}
              style={{ animation: 'slideDown 0.3s', zIndex: "-10" }}>
              <input type="text"
                placeholder='Another thing I have to do...'
                value={newTask}
                onKeyDown={e => handleNewTask(e)}
                onChange={e => setNewTask(e.target.value)}
                autoFocus />
            </div>
          }

          <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '32px' }}>
            {!showNewTask &&
              <Tag text="New Task"
                onClick={() => setShowNewTask(true)}
                leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                }></Tag>
            }
            {showNewTask &&
              <Tag text="Cancel"
                onClick={() => { setShowNewTask(false); setNewTask(''); }} backgroundColor="var(--red-70)"
                rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}></Tag>
            }
          </div>
        </div>
      </div>


      <div className={styles.panel}>
        <div className={`vertical-align ${styles.panelHeader}`}>
          <div>
            <p className={styles.panelTitle}>{course.code}</p>
            <p className={styles.panelSubtitle}>{semester}</p>
          </div>
        </div>
        <div className={styles.courseDetailsContainer}>
          <CourseDetails
            type="Lecture"
            instructor={course.prof}
            times={`${formatTime(course.startTime)} - ${formatTime(course.endTime)}`}
            location={course.location}
            schedule={course.schedule} />
          {course.sections && course.sections.map((section, index) =>
            <div onClick={() => editSection(index)} key={section.id}>
              <CourseDetails
                type={section.type}
                instructor={section.prof}
                times={`${formatTime(section.startTime)} - ${formatTime(section.endTime)}`}
                location={section.location}
                schedule={section.schedule} />
            </div>
          )}
          <div className={styles.newCourseDetails}>
            <Tag text="Add Section" backgroundColor='var(--accent)' color='var(--gray-10)' fontWeight='400'
              onClick={() => setShowNewSection(true)}
              leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>}></Tag>
          </div>
        </div>
      </div>
    </div>
  )
}