import { useSelector } from 'react-redux';

const CartList = () => {
    const cartList = useSelector(state => state.cart.cartList);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartList.map((item, index) => (
          <li key={index}>
            {item && (
              <>
                <h3>{item.name}</h3>
                <img src={item.photo} alt={item.name} width={300} height={250} />
                <p>{item.description}</p>
                <p>{item.price}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
