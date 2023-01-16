import './App.css';
import { Routes, Route } from 'react-router-dom';
import Setup from './pages/setup/Setup';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/404/NotFound';
import Course from './pages/course/Course';
import Shell from './components/shell/Shell';

function App() {

  const isSetup = localStorage.getItem('isSetup');

  if (isSetup !== 'true') {
    return <Setup />
  } else {
    return (
      <div className="App">
        <Shell />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/course" element={<Course />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
