import React from 'react';
import './Myself.css';
import myImg from '../../Images/myself.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Myself = () => {
    return (
        <div className='mx-3'>
            <div className='d-flex flex-column align-items-center my-4'>
                <img src={myImg} alt="img" className='my-img img-fluid rounded-circle' />
                <div className='ms-3'>
                    <h6 className='fw-bold'>Abdur Rahman Apu</h6>
                    <FontAwesomeIcon className='text-dark icon' icon={faLocation} /> <span className='text-muted'>Dhaka, Bangladesh</span>
                </div>
            </div>

            <p className=''>I am a Junior web developer. I am currently learning Javascript framework "React".</p>

            <div className='d-flex flex-column justify-content-around rounded-3 mt-4'>
                <div className='d-flex'>
                    <p className='me-2'>Weight:</p>
                    <span className='fw-bold'>65</span><small className='text-muted'>Kg</small>
                </div>
                <div className='d-flex'>
                    <p className='me-2'>Height</p>
                    <span className='fw-bold'>5.4<small className='text-muted'>ft</small></span>
                </div>
                <div className='d-flex'>
                    <p className='me-2'>Age</p>
                    <span className='fw-bold'>23</span><small className='text-muted'>yrs</small>
                </div>
            </div>
        </div>
    );
};

export default Myself;