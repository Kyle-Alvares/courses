import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Setup from './pages/setup/Setup';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/404/NotFound';
import Course from './pages/course/Course';
import Shell from './components/shell/Shell';
import { getIsSetup } from './db/db';

function App() {

  const isSetup = getIsSetup();
  const localCourses = localStorage.courses ? JSON.parse(localStorage.courses) : [];
  const localTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  const [courses, setCourses] = useState(localCourses);
  const [tasks, setTasks] = useState(localTasks);

  const updateCourses = (newCourses) => {
      setCourses(newCourses);
      localStorage.courses = JSON.stringify(newCourses);
  }

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.tasks = JSON.stringify(newTasks);
  }

  if (isSetup !== 'true') {
    let location = window.location.href;
    let origin = window.location.origin;
    let pathname = location.replace(origin, '');
    if(pathname !== '/#/') window.location.href = '/#/';
    return <Setup />;
  }

  return (
    <div className="App">
      <Shell courses={courses} />
      <div className="content">
        <Routes>
          <Route path="/" element={
            <Dashboard 
              courses={courses} 
              updateCourses={updateCourses}
              tasks={tasks}
              updateTasks={updateTasks}
            />} 
          />
          <Route path="/course/:id" element={
            <Course 
              courses={courses} 
              updateCourses={updateCourses} 
              tasks={tasks}
              updateTasks={updateTasks}
            />} 
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )

}

export default App;
