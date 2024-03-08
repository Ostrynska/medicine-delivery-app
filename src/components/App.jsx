import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';

import '../styles/index.css';

const Home = lazy(() => import('../pages/HomePage/Home'));
const Cart = lazy(() => import('../pages/CartPage/Cart'));
const DrugsList = lazy(() => import('./DrugsList/DrugsList'));

export const App = () => {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const delay = 3000;
  const timer = setTimeout(() => {
   setLoading(false);
  }, delay);
  return () => clearTimeout(timer);
 }, []);
 return (
  <Suspense fallback={<Loader />}>
   {loading ? (
    <Loader />
   ) : (
    <>
     <SharedLayout />
     <main>
      <Routes>
       <Route index path="/shops" element={<Home />}>
        <Route path=":id" element={<DrugsList />} />
       </Route>
       <Route path="/cart" element={<Cart />} />
       <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
     </main>
     <Footer />
    </>
   )}
  </Suspense>
 );
};
