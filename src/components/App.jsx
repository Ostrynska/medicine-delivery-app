import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout/SharedLayout';

import '../styles/index.css';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

export const App = () => {
 return (
  <>
   <Routes>
    <Route index path="/shops" element={<Home />}>
     <Route path="/:id" element={<DrugsList />} />
    </Route>
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<p>Path not resolved</p>} />
   </Routes>
  </>
 );
};
