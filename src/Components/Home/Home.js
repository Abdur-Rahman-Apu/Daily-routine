import React from 'react';
import Activities from '../Activities/Activities';
import Calculation from '../Calculation/Calculation';
import Myself from '../Myself/Myself';


const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <Activities></Activities>
                </div>
                <div className="col-3 bg-white">
                    <div>
                        <Myself></Myself>
                        <Calculation></Calculation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;