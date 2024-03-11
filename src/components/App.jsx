import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import '../styles/index.css';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

// import Home from '../pages/HomePage/Home';
// import Cart from '../pages/CartPage/Cart';
// import DrugsList from './DrugsList/DrugsList';

export const App = () => {
 return (
  <SharedLayout>
   <Routes>
    <Route path="/shops" element={<Home />}>
     <Route path=":id" element={<DrugsList />} />
    </Route>
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<Navigate to="/shops" replace />} />
   </Routes>
  </SharedLayout>
 );
};
