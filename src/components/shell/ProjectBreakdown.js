import PropTypes from 'prop-types';
import ElbowConnector from './ElbowConnector';
import './ProjectBreakdown.css';

const ProjectBreakdown = ({ title, numCollaborators = 1 }) => {
    return (
        <div className='project-breakdown'>
            <div className="project">
                <div className="vertical-align">
                    <div className="project-tile">{title[0].toUpperCase()}</div>
                    <div className="vertical-align">
                        <div>
                            <p className="project-title">{title}</p>
                            <div className="vertical-align ppl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <p className="project-people">{numCollaborators} {numCollaborators > 1 ? 'people' : 'person'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
            <div className="breakdown">
                <div className="vertical-align">
                    <ElbowConnector />
                    <div className="breakdown-section vertical-align">
                        <span className="emoji">🏔️</span>
                        <span className="text">Greek Translation</span>
                    </div>
                </div>
                <div className="vertical-align">
                    <ElbowConnector />
                    <div className="breakdown-section vertical-align">
                        <span className="emoji">🏔️</span>
                        <span className="text">Greek Translation</span>
                    </div>
                </div>
                <div className="vertical-align">
                    <ElbowConnector />
                    <div className="breakdown-section vertical-align">
                        <span className="emoji">🏔️</span>
                        <span className="text">Greek Translation sadf asdf sadf sdafaf </span>
                    </div>
                </div>
                <div className="vertical-align">
                    <ElbowConnector isLast={true} />
                    <div className="last breakdown-section vertical-align">
                        <span className="text">Create new</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectBreakdown.propTypes = {
    title: PropTypes.string.isRequired,
    numCollaborators: PropTypes.number
}

export default ProjectBreakdown;
