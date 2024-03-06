import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cart/slice';

const CartList = () =>
{
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cartList);

  const groupedItems = cartList.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].count += 1;
    } else {
      acc[item.id] = { ...item, count: 1 }; 
    }
    return acc;
  }, {});

    const groupedItemsArray = Object.values(groupedItems);

    const handleClearCart = () => {
    dispatch(clearCart());
  };


  return (
    <div>
          <h2>Cart</h2>
          <button onClick={handleClearCart}>Remove All</button>
      <ul>
        {groupedItemsArray.map(({ id, name, photo, description, price, count }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img src={photo} alt={name} width={300} height={250} />
            <p>{description}</p>
            <p>{price}</p>
            <p>Count: <span>{count}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
