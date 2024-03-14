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
  for (const shop of shops) {
   for (const product of shop.drugslist) {
    if (product.id === id) {
     return shop.name;
    }
   }
  }
  return null;
 };

 const generateRandomNumber = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
 };

 const orderNumber = generateRandomNumber();

 const handleSubmit = async e => {
  e.preventDefault();
  const formData = formDataRef.current.getData();

  const orderList = cartList.map(item => ({
   name: item.name,
   price: item.price,
   count: item.count,
   totalByDrug: item.price * item.count,
   id: item.id,
   photo: item.photo,
  }));

  const groupedOrderList = orderList.reduce((acc, item) => {
   const shopName = findShopProductById(item.id, shops);
   acc[shopName] = acc[shopName] || [];
   acc[shopName].push(item);
   return acc;
  }, {});

  const drugslist = Object.entries(groupedOrderList).map(([shop, items]) => ({
   shop,
   orderlist: items.map(item => item),
   totalPriceByShop: items.reduce((total, drug) => total + drug.totalByDrug, 0),
  }));

  const totalPriceByShop = orderList.reduce(
   (total, drug) => total + drug.totalByDrug,
   0
  );

  const orderData = {
   ...formData,
   drugslist,
   total: totalPriceByShop.toFixed(2),
   order: orderNumber,
  };

  try {
   await addToOrder(orderData);
   dispatch(clearCart());
   formDataRef.current.clearFormValues();
   alert(
    `    We got it! Order number: ${orderNumber}.
    Check your inbox shortly for a confirmation email.`
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
