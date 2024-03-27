import './Stdashboardmain.css';
import Maindash from '../MainDash/Maindash';
// import Maininput from './components/Maininput';
import Rightbar from '../Rightbar/Rightbar';

import Sidebar from '../Sidebar/Sidebar';


function Stdashboardmain() {
  
  // const [value, onChange] = useState(new Date());
  return (
    <div className="StApp">
    <div className='StAppglass'>
    <Sidebar />
    <Maindash />
    <Rightbar /> 
    {/* <Maininput /> */}
    
    </div>
    </div>
  );
}

export default Stdashboardmain;
