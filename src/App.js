import './App.css';
import { Route, Routes } from "react-router-dom";
import Stdmain from './components/Vhome/Stdmain';
import Login from './components/Vhome/Login/Login';
import Stdashboardmain from './components/stdashboard/Stdashboardmain/Stdashboardmain'



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Stdmain />} />
    <Route path='login/' element={<Login />} />
    <Route path='stmain/' element={<Stdashboardmain />} />
    
    </Routes>
      
    </div>
  );
}

export default App;
