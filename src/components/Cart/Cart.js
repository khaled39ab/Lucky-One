import './Cart.css'

const Cart = ({ cart }) => {

    let newCart = [];
    for (const item of cart) {
        if (newCart.filter(x => x.id === item.id).length === 0) {
            if (newCart.length < 4) {
                newCart.push(item);
            }
        }
    }
    
    const chooseAgain = () =>document.className("selected-place").remove()
    return (
        <div className='cart'>
            <h2>Selected Places</h2>
            <div className='selected-items'>
                {
                    newCart.map(place =>
                        <div className='selected-place' key={place.id}>
                            <img src={place.img} alt="" />
                            <h4>{place.name}</h4>
                        </div>
                    )
                }
            </div>
            <div className='btn-container'>
                <button className='forMe-btn'>CHOOSE 1 FOR ME</button> <br />
                <button onClick={chooseAgain} className='again-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;