import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './NewSection.module.css';
import Modal from '../../components/Modal';
import Tag from '../../components/Tag';
import SizedBox from '../../components/SizedBox';
import TextInput from '../../components/inputs/TextInput';
import BoxToggle from '../../components/inputs/BoxToggle';
import ColorPicker from '../../components/inputs/color-picker/ColorPicker';
import IconPicker from '../../components/inputs/icon-picker/IconPicker';

export default function NewSection({
    onBackdropClick,
    dismissModal,
    courses,
    updateCourses,
    courseIndex,
}) {

    const [prof, setProf] = useState('');
    const [type, setType] = useState('');
    const [startTime, setStartTime] = useState('12:00');
    const [endTime, setEndTime] = useState('12:00');
    const [mon, setMon] = useState(false);
    const [tues, setTues] = useState(false);
    const [wed, setWed] = useState(false);
    const [thurs, setThurs] = useState(false);
    const [fri, setFri] = useState(false);
    const [location, setLocation] = useState('');
    const [meeting, setMeeting] = useState('');
    const [color, setColor] = useState('var(--red-50)');
    const [icon, setIcon] = useState('link');
    const [animation, setAnimation] = useState('');

    const shake = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both';

    const onSubmit = () => {
        if (prof.trim() === '' ||
            location.trim() === '' ||
            type.trim() === '' ||
            startTime.trim() === '' ||
            endTime.trim() === '') {
            setAnimation(shake);
            setTimeout(() => setAnimation(''), 820);
        } else {
            if (!courses[courseIndex].sections) courses[courseIndex].sections = [];
            courses[courseIndex].sections.push(
                {
                    id: uuid(),
                    prof,
                    type,
                    startTime,
                    endTime,
                    schedule: [
                        false,
                        mon,
                        tues,
                        wed,
                        thurs,
                        fri,
                        false
                    ],
                    location,
                    meeting,
                    color,
                    icon
                }
            );
            if (meeting.trim() !== '') {
                courses[courseIndex].quicklinks.push({
                    text: type,
                    color: color.split('--')[1].split('-')[0],
                    icon,
                    href: meeting,
                });
            }
            updateCourses(courses);
            dismissModal();
        }
    }

    return (
        <Modal onBackdropClick={onBackdropClick} width="450px" border='none' animation={animation}>
            <p style={{ fontSize: '22px', fontWeight: '500' }}>New Section</p>
            <SizedBox height='4px'></SizedBox>
            <p style={{ fontSize: '14px', fontWeight: '400', color: 'var(--gray-50)' }}>Add a section to your course</p>
            <SizedBox height='18px'></SizedBox>
            <div className={styles.form}>
                <TextInput
                    label="Type"
                    placeholder="Ex. Lab"
                    backgroundColor='rgba(0,0,0,0.3)'
                    value={type}
                    setValue={setType}
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    }>
                </TextInput>
                <div className="space-between">
                    <div>
                        <TextInput
                            label="Location"
                            placeholder="Location"
                            backgroundColor='rgba(0,0,0,0.3)'
                            value={location}
                            setValue={setLocation}
                            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            }>
                        </TextInput>
                    </div>
                    <div>
                        <TextInput
                            label="Instructor"
                            placeholder="Instructor"
                            backgroundColor='rgba(0,0,0,0.3)'
                            value={prof}
                            setValue={setProf}
                            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
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
                <div>
                    <SizedBox height='4px'></SizedBox>
                    <TextInput
                        label="Meeting link (optional)"
                        placeholder="Meeting Link"
                        backgroundColor='rgba(0,0,0,0.3)'
                        value={meeting}
                        setValue={setMeeting}
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        }>
                    </TextInput>
                    {meeting.length > 0 &&
                        <div>
                            <div>
                                <SizedBox height='8px'></SizedBox>
                                <IconPicker setIcon={setIcon}></IconPicker>
                            </div>
                            <div>
                                <SizedBox height='8px'></SizedBox>
                                <label>Color</label>
                                <ColorPicker setColor={setColor}></ColorPicker>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* <SizedBox height='8px'></SizedBox> */}
            <SizedBox height='20px' />
            <div className={styles.submit}>
                <Tag text="Cancel" fontWeight="500" color="var(--red-60)" onClick={dismissModal} backgroundColor="transparent"></Tag>
                <Tag text="Submit" backgroundColor='var(--accent)' fontWeight="500" onClick={onSubmit}></Tag>
            </div>
        </Modal >
    )
}
