import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getShops } from '../../redux/shops/selectors';
import { fetchAllShops } from '../../redux/shops/operations';

import { HomeWrapp, ShopsWrapp, Link } from './Home.styled';

const Home = () => {
 const dispatch = useDispatch();
 const shops = useSelector(getShops);
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
    <HomeWrapp $backgroundLoaded={backgroundLoaded}>
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
