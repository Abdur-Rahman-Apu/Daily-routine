import React from 'react';
import './Calculation.css';

const Calculation = () => {
    return (
        <div>
            <div className='mx-3 break-section'>
                <h5 className='my-3'>Add a break</h5>

                <div className='d-flex justify-content-around p-4 btn-container rounded-3'>
                    <button className='border-0  p-2 rounded-circle  break-btn'><h6>10s</h6></button>
                    <button className='border-0 p-2 ms-2 rounded-circle break-btn'><h6>20s</h6></button>
                    <button className='border-0 p-2 ms-2 rounded-circle break-btn'><h6>30s</h6></button>
                    <button className='border-0  p-2 ms-2 rounded-circle break-btn'><h6>40s</h6></button>
                    <button className='border-0 p-2 ms-2 rounded-circle break-btn'><h6>50s</h6></button>
                </div>
            </div>


            <div className="mx-3 exercise-detail">

                <h5 className='mt-5 mb-4'>Exercise Details</h5>
                <div className='d-flex justify-content-between align-items-center p-2 rounded-3  time-container my-4'>
                    <h6>Exercise time</h6>
                    <p className='text-muted'>{ } seconds</p>
                </div>


                <div className='d-flex justify-content-between align-items-center p-2 rounded-3 time-container my-4'>
                    <h6>Break time</h6>
                    <p className='text-muted'>{ } seconds</p>
                </div>

                <div className='text-center '>
                    <button className='px-5 py-2 mt-4 border-0 activity-btn fw-bold w-100 text-white'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Calculation;