import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
 return (
  <Container>
   <Header>
    <Logo to="/shops">
     <span role="img" aria-label="medicine icon">
      💊
     </span>
     Medicine Delivery
    </Logo>
    <nav>
     <Link to="/shops" end>
      Shop
     </Link>
     <Link to="/cart">Shopping Cart</Link>
    </nav>
   </Header>
   <Suspense fallback={<Loader />}>
    <Outlet />
   </Suspense>
   <Footer />
  </Container>
 );
};
