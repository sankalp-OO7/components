// import './App.css';
import Calender from './components/Calender';
import Calender2 from './components/Calender2';
import Accordian from './components/Accordian';
import SideNav from './components/SideNav';
import MainForm from './components/ReactHookForm/MainForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Man } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* <Calender2/> */}
      {/* <Calender/>*/}
      {/* <Accordian/>  */}
    <MainForm/>
      {/* <Router>             
       <SideNav />

        <Routes>
          <Route path="/Calender2" element={<Calender2 />} />  
          <Route path="/dashboard" element={<Accordian />} />  
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
