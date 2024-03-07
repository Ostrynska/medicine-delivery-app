import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataForm from '../components/DataForm';
import CartList from '../components/CartList';

import { addToOrder } from '../services/orders-api';
import { clearCart } from '../redux/cart/slice';

const Cart = () =>
{
  const dispatch = useDispatch();
  const shops = useSelector(state => state.shops.items);
  const cartList = useSelector(state => state.cart.cartList);
  const formDataRef = useRef(null);

  const findShopProductById = (id, shops) => {
    return shops.find(shop => shop.drugslist.some(item => item.id === id));
  };

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const formData = formDataRef.current.getData();
    const orderData = {
        ...formData,
        drugslist: cartList.map(item => {
          const shopProduct = findShopProductById(item.id, shops);
          return {
            drug: item.name,
            price: item.price,
            quantity: item.count,
            totalPrice: item.price * item.count,
            shop: shopProduct.name
          };
        }),
      };
    console.log(orderData);

    try {
      await addToOrder(orderData);
      console.log(addToOrder(orderData));
      dispatch(clearCart());
      // formDataRef.current.reset(); 
    } catch (error) {
      console.error('Error while adding order:', error);
    }
  };

  return (
    <main>
      <div>
        <div>
          <DataForm ref={formDataRef} />
        </div>
        <CartList />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
};

export default Cart;
