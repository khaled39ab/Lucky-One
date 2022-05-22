import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Place from '../Place/Place';
import './Travel.css';

const Travel = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const handleAddToCart = (selectedPlace) =>{
        const newCart = [...cart, selectedPlace]
        setCart (newCart);
    }
    return (
        <div className='travel-container'>
            <div className='places-container'>
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                        handleAddToCart={handleAddToCart}
                    ></Place>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                    cart= {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Travel;