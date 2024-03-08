import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchAllShops } from '../../redux/shops/operations';

import { HomeWrapp, ShopsWrapp, Link } from './Home.styled';

const Home = () => {
 const dispatch = useDispatch();
 const shops = useSelector(state => state.shops.items);
 const [backgroundLoaded, setBackgroundLoaded] = useState(false);

 useEffect(() => {
  dispatch(fetchAllShops());
 }, [dispatch]);

 const handleLinkClick = () => {
  setBackgroundLoaded(true);
 };

 return (
  <>
   <h1 hidden>Medicine Delivery Shops</h1>
   <section>
    <HomeWrapp
     style={{
      backgroundImage: backgroundLoaded
       ? 'none'
       : "url('https://png.pngtree.com/png-clipart/20230927/original/pngtree-medicine-ordering-mobile-app-concept-of-healthcare-drugstore-and-online-pharmacy-png-image_13159766.png')",
      backgroundSize: '699px 588px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
     }}
    >
     <ShopsWrapp>
      <h2>Shops</h2>
      <ul>
       {shops.map(({ _id, name }) => (
        <Link key={_id} to={`/shops/${_id}`} onClick={handleLinkClick}>
         {name}
        </Link>
       ))}
      </ul>
     </ShopsWrapp>
     <Outlet />
    </HomeWrapp>
   </section>
  </>
 );
};

export default Home;
