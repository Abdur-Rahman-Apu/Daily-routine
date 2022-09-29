import React, { useEffect, useState } from 'react';
import logo from '../../Images/notebook.png';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div className='activities-container'>

            <div className="title d-flex align-items-center">
                <img className='img-fluid img' src={logo} alt="img" />
                <h3 className='fw-bold ms-2'>Daily Routine</h3>
            </div>



            <div>
                <p className='fw-bold my-3'>Select Today's activities</p>

                <div className='row row-cols-3 gy-4'>
                    {
                        activities.map(activity => <Activity key={activity.id} activities={activity}></Activity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Activities;