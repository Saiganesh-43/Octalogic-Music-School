import React from 'react'
import '../Styles/Home.css'
import CardLogo from '../assets/images/CardLogo.png'
const enrolmentsData = [
    { enrNo: '1563124', sName: 'John Doe', cName: 'Percussion', fees: '$100', date: '2024-04-20' },
    { enrNo: '1563125', sName: 'Jane Smith', cName: 'Piano', fees: '$120', date: '2024-04-19' },
    { enrNo: '1563126', sName: 'Alice Johnson', cName: 'Drum', fees: '$90', date: '2024-04-18' },
    { enrNo: '1563127', sName: 'Bob Brown', cName: 'Vocal', fees: '$110', date: '2024-04-17' },
    { enrNo: '1563128', sName: 'Eva Williams', cName: 'guitar', fees: '$80', date: '2024-04-16' }
];
const studentsData = [
    { regNo: '43422', fName: 'John', lName: 'Doe', course: '3', totalFee: '$500', regDate: '2024-04-20' },
    { regNo: '43423', fName: 'Jane', lName: 'Smith', course: '5', totalFee: '$520', regDate: '2024-04-19' },
    { regNo: '43424', fName: 'Alice', lName: 'Johnson', course: '2', totalFee: '$490', regDate: '2024-04-18' },
    { regNo: '43425', fName: 'Bob', lName: 'Brown', course: '7', totalFee: '$510', regDate: '2024-04-17' },
    { regNo: '43425', fName: 'Eva', lName: 'Williams', course: '4', totalFee: '$480', regDate: '2024-04-16' }
];
const Home = () => {
    return (
        <div className='Home'>
            <h1>Overview</h1>
            <div className='Overview-Cards'>
                <div className='Card'>
                    <div className='CardDetails'>
                        <img src={CardLogo} alt="" style={{ width: '32px', height: '32px' }} />
                        <div className='CardDetails-Text'><h3>164</h3><p>total number of students</p></div>
                    </div>
                    <div className='View'>
                        <h3>View</h3>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardDetails'>
                        <img src={CardLogo} alt="" style={{ width: '32px', height: '32px' }} />
                        <div className='CardDetails-Text'><h3>24</h3><p>total number of courses</p></div>
                    </div>
                    <div className='View'>
                        <h3>View</h3>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardDetails'>
                        <img src={CardLogo} alt="" style={{ width: '32px', height: '32px' }} />
                        <div className='CardDetails-Text'><h3>$2000</h3><p>total amount earned</p></div>
                    </div>
                    <div className='View'>
                        <h3>View</h3>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardDetails'>
                        <img src={CardLogo} alt="" style={{ width: '32px', height: '32px' }} />
                        <div className='CardDetails-Text'><h3>Guiter</h3><p>best performance course</p></div>
                    </div>
                    <div className='View'>
                        <h3>View</h3>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardDetails'>
                        <img src={CardLogo} alt="" style={{ width: '32px', height: '32px' }} />
                        <div className='CardDetails-Text'><h3>Flute</h3><p>worst performance course</p></div>
                    </div>
                    <div className='View'>
                        <h3>View</h3>
                    </div>
                </div>
            </div>
            <div className='Data-Table-Enrolments'>
                <div className='Data-Table-Name'>
                    <h3>Latest Enrolments</h3>
                    <h4>View All Courses</h4>
                </div>
                <div className='Table-Content'>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Enr. No</th>
                                <th>Student Name</th>
                                <th>Course Name</th>
                                <th>Fees</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolmentsData.map((enrolment, index) => (
                                <tr key={index}>
                                    <td>{enrolment.enrNo}</td>
                                    <td>{enrolment.sName}</td>
                                    <td>{enrolment.cName}</td>
                                    <td>{enrolment.fees}</td>
                                    <td>{enrolment.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='Data-Table-Students'>
                <div className='Data-Table-Name'>
                    <h3>Best Students</h3>
                    <h4>View All Students</h4>
                </div>
                <div className='Table-Content'>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Reg. No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Course</th>
                                <th>Total Fee</th>
                                <th>Reg. Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.regNo}</td>
                                    <td>{student.fName}</td>
                                    <td>{student.lName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.totalFee}</td>
                                    <td>{student.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home