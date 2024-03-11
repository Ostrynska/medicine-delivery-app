import React, { Outlet } from 'react';

import Footer from '../Footer/Footer';

import { HeaderWrapp, Logo, Link, Container } from './SharedLayout.styled';

const SharedLayout = () => {
 return (
  <Container>
   <HeaderWrapp>
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
   </HeaderWrapp>
   <Outlet />
   <Footer />
  </Container>
 );
};

export default SharedLayout;
