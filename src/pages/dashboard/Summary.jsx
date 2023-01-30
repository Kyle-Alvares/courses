import './Summary.css';
import { useState } from 'react';
import Event from './Event';
import Tag from '../../components/Tag';
import { months, weekAbbr } from '../../data/dates';
import { formatTime } from '../../data/dates';
import Task from '../../components/Task';
import IconButton from '../../components/IconButton';
import { v4 as uuid } from 'uuid';

export default function Summary({
    courses,
    tasks,
    updateTasks
}) {

    const [selectedDay, setSelectedDay] = useState(new Date().getDay());
    const [todaysCourses, setTodaysCourses] = useState([]);
    const [showNewTask, setShowNewTask] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');

    // let tasks = courses.flatMap(course => course.tasks || []);

    const handleDayFilter = (day) => {
        if (day === selectedDay) return;
        let todaysSections = [];
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].sections) {
                for (let j = 0; j < courses[i].sections.length; j++) {
                    if (courses[i].sections[j].schedule[day]) {
                        todaysSections.push(courses[i].sections[j]);
                    }
                }
            }
        }
        setTodaysCourses(todaysSections);
        setSelectedDay(day);
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
            group: 'general',
            completed: false,
            pinned: false,
            dueDate: '',
            time: '',
        }, ...tasks];
        updateTasks(tasks);
        setNewTask('');
        setShowNewTask(false);
    }

    const today = new Date();
    let weekDates = [];
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(today.getDate() - today.getDay() + i);
        weekDates.push(date);
    }

    return (
        <div className="summary">
            <p style={{ textAlign: 'center', fontSize: '14px', padding: '12px 0', fontWeight: '500' }}>
                {months[today.getMonth()]} {today.getFullYear()}
            </p>
            <div id="upcoming-dates">
                {weekAbbr.map((weekday, index) => (
                    <div className="upcoming-date" key={weekday}>
                        <div className={`date ${today.getDay() === index ? 'today' : ''}`}>
                            <p className="weekday">{weekday}</p>
                            <p className={`day ${selectedDay === index ? 'selected' : ''}`}
                                onClick={() => handleDayFilter(index)}>{weekDates[index].getDate()}</p>
                        </div>
                    </div>
                ))}
            </div>
            {courses && courses.filter(course => course.schedule[selectedDay] === true).map(course =>
                <Event title={course.course} key={course.id}>
                    {course.meeting &&
                        <Tag text="Join Meeting"
                            href={course.meeting}
                            fullyRounded={true}
                            backgroundColor="var(--green-60)"
                            rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            } />}
                    <Tag text={course.location}
                        fullyRounded={true}
                        backgroundColor="transparent"
                        borderColor="var(--cool-gray-70)"
                        color="var(--cool-gray-30)"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--teal-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>}
                    />
                    <Tag text={formatTime(course.startTime)}
                        fullyRounded={true}
                        backgroundColor="transparent"
                        borderColor="var(--cool-gray-70)"
                        color="var(--cool-gray-30)"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--blue-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    />
                </Event>
            )}
            {todaysCourses.map(section =>
                <Event title={section.type} key={section.id}>
                    {section.meeting &&
                        <Tag text="Join Meeting"
                            href={section.meeting ? section.meeting : ''}
                            fullyRounded={true}
                            backgroundColor="var(--green-60)"
                            rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            } />}
                    <Tag text={section.location}
                        fullyRounded={true}
                        backgroundColor="transparent"
                        borderColor="var(--cool-gray-70)"
                        color="var(--cool-gray-30)"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--teal-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>}
                    />
                    <Tag text={formatTime(section.startTime)}
                        fullyRounded={true}
                        backgroundColor="transparent"
                        borderColor="var(--cool-gray-70)"
                        color="var(--cool-gray-30)"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--blue-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                    />
                </Event>
            )}
            <div className="space-between"
                style={{
                    height: "40px",
                    padding: '0 24px',
                    backgroundColor: '#27292c',
                    borderBottom: '1px solid var(--border-clr)'
                }}>
                <div className='vertical-align' style={{ width: '100%', marginRight: '16px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--cool-gray-40)" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text"
                        placeholder='Search task'
                        style={{ marginLeft: '8px', width: '100%' }}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoFocus />
                </div>
                <IconButton
                    backgroundColor='var(--accent)'
                    padding='1px'
                    onClick={() => setShowNewTask(true)}>
                </IconButton>
            </div>

            {showNewTask &&
                <div className={`new-task vertical-align`}
                    style={{ animation: 'slideDown 0.3s' }}>
                    <div style={{
                        height: "16px",
                        width: "16px",
                        border: "1px solid var(--cool-gray-40)",
                        borderRadius: "6px",
                        marginRight: "8px"
                    }}></div>
                    <input type="text"
                        placeholder='Another thing I have to do...'
                        value={newTask}
                        onKeyDown={e => handleNewTask(e)}
                        onChange={e => setNewTask(e.target.value)}
                        autoFocus />
                </div>
            }

            {search.trim() === "" && tasks.map((task, index) =>
                <Task key={task.id}
                    tasks={tasks}
                    taskIndex={index}
                    updateTasks={updateTasks}
                />

            )}

            {search.trim() !== "" && tasks.filter(task => task.task.includes(search)).map((task, index) =>
                <Task key={task.id}
                    tasks={tasks}
                    taskIndex={index}
                    updateTasks={updateTasks}
                />
            )}
        </div>
    )
}
