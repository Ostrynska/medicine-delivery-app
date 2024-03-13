import axios from 'axios';

const instance = axios.create({
 baseURL: 'https://medicine-delivery-app-backend-9d0u.onrender.com/api',
});

export const getOrders = async () => {
 try {
  const { data } = await instance.get('/orders');
  return data;
 } catch (error) {
  console.error('Error adding order:', error);
  throw error;
 }
};

export const addToOrder = async orderData => {
 try {
  const { data } = await instance.post('/orders', orderData);
  return data;
 } catch (error) {
  console.error('Error adding order:', error);
  throw error;
 }
};
