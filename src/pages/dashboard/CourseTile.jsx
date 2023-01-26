import './CourseTile.css';
import CourseLink from './CourseLink';
import Week from '../../components/Week';
import SizedBox from '../../components/SizedBox';
import { formatTime } from '../../data/dates';

export default function CourseTile({
    course,
}) {
    return (
        <>
            <div className="course-tile">
                <div className="space-between vertical-align">
                    <div className="prof vertical-align">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="name">{course.prof}</span>
                    </div>
                    <p className="crn">{course.code}</p>
                </div>
                <div className='title vertical-align'>
                    {course.course}
                    <div className="dot"
                        style={{
                            marginLeft: '8px',
                            height: '6px',
                            width: '6px',
                            borderRadius: '6px',
                            backgroundColor: course.color
                        }}>
                    </div>
                </div>
                <SizedBox height="8px"></SizedBox>
                <div className="space-between">
                    <div className="vertical-align">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--cool-gray-30)" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ marginLeft: '4px', fontSize: '13px', color: 'var(--gray-30)' }}>
                            {`Lecture: ${formatTime(course.startTime)} - ${formatTime(course.endTime)}`}
                        </span>
                    </div>
                    <Week
                        sun={course.schedule[0]}
                        mon={course.schedule[1]}
                        tues={course.schedule[2]}
                        wed={course.schedule[3]}
                        thurs={course.schedule[4]}
                        fri={course.schedule[5]}
                        sat={course.schedule[6]}
                    />
                </div>
                {course.sections && course.sections.map(section =>
                    <div className="space-between" style={{ marginTop: '8px' }} key={section.id}>
                        <div className="vertical-align">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--cool-gray-30)" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span style={{ marginLeft: '4px', fontSize: '13px', color: 'var(--gray-30)' }}>
                                {`${section.type}: ${formatTime(section.startTime)} - ${formatTime(section.endTime)}`}
                            </span>
                        </div>
                        <Week
                            sun={section.schedule[0]}
                            mon={section.schedule[1]}
                            tues={section.schedule[2]}
                            wed={section.schedule[3]}
                            thurs={section.schedule[4]}
                            fri={section.schedule[5]}
                            sat={section.schedule[6]}
                        />
                    </div>
                )}
                <div className="links vertical-align">
                    {course.quicklinks && course.quicklinks.map((quicklink, index) =>
                        <CourseLink
                            key={index} // TODO: Fix with uuid
                            text={quicklink.text}
                            href={quicklink.href}
                            backgroundColor={`var(--${quicklink.color}-50)`}
                            icon={<div className={`stroke-${quicklink.color} vertical-align`}>
                                <img height="16px" width="16px" alt={quicklink.icon}
                                    style={{ marginRight: "4px", filter: "invert(100%)" }}
                                    src={`/icons/outline/${quicklink.icon}.svg`} />
                            </div>}
                        />
                    )}
                </div>
            </div>
            <hr style={{ margin: '4px 8px', }} />
        </>
    )
}
