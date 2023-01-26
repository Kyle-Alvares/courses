import { useState } from 'react';
import styles from './Setup.module.css';
import SizedBox from '../../components/SizedBox';
import Tag from '../../components/Tag';
import TextInput from '../../components/inputs/TextInput';
import { setIsSetup } from '../../db/db';

export default function Setup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const shake = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both';
    const [animation, setAnimation] = useState(''); 

    const onSubmit = () => {
        if(name.trim() === '' || email.trim() === '') {
            setAnimation(shake);
            setTimeout(() => setAnimation(''), 820);
        } else {
            setIsSetup(true);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            window.location.reload(false);
        }
    }

    return (
        <div className={styles.setupContainer}>
            <img src="/setup/classroom.png" alt="decorative" width="40%" />
            <SizedBox width='5%'></SizedBox>
            <div className={styles.setup} style={{ animation }}>
                <form>
                    <div className="vertical-align">
                        <img src="/courses.png" height="24px" alt="" style={{ marginTop: '4px' }} />
                        <SizedBox width='8px'></SizedBox>
                        <h1>planner</h1>
                    </div>
                    <SizedBox height='24px'></SizedBox>
                    <TextInput placeholder="Name" width="300px" label="Name" backgroundColor='rgba(0, 0, 0, 0.4)' borderColor='transparent' value={name} setValue={setName}
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        } />
                    <SizedBox height='16px'></SizedBox>
                    <TextInput placeholder="Email" label="Email" width="300px" backgroundColor='rgba(0, 0, 0, 0.4)' borderColor='transparent' value={email} setValue={setEmail}
                        leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>} />
                    <SizedBox height='32px'></SizedBox>
                    <Tag text="Let's go!" backgroundColor='var(--accent)' fontSize='13px' fontWeight="500" onClick={onSubmit}
                        rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>} />
                </form>
            </div>
        </div>
    )
}
