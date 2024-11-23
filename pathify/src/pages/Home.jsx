import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import {StatusDropdown, InterviewDropdown, DecisionDropdown} from  "../components/Dropdown";
import DateSelector from '../components/DateSelector';

function Home() {

    // const navigate = useNavigate();
    const navigate = useNavigate(); 

    const [statuses, setStatuses] = useState({
        row1: 'Applied',
        row2: 'Not Applied',
        row3: 'Interviewed',
    });

    const handleStatusChange = (row, status) => {
        setStatuses(prevStatuses => ({
            ...prevStatuses,
            [row]: status,
        }));
    };

    return(
        <div>
            <div className='title'>
                Career Tracker
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        {/* Main Header Row */}
                        <tr> 
                            <th> Company </th>
                            <th> Position Title </th>
                            <th> Application Deadline </th>
                            <th> Status </th>
                            <th> Interview </th>
                            <th> Decision </th>
                        </tr>
                    </thead>
                    {/* tbody contains our data with jobs people applied to etc.  */}
                    <tbody> 
                        <tr>
                            {/* Filler until we get out SQL set up */}
                            <td> Microsoft </td>
                            <td> Product Manager Internship </td>
                            <td> <DateSelector/> </td>
                            <td> <StatusDropdown/>  </td>
                            <td> <InterviewDropdown/> </td>
                            <td> <DecisionDropdown/> </td>
                        </tr>
                        <tr>
                            {/* Filler until we get out SQL set up */}
                            <td> Microsoft </td>
                            <td> Product Manager Internship </td>
                            <td>  November 2024 </td>
                            <td> Applied  </td>
                            <td> Interviewed </td>
                            <td> Not Released </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;