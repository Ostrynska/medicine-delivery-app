import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import '../styles/index.css';
import { Container } from './Container/Container.styled';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

export const App = () => {
 return (
  <Container>
   <Header />
   <main>
    <Routes>
     <Route path="/shops" element={<Home />}>
      <Route path=":id" element={<DrugsList />} />
     </Route>
     <Route path="/cart" element={<Cart />} />
     <Route path="*" element={<Navigate to="/shops" replace />} />
    </Routes>
   </main>
   <Footer />
  </Container>
 );
};
