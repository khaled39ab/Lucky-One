import React from 'react';

const Place = (props) => {
    console.log(props);
    const {img, name} = props.place;
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Place;