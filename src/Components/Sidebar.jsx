import React from 'react';
import Octalogic from '../assets/images/Octalogic.png';
import HomeLogo from '../assets/images/Home.png';
import CoursesLogo from '../assets/images/Courses.png';

const Sidebar = ({ activeOption, setActiveOption }) => {
    return (
        <div style={{ width: '96px', backgroundColor: '#FFF', padding: '10px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '16px' }}>
            <img src={Octalogic} alt="" style={{ marginBottom: '1rem', width: '48px', height: '48px' }} />
            <div
                style={{
                    backgroundColor: activeOption === 'home' ? '#EFEFEF' : '#FFF',
                    cursor: 'pointer'
                }}
                onClick={() => setActiveOption('home')}
            >
                <img src={HomeLogo} alt="Home" style={{ width: '72px', height: '50px' }} />
            </div>
            <div
                style={{
                    backgroundColor: activeOption === 'courses' ? '#EFEFEF' : '#FFF',
                    cursor: 'pointer'
                }}
                onClick={() => setActiveOption('courses')}
            >
                <img src={CoursesLogo} alt="Courses" style={{ width: '72px', height: '50px' }} />
            </div>
        </div>
    );
};

export default Sidebar;
