import { useSelector, useDispatch } from 'react-redux';
import { clearCart, updateCartItem, removeCartItem } from '../redux/cart/slice';

const CartList = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cartList);

    const totalPrice = cartList.reduce((total, item) => {
        return total + (item.price * item.count);
    }, 0);

    const handleQuantityChange = (id, e) => {
        const newQuantity = parseInt(e.target.value);
        dispatch(updateCartItem({ id, count: newQuantity }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Cart</h2>
            <button onClick={handleClearCart}>Remove All</button>
            <ul>
                {cartList.map(({ id, name, photo, description, price, count }) => (
                    <li key={id}>
                        <h3>{name}</h3>
                        <img src={photo} alt={name} width={300} height={250} />
                        <p>{description}</p>
                        <div>
                            <p>Price: <span>{price}</span></p>
                            <p>
                                Count:
                                <input
                                    type="number"
                                    value={count}
                                    onChange={e => handleQuantityChange(id, e)}
                                />
                            </p>
                            <button onClick={() => handleRemoveItem(id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default CartList;
