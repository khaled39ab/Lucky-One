import './Cart.css'

const Cart = ({ cart, setCart }) => {

    let places = [];
    for (const place of cart) {
        if (places.filter(selectPlace => selectPlace.id === place.id).length === 0) {
            if (places.length < 4) {
                places.push(place);
            }
        }
    }

    const randomPlace = () => {
        const placeNum = Math.floor(Math.random() * places.length);
        const area = cart[placeNum]
        setCart([area])
    }

    const chooseAgain = () => {
        setCart([])
    }

    return (
        <div className='cart'>
            <h2>Selected Places</h2>
            <div className='selected-items'>
                {
                    places.map(place =>
                        <div className='selected-place' key={place.id}>
                            <img src={place.img} alt="" />
                            <h4>{place.name}</h4>
                        </div>
                    )
                }
            </div>
            <div className='btn-container'>
                <button onClick={randomPlace} className='forMe-btn'>CHOOSE 1 FOR ME</button> <br />
                <button onClick={chooseAgain} className='again-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;