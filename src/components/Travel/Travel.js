import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Travel.css';

const Travel = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className='travel-container'>
            <div className='places-container'>
                <h3>Select, You want to travel...</h3>
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                    ></Place>)
                }
            </div>
            <div className='cart-container'>
                <h3>Selected Places</h3>
            </div>
        </div>
    );
};

export default Travel;