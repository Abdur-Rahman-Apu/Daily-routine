import React from 'react';
import { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Calculation from '../Calculation/Calculation';
import Myself from '../Myself/Myself';


const Home = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const [items, setItems] = useState([]);

    const handleBtn = (selectedItem) => {
        const newItems = [...items, selectedItem];
        setItems(newItems);
    }

    return (
        <div>
            <div className="row">
                <div className="col-9">
                    <Activities activities={activities} handleBtn={handleBtn}></Activities>
                </div>
                <div className="col-3 bg-white">
                    <div>
                        <Myself></Myself>
                        <Calculation items={items}></Calculation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;