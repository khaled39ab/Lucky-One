import './Cart.css'

const Cart = ({cart}) => {
    let placeName;
    let img;
    for (const place of cart){
        placeName = place.name;
        img = place.img;
    }

    return (
        <div className='cart'>
            <h2>Selected Places</h2>
            <div className='selected-items'>
                <div className='selectedPlace'>
                    <img src={img} alt="" />
                    <h4>{placeName}</h4>
                </div>
            </div>
            <div className='btn-container'>
                <button className='forMe-btn'>CHOOSE 1 FOR ME</button> <br/>
                <button className='again-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;