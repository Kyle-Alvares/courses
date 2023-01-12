import './Dashboard.css';
import Courses from './Courses';
import Summary from './Summary';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Courses />
            <Summary />
        </div>
    )
}
