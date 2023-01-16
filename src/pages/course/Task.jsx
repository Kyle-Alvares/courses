import styles from './Task.module.css';
import IconButton from '../../components/IconButton';
import Subtask from './Subtask';

const Task = ({
    icon,
    title,
    subtasks
}) => {
    return (
        <div className={styles.taskContainer}>
            <div className={`space-between ${styles.task}`}>
                <div className="vertical-align">
                    {icon}
                    <span className={styles.title}>{title}</span>
                    <span className={styles.summary}>Pending (3)</span>
                </div>
                <IconButton backgroundColor='var(--accent)' padding='1px'></IconButton>
            </div>
            { subtasks && subtasks.map(subtask => 
                <Subtask 
                    icon={icon} 
                    task={subtask.task} 
                    date={subtask.date} 
                    completed={subtask.completed} 
                />
            )}
        </div>
    )
}

export default Task;