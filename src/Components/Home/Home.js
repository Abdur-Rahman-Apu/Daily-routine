import React from 'react';
import { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Calculation from '../Calculation/Calculation';
import Myself from '../Myself/Myself';
import Questions from '../Questions/Questions';


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
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-12 col-lg-9">
                    <Activities activities={activities} handleBtn={handleBtn}></Activities>
                    <Questions></Questions>
                </div>
                <div className="col-12 col-lg-3 bg-white">
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