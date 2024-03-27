import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import Logo1 from '../../Asserts/images/vcubelogo.png'
import profile from '../../Asserts/images/img1.png'

import { SidebarData } from '../../Asserts/Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons'
import axios from "axios";
function Sidebar() {
  const [selected,setSelected]=useState(0)
  const navigate=useNavigate();
  const logout=()=>{

    
    axios.post('http://127.0.0.1:8000/student/logoutuser/').then((resp)=>{
      console.log(resp);
      if (resp.data.success===true){
        navigate('/')

      }
      else{
        console.log("log olkjfdjdhfdjdfhdf")
      }
    })
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo1} alt="logo" />
        <span>
          V<span>sms</span>
        </span>
      </div>
      <div className="profile-img">
      <img src={profile} alt="" />
      <p>welcome Satya..</p>
      </div>
      <div className="menu">
        {SidebarData.map((item,index)=>{
          return(<div className={selected===index?"menuItem active":'menuItem'} key={index} onClick={()=>setSelected(index)}>
          <item.icon />
          <span>{item.heading}</span>
          </div>)
        })}
        <div className="menuItem">
        <UilSignOutAlt onClick={logout} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
