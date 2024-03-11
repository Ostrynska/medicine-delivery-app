import React from 'react';

import { Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
 return (
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
 );
};
