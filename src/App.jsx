import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Course from './pages/course/Course';
import Shell from './components/shell/Shell';

function App() {
  return (
    <div className="App">
      <Shell />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
