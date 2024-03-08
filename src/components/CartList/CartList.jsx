import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
 clearCart,
 updateCartItem,
 removeCartItem,
} from '../../redux/cart/slice';

import {
 CartWrapp,
 Content,
 Text,
 Button,
 ButtonWrapp,
 Input,
 InputWrapp,
 PriceText,
 ButtonDelete,
} from './CartList.styled';
import { ImageWrapp, PriceWrapp } from '../DrugsList/DrugsList.styled';

const CartList = () => {
 const dispatch = useDispatch();
 const cartList = useSelector(state => state.cart.cartList);

 const totalPrice = cartList.reduce((total, item) => {
  return total + item.price * item.count;
 }, 0);

 const handleQuantityChange = (id, e) => {
  const newQuantity = parseInt(e.target.value);
  dispatch(updateCartItem({ id, count: newQuantity }));
 };

 const handleRemoveItem = id => {
  dispatch(removeCartItem(id));
 };

 const handleClearCart = () => {
  dispatch(clearCart());
 };

 return (
  <CartWrapp>
   <h2>Cart</h2>
   {cartList.length > 0 && (
    <ButtonWrapp>
     <Button onClick={handleClearCart}>Remove All</Button>
    </ButtonWrapp>
   )}
   {cartList.length > 0 ? (
    <ul>
     {cartList.map(({ id, name, photo, count }) => (
      <li key={id}>
       <ImageWrapp>
        <img src={photo} alt={name} width={100} height={100} />
       </ImageWrapp>

       <Content>
        <h3>{name}</h3>
        <PriceWrapp>
         <Text>Count:</Text>
         <InputWrapp>
          <Input
           type="number"
           value={count}
           onChange={e => handleQuantityChange(id, e)}
           min={1}
           max={100}
          />
          <ButtonDelete onClick={() => handleRemoveItem(id)}>
           Remove
          </ButtonDelete>
         </InputWrapp>
        </PriceWrapp>
       </Content>
      </li>
     ))}
    </ul>
   ) : (
    <div style={{ height: 505, paddingTop: '50px' }}>
     <p>Empty</p>
    </div>
   )}
   <PriceText>
    Total Price: <span>{totalPrice}</span>
   </PriceText>
  </CartWrapp>
 );
};

export default CartList;
