import React, { lazy } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Container } from './SharedLayout/SharedLayout.styled';

import '../styles/index.css';
import Footer from './Footer/Footer';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

export const App = () => {
 return (
  <Container>
   <SharedLayout />
   <Routes>
    <Route path="/shops" element={<Home />}>
     <Route path=":id" element={<DrugsList />} />
    </Route>
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<p>Path not resolved</p>} />
   </Routes>
   <Footer />
  </Container>
 );
};
