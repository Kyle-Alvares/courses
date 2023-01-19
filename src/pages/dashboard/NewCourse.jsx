import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './NewCourse.module.css';
import Modal from '../../components/Modal';
import Tag from '../../components/Tag';
import SizedBox from '../../components/SizedBox';
import TextInput from '../../components/inputs/TextInput';
import BoxToggle from '../../components/inputs/BoxToggle';

export default function NewCourse({
    onBackdropClick,
    dismissModal,
}) {

    const [course, setCourse] = useState('');
    const [prof, setProf] = useState('');
    const [type, setType] = useState('');
    const [code, setCode] = useState('');
    const [startTime, setStartTime] = useState('12:00');
    const [endTime, setEndTime] = useState('12:00');
    const [mon, setMon] = useState(false);
    const [tues, setTues] = useState(false);
    const [wed, setWed] = useState(false);
    const [thurs, setThurs] = useState(false);
    const [fri, setFri] = useState(false);
    const [animation, setAnimation] = useState('');

    const shake = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'

    const onSubmit = () => {
        if(course.trim() === '' ||
            prof.trim() === '' ||
            type.trim() === '' ||
            code.trim() === '' ||
            startTime.trim() === '' ||
            endTime.trim() === '') {
                setAnimation(shake);
                setTimeout(() => setAnimation(''), 820);
            } else {
                let courses = [];
                if(!localStorage.courses) localStorage.courses = JSON.stringify(courses);
                courses = JSON.parse(localStorage.courses);
                courses.push(
                    {
                        id: uuid(),
                        course,
                        prof,
                        type,
                        code,
                        startTime,
                        endTime,
                        mon,
                        tues,
                        wed,
                        thurs,
                        fri
                    }
                );
                localStorage.courses = JSON.stringify(courses);
                dismissModal();
            }
    }

    return (
        <Modal onBackdropClick={onBackdropClick} width="450px" border='none' animation={animation}>
            <p style={{ fontSize: '22px', fontWeight: '500' }}>New Course</p>
            <SizedBox height='4px'></SizedBox>
            <p style={{ fontSize: '14px', fontWeight: '400', color: 'var(--gray-50)' }}>Add details for your course</p>
            <SizedBox height='18px'></SizedBox>
            <div className={styles.form}>
                <TextInput
                    label="Course name"
                    placeholder="Course name"
                    backgroundColor='rgba(0,0,0,0.3)'
                    value={course}
                    setValue={setCourse}
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    }>
                </TextInput>
                <TextInput
                    label="Professor"
                    placeholder="Professor"
                    backgroundColor='rgba(0,0,0,0.3)'
                    value={prof}
                    setValue={setProf}
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    }>
                </TextInput>
                <div className="space-between">
                    <div>
                        <TextInput
                            label="Type"
                            placeholder="ex. Lecture"
                            backgroundColor='rgba(0,0,0,0.3)'
                            value={type}
                            setValue={setType}
                            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                            }>
                        </TextInput>
                    </div>
                    <div>
                        <TextInput
                            label="Course code"
                            placeholder="Course code"
                            backgroundColor='rgba(0,0,0,0.3)'
                            value={code}
                            setValue={setCode}
                            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            }>
                        </TextInput>
                    </div>
                </div>
                <div className="space-between">
                    <div>
                        <label htmlFor="">Days</label>
                        <div className={`vertical-align ${styles.days}`}>
                            <BoxToggle value={mon} setValue={setMon}>M</BoxToggle>
                            <BoxToggle value={tues} setValue={setTues}>T</BoxToggle>
                            <BoxToggle value={wed} setValue={setWed}>W</BoxToggle>
                            <BoxToggle value={thurs} setValue={setThurs}>T</BoxToggle>
                            <BoxToggle value={fri} setValue={setFri}>F</BoxToggle>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Start</label>
                        <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">End</label>
                        <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
                    </div>
                </div>
            </div>
            {/* <SizedBox height='8px'></SizedBox> */}
            <SizedBox height='40px' />
            <div className={styles.submit}>
                <Tag text="Cancel" fontWeight="500" color="var(--red-60)" onClick={dismissModal}></Tag>
                <Tag text="Submit" backgroundColor='var(--accent)' fontWeight="500" onClick={onSubmit}></Tag>
            </div>
        </Modal>
    )
}
