import React, { useState } from 'react';
import Home from './Home'
import Courses from './Courses'
import HomeLogo from '../assets/images/Home.png'
import Octalogic from '../assets/images/Octalogic.png'
import CoursesLogo from '../assets/images/Courses.png'
const Sidebar = ({ activeOption, setActiveOption }) => {
  return (
    <div>
      <div style={{ width: '96px', backgroundColor: '#FFF', padding: '10px', height: '100vh', display:'flex' ,flexDirection:'column', alignItems:'center', justifyContent:'flex-start', gap:'16px' }}>
        <img src={Octalogic} alt=""  style={{marginBottom:'1rem', width:'48px' , height:'48px'}}/>
        <div
          style={{
            backgroundColor: activeOption === 'home' , 
            cursor: 'pointer'
          }}
          onClick={() => setActiveOption('home')}
        >
          <img src={HomeLogo} alt="" style={{width:'72px' , height:'50px'}}/>
        </div>
        <div
          style={{
            backgroundColor: activeOption === 'courses' ,
            cursor: 'pointer'
          }}
          onClick={() => setActiveOption('courses')}
        >
          <img src={CoursesLogo} alt="" style={{width:'72px' , height:'50px'}}/>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('home');

  return (
    <div style={{ display: 'flex'  }}>
      <Sidebar activeOption={activeOption} setActiveOption={setActiveOption} />
      <div style={{background:'#F4F4F4', width:'100%' , height:'140vh'}}>
        {activeOption === 'home' && <Home />}
        {activeOption === 'courses' && <Courses />}
      </div>
    </div>
  );
};

export default Dashboard;
