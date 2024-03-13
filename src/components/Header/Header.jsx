import React from 'react';

import { HeaderWrapp, Logo, Link } from './Header.styled';

const Header = () => {
 return (
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
    <Link to="/history">History</Link>
   </nav>
  </HeaderWrapp>
 );
};

export default Header;
