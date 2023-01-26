import styles from './Task.module.css';
import { useState } from 'react';
import Tag from './Tag';
import IconButton from './IconButton';
import EditTask from './modals/EditTask';
import { formatDate, formatTime } from '../data/dates';
import SizedBox from './SizedBox';

export default function Task({
    tasks,
    taskIndex,
    updateTasks,
    onClick = null
}) {

    const [showEditTask, setShowEditTask] = useState(false);

    const handleCheck = () => {
        tasks[taskIndex].checked = !tasks[taskIndex].checked;
        updateTasks([...tasks]);
    }

    const updateTask = (task) => {
        tasks[taskIndex] = task;
        updateTasks([...tasks]);
    }

    const deleteTask = () => {
        tasks.splice(taskIndex, 1);
        updateTasks([...tasks]);
    }

    return (
        <div className={`space-between ${styles.task}`}>
            <div className={`vertical-align ${styles.text}`}>
                {!tasks[taskIndex].checked &&
                    <>
                        <div className={styles.check} onClick={() => handleCheck()}></div>
                        <span>{tasks[taskIndex].task}</span>
                    </>
                }
                {tasks[taskIndex].checked &&
                    <>
                        <div className={`vertical-align ${styles.checked}`} onClick={() => handleCheck()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        {/* <img src="/icons/outline/check.svg" alt="check" className={styles.checked} /> */}
                        <s>{tasks[taskIndex].task}</s>
                    </>
                }
            </div>
            <div className={`vertical-align ${styles.right}`}>
                {tasks[taskIndex].dueDate &&
                    <Tag fullyRounded={true} backgroundColor="transparent" borderColor="var(--border-clr)" preText="Due Date:"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--blue-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>}>
                        {formatDate(tasks[taskIndex].dueDate)}
                    </Tag>
                }
                {tasks[taskIndex].time &&
                    <Tag fullyRounded={true} backgroundColor="transparent" borderColor="var(--border-clr)" preText="Time:"
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--teal-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>}>
                        {formatTime(tasks[taskIndex].time)}
                    </Tag>
                }
                <div className={styles.edit}>
                    <IconButton backgroundColor='transparent' onClick={() => setShowEditTask(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </IconButton>
                    <IconButton backgroundColor='transparent' onClick={() => console.log()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--alert-30)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </IconButton>
                    <IconButton backgroundColor='transparent' onClick={() => deleteTask()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--red-50)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </IconButton>
                </div>
            </div>

            {showEditTask &&
                <EditTask
                    task={tasks[taskIndex]}
                    updateTask={updateTask}
                    dismissModal={() => setShowEditTask(false)}
                />
            }

        </div >
    )
}
