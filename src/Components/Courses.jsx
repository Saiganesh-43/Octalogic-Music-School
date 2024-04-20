import React from 'react';
import '../Styles/Courses.css';

const Courses = ({ data }) => {
  const renderStatusIndicator = (status) => {
    let indicatorClass = '';
    let statusText = '';

    switch (status) {
      case 'Active':
        indicatorClass = 'active';
        statusText = 'Active';
        break;
      case 'Closed':
        indicatorClass = 'closed';
        statusText = 'Closed';
        break;
      case 'Archived':
        indicatorClass = 'archived';
        statusText = 'Archived';
        break;
      default:
        indicatorClass = '';
        statusText = '';
    }
    return (
      <span className={`status-indicator ${indicatorClass}`}>
        {statusText}
      </span>
    );
  };

  const handleActionsClick = (rowData) => {
    console.log('Clicked actions for:', rowData);
  };


    const dummyData = [
    { cName: 'Course 1', desc: 'Description 1', instructor: 'Instructor 1', instrument: 'Instrument 1', dayOfWeek: 'Monday', numStudents: 20, price: '$100', status: 'Active' },
    { cName: 'Course 2', desc: 'Description 2', instructor: 'Instructor 2', instrument: 'Instrument 2', dayOfWeek: 'Tuesday', numStudents: 15, price: '$90', status: 'Active' },
    { cName: 'Course 3', desc: 'Description 3', instructor: 'Instructor 3', instrument: 'Instrument 3', dayOfWeek: 'Wednesday', numStudents: 25, price: '$110', status: 'Closed' },
    { cName: 'Course 4', desc: 'Description 4', instructor: 'Instructor 4', instrument: 'Instrument 4', dayOfWeek: 'Thursday', numStudents: 18, price: '$95', status: 'Closed' },
    { cName: 'Course 5', desc: 'Description 5', instructor: 'Instructor 5', instrument: 'Instrument 5', dayOfWeek: 'Friday', numStudents: 22, price: '$105', status: 'Active' },
    { cName: 'Course 6', desc: 'Description 6', instructor: 'Instructor 6', instrument: 'Instrument 6', dayOfWeek: 'Saturday', numStudents: 17, price: '$85', status: 'Archived' },
    { cName: 'Course 7', desc: 'Description 7', instructor: 'Instructor 7', instrument: 'Instrument 7', dayOfWeek: 'Sunday', numStudents: 19, price: '$98', status: 'Archived' },
    { cName: 'Course 8', desc: 'Description 8', instructor: 'Instructor 8', instrument: 'Instrument 8', dayOfWeek: 'Friday', numStudents: 22, price: '$115', status: 'Active' },
    { cName: 'Course 9', desc: 'Description 9', instructor: 'Instructor 9', instrument: 'Instrument 9', dayOfWeek: 'Saturday', numStudents: 17, price: '$68', status: 'Archived' },
    { cName: 'Course 10', desc: 'Description 10', instructor: 'Instructor 10', instrument: 'Instrument 10', dayOfWeek: 'Sunday', numStudents: 19, price: '$78', status: 'Archived' }
  ];

return (
  <div className='Courses'>
    <h1>COURSES</h1>
    <div className='Course-search-Bar'>
      <h2>COURSE LIST</h2>
    </div>
    <div className='Table-Content'>
      <table className="data-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Instructor</th>
            <th>Instrument</th>
            <th>Day of Week</th>
            <th># of Students</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, index) => (
            <tr key={index}>
              <td>{row.cName}</td>
              <td>{row.desc}</td>
              <td>{row.instructor}</td>
              <td>{row.instrument}</td>
              <td>{row.dayOfWeek}</td>
              <td>{row.numStudents}</td>
              <td>{row.price}</td>
              <td>{renderStatusIndicator(row.status)}</td>
              <td>
                {row.status === 'Active' && (
                  <div className="actions-container">
                    <button className="actions-button" onClick={() => handleActionsClick(row)}>
                      <div className="dots"></div>
                      <div className="dots"></div>
                      <div className="dots"></div>
                    </button>
                    <div className="options-container">
                      <div className="option" onClick={() => console.log('Edit course')}>Edit Course</div>
                      <div className="option" onClick={() => console.log('Close course')}>Close Course</div>
                      <div className="option" onClick={() => console.log('Archive course')}>Archive Course</div>
                    </div>
                  </div>
                )}
                {row.status === 'Archived' && (
                  <div className="actions-container">
                    <button className="actions-button" onClick={() => handleActionsClick(row)}>
                      <div className="dots"></div>
                      <div className="dots"></div>
                      <div className="dots"></div>
                    </button>
                    <div className="options-container">
                      <div className="option" onClick={() => console.log('Unarchive course')}>Unarchive Course</div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Courses;
