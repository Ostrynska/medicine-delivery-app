import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../../components/UserForm/UserForm';
import CartList from '../../components/CartList/CartList';

import { addToOrder } from '../../services/orders-api';
import { clearCart } from '../../redux/cart/slice';
import { getShops } from '../../redux/shops/selectors';
import { getCartList } from '../../redux/cart/selectors';

import { CartWrapp, SubmitWrapp, Button } from './Cart.styled';

const Cart = () => {
 const dispatch = useDispatch();
 const shops = useSelector(getShops);
 const cartList = useSelector(getCartList);
 const formDataRef = useRef(null);

 useEffect(() => {
  localStorage.setItem('localStorageСart', JSON.stringify(cartList));
 }, [cartList]);

 const findShopProductById = (id, shops) => {
  const shopProduct = shops.find(shop =>
   shop.drugslist.some(item => item.id === id)
  );
  return shopProduct ? shopProduct.name : null;
 };

 const generateRandomNumber = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
 };

 const handleSubmit = async e => {
  e.preventDefault();
  const formData = formDataRef.current.getData();
  const findShop = cartList.map(item => findShopProductById(item.id, shops));

  const orderList = cartList.map(item => ({
   name: item.name,
   price: item.price,
   count: item.count,
   totalByDrug: item.price * item.count,
  }));

  const totalPriceByShop = orderList.reduce(
   (total, drug) => total + drug.totalByDrug,
   0
  );

  const uniqueShops = [...new Set(findShop)];

  const drugslist = uniqueShops.map(shop => ({
   shop,
   orderList: orderList.filter(
    item => findShopProductById(item.id, shops) === shop
   ),
   totalPriceByShop,
  }));

  const orderData = {
   ...formData,
   drugslist,
   total: totalPriceByShop,
  };

  try {
   await addToOrder(orderData);
   dispatch(clearCart());
   formDataRef.current.clearFormValues();
   alert(
    `We got it! Order number: ${generateRandomNumber()}. Check your inbox shortly for a confirmation email.`
   );
  } catch (error) {
   console.error('Error while adding order:', error);
  }
 };

 return (
  <>
   <h1 hidden>Shopping cart</h1>
   <section>
    <CartWrapp>
     <UserForm ref={formDataRef} />
     <CartList />
    </CartWrapp>
    <SubmitWrapp>
     <Button type="submit" onClick={handleSubmit}>
      Submit
     </Button>
    </SubmitWrapp>
   </section>
  </>
 );
};

export default Cart;
