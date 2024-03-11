import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/index.css';
import { Container } from './Header/Header.styled';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

export const App = () => {
 return (
  <>
   <Header />
   <main>
    <Routes>
     <Route path="/shops" element={<Home />}>
      <Route path=":id" element={<DrugsList />} />
     </Route>
     <Route path="/cart" element={<Cart />} />
     <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
   </main>
   <Footer />
  </>
 );
};
