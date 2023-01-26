import './Dashboard.css';
import Courses from './Courses';
import Summary from './Summary';

export default function Dashboard({ 
    courses, 
    updateCourses,
    tasks,
    updateTasks
}) {
    return (
        <div className="dashboard">
            <Courses courses={courses} updateCourses={updateCourses} />
            <Summary 
                courses={courses} 
                updateCourses={updateCourses}
                tasks={tasks}
                updateTasks={updateTasks} 
            />
        </div>
    )
}
