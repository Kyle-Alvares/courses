import styles from './NewQuickLink.module.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Modal from '../../components/Modal';
import TextInput from '../../components/inputs/TextInput';
import Tag from '../../components/Tag';
import SizedBox from '../../components/SizedBox';
import ColorPicker from '../../components/inputs/color-picker/ColorPicker';
import IconPicker from '../../components/inputs/icon-picker/IconPicker';

export default function NewQuickLink({
    dismissModal,
    courses,
    updateCourses,
    courseIndex
}) {

    const [text, setText] = useState('');
    const [href, setHref] = useState('');
    const [color, setColor] = useState('var(--red-60)');
    const [icon, setIcon] = useState('academic-cap');
    const [refreshLinks, setRefreshLinks] = useState(false);
    const [animation, setAnimation] = useState('');

    const shake = 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both';

    const deleteQuickLink = (index) => {
        courses[courseIndex].quicklinks.splice(index, 1);
        updateCourses(courses);
        setRefreshLinks(!refreshLinks);
    }

    const onSubmit = () => {
        if (text.trim() === '' || href.trim() === '') {
            setAnimation(shake);
            setTimeout(() => setAnimation(''), 820);
        } else {
            if (!courses[courseIndex].quicklinks) courses[courseIndex].quicklinks = [];
            courses[courseIndex].quicklinks.push({
                text,
                href,
                color: color.includes('cool-gray') ? 'cool-gray' : color.split('--')[1].split('-')[0],
                icon
            });
            updateCourses(courses);
            dismissModal();
        }
    }

    return (
        <Modal width="450px" border='none' animation={animation}>
            <p style={{ fontSize: '22px', fontWeight: '500' }}>Add Quick Link</p>
            <SizedBox height='4px'></SizedBox>
            <p style={{ fontSize: '14px', fontWeight: '400', color: 'var(--gray-50)' }}>Quickly access course links</p>
            { courses[courseIndex].quicklinks.length > 0 && <SizedBox height='18px'></SizedBox> }
            {courses[courseIndex].quicklinks.map((quicklink, index) =>
                <div className='vertical-align' key={index}
                    style={{
                        marginBottom: '8px',
                        padding: '12px',
                        fontSize: '14px',
                        color: `var(--${quicklink.color}-10)`,
                        backgroundColor: `var(--${quicklink.color}-100)`,
                        border: `1px solid var(--${quicklink.color}-40)`,
                        borderRadius: '6px',
                    }}>
                    <div className="space-between" style={{ width: '100%' }}>
                        <div className='vertical-align'>
                            <img
                                style={{
                                    filter: "invert(90%)",
                                    marginRight: '4px'
                                }}
                                height="16px"
                                width="16px"
                                src={`/icons/outline/${quicklink.icon}.svg`}
                                alt={quicklink.icon}
                            />
                            <p>{quicklink.text}</p>
                        </div>
                        <div className='vertical-align' onClick={() => deleteQuickLink(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            <SizedBox height='18px'></SizedBox>
            { courses[courseIndex].quicklinks.length > 0 && <p style={{ fontSize: '20px', fontWeight: '500' }}>New Link</p> }
            <div className={styles.form} id="new-link">
                <TextInput
                    label="Name"
                    placeholder="Name"
                    backgroundColor='rgba(0,0,0,0.3)'
                    value={text}
                    setValue={setText}
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    } />
                <div>
                    <SizedBox height='8px'></SizedBox>
                    <IconPicker
                        setIcon={setIcon}
                    >
                    </IconPicker>
                </div>
                <div>
                    <SizedBox height='8px'></SizedBox>
                    <label>Color</label>
                    <ColorPicker
                        setColor={setColor}
                    >
                    </ColorPicker>
                </div>
                <TextInput
                    label="Link"
                    placeholder="Link"
                    backgroundColor='rgba(0,0,0,0.3)'
                    value={href}
                    setValue={setHref}
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    }>
                </TextInput>
                <SizedBox height='20px' />
                <div className={styles.submit}>
                    <Tag text="Cancel" fontWeight="500" color="var(--red-60)" onClick={dismissModal} backgroundColor="transparent"></Tag>
                    <Tag text="Submit" backgroundColor='var(--accent)' fontWeight="500" onClick={onSubmit}></Tag>
                </div>
            </div>
        </Modal>
    )
}
