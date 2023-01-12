import './Summary.css';
import Event from './Event';
import Tag from '../../components/Tag';
// import $ from 'jquery';

export default function Summary() {
    // $('#upcoming-dates').on('mouseover', (e) => {
    //     console.log('in');
    //     $('#upcoming-dates .month').css('display', 'block')
    // });
    // $('#upcoming-dates').on('mouseleave', (e) => {
    //     console.log('out')
    //     $('#upcoming-dates .month').css('display', 'none')
    // });
    return (
        <div className="summary">
            <p style={{ textAlign: 'center', fontSize: '14px', padding: '8px 0' }}>January 2023</p>
            <div id="upcoming-dates">
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">SUN</p>
                        <p className="day">9</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">MON</p>
                        <p className="day">10</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">TUES</p>
                        <p className="day">11</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">WED</p>
                        <p className="day">12</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">THURS</p>
                        <p className="day">13</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">FRI</p>
                        <p className="day">14</p>
                    </div>
                </div>
                <div className="upcoming-date">
                    <div className="date">
                        <p className="month">SAT</p>
                        <p className="day">15</p>
                    </div>
                </div>
            </div>
            {/* <p style={{ fontWeight: 500, fontSize: '18px' }}>Today</p> */}
            <Event title="Systems Programming">
                <Tag text="Join Lecture"
                    fullyRounded={true}
                    rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    } />
                <Tag text="UA 1350"
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    } />
                <Tag text="3:00 PM"
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    } />
            </Event>
            <Event title="Forensic Sciences">
                <Tag text="Join Lab"
                    fullyRounded={true}
                    rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>} />
                <Tag text="UB 2080"
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    } />
                <Tag text="6:30 PM"
                    leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    } />
            </Event>
        </div>
    )
}
