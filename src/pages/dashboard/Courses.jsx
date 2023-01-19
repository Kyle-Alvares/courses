import './Courses.css';
import { useState } from 'react';
import CourseTile from './CourseTile';
import NewCourse from './NewCourse';

export default function Courses() {

  const [showNewCourse, setShowNewCourse] = useState(false);

  // TODO: Use TextInput for Search

  return (
    <div className="courses">
      {showNewCourse && <NewCourse  dismissModal={() => setShowNewCourse(false) }/> }
      <div className="space-between heading">
        <h1>Courses</h1>
        <button title="Add course" className='vertical-align' onClick={() => setShowNewCourse(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      <div className="searchbar vertical-align">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="text" name="" id="" placeholder='Search' /> 
      </div>
      <hr />
      <div className="course-list">
        <CourseTile />
        <CourseTile />
        <CourseTile />
        <CourseTile />
        <CourseTile />
        <CourseTile />
        <CourseTile />
        <CourseTile />
      </div>
    </div>
  )
}
