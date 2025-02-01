import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SIgnUp from './pages/SIgnUp';
import Dashbaord from './pages/Dashbaord';

function App() {
  return (
    <div className='h-screen overflow-y-auto scrollbar-hide'>
      <Router>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SIgnUp />} />
          <Route path='/dashboard' element={<Dashbaord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
