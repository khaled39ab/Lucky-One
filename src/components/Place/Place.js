import React from 'react';
import './Place.css'

const Place = (props) => {
    const { img, name, budget } = props.place;
    return (
        <div className='place'>
            <img src={img} alt="" />
            <div className='place-info'>
                <h3 className='place-name'>{name}</h3>
                <h4 className='budget'>Budget: {budget}tk</h4>
            </div>
            <button className='btn-cart'>
                <p>ADD TO CART</p>
            </button>
        </div>
    );
};

export default Place;