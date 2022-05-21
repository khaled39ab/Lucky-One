import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Place.css'

const Place = (props) => {
    const { handleAddToCart, place} = props;
    const { img, name, budget, } = place;
    return (
        <div className='place'>
            <img src={img} alt="" />
            <div className='place-info'>
                <h3 className='place-name'>{name}</h3>
                <h4 className='budget'>Budget: {budget}tk</h4>
            </div>
            <button onClick={()=>handleAddToCart(place)} className='btn-cart'>
                <p>ADD TO CART <span><FontAwesomeIcon icon= {faCartPlus}></FontAwesomeIcon></span> </p>
            </button>
        </div>
    );
};

export default Place;