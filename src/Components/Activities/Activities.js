
import logo from '../../Images/notebook.png';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = (props) => {

    const { activities, handleBtn } = props;

    return (
        <div className='activities-container'>

            <div className="title d-flex align-items-center">
                <img className='img-fluid img' src={logo} alt="img" />
                <h3 className='fw-bold ms-2 top-title'>Daily Routine</h3>
            </div>



            <div>

                <h6 className='fw-bold my-4'>Select today's activities</h6>

                <div className='row row-cols-1 row-cols-lg-3 gy-4'>
                    {
                        activities.map(activity => <Activity key={activity.id} handleBtn={handleBtn} activities={activity}></Activity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Activities;