import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import {AdminDashboard} from './pages/Dashboard/AdminDashboard';
import {TrainingHeadDashboard} from './pages/Dashboard/TrainingHeadDashboard'
import {PlacementOfficerDashboard} from './pages/Dashboard/PlacementOfficerDashboard'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/> 
          <Route path="/admindashboard"  element={<AdminDashboard />}/>         
          <Route path="/trainingheaddashboard"  element={<TrainingHeadDashboard />}/>         
          <Route path="/placementofficerdashboard"  element={<PlacementOfficerDashboard />}/>         
        </Routes>
      </BrowserRouter>
  );
}

export default App;
