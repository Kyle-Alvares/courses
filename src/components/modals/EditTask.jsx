import styles from './EditTask.module.css';
import { useState } from 'react';
import Modal from '../Modal';
import SizedBox from '../SizedBox';
import Tag from '../Tag';

export default function EditTask({
    task,
    updateTask,
    dismissModal = null
}) {

    const [showDate, setShowDate] = useState(task.dueDate === '' ? false : true);
    const [showTime, setShowTime] = useState(task.time === '' ? false : true);
    const [taskDate, setTaskDate] = useState(task.dueDate);
    const [taskTime, setTaskTime] = useState(task.time);
    const [taskText, setTaskTtext] = useState(task.task);

    const [animation, setAnimation] = useState('');

    const shake = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both';

    const onSubmit = () => {
        updateTask({
            ...task,
            task: taskText,
            dueDate: taskDate,
            time: taskTime
        });
        dismissModal();
    }

    return (
        <Modal width="450px" border='none' animation={animation}>
            <p style={{ fontSize: '22px', fontWeight: '500' }}>Edit Task</p>
            {/* <SizedBox height='4px'></SizedBox> */}
            {/* <p style={{ fontSize: '14px', fontWeight: '400', color: 'var(--gray-50)' }}></p> */}
            <SizedBox height='18px'></SizedBox>
            <label htmlFor="">Task</label>
            <textarea name="" id="" rows="3" value={taskText} onChange={e => setTaskTtext(e.target.value)}></textarea>
            <SizedBox height='12px'></SizedBox>
            <div>
                <div className="space-between">
                    <div className='vertical-align'>
                        <label style={{ marginRight: '8px' }}>Due date: </label>
                        <input type="date" value={taskDate} onChange={e => setTaskDate(e.target.value)} />
                    </div>
                    <Tag text="Clear" onClick={() => setTaskDate('')}></Tag>
                </div>
            </div>
            <SizedBox height='12px'></SizedBox>
            <div>
                <div className="space-between">
                    <div className='vertical-align'>
                        <label style={{ marginRight: '8px' }}>Time:</label>
                        <input type="time" value={taskTime} onChange={e => setTaskTime(e.target.value)} />
                    </div>
                    <Tag text="Clear" onClick={() => setTaskTime('')}></Tag>
                </div>
            </div>
            <SizedBox height='20px' />
            <div className={styles.submit}>
                <Tag text="Cancel" fontWeight="500" color="var(--red-60)" onClick={dismissModal} backgroundColor="transparent"></Tag>
                <Tag text="Save" backgroundColor='var(--accent)' fontWeight="500" onClick={onSubmit}></Tag>
            </div>
        </Modal>
    )
}
