import React from 'react';
import './Activity.css';

const Activity = ({ activities, handleBtn }) => {
    const { img, name, time, text } = activities;
    return (
        <div className='col'>
            <div className='card h-100'>
                <img src={img} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text text-muted">{text}</p>
                    <p className='fw-bold'><small>Time required:</small> {time} min</p>
                </div>
                <div className="card-footer bg-white text-center">
                    <button type='button' className='load-btn py-2 fw-bold text-white rounded-2' onClick={() => handleBtn(activities)}>Add to list</button>
                </div>
            </div>

        </div>
    );
};

export default Activity;