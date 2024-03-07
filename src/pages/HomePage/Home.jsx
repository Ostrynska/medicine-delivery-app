import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchAllShops } from '../../redux/shops/operations';

import { HomeWrapp, ShopsWrapp, Link } from './Home.styled';

const Home = () => {
 const dispatch = useDispatch();
 const shops = useSelector(state => state.shops.items);

 useEffect(() => {
  dispatch(fetchAllShops());
 }, [dispatch]);

 return (
  <main>
   <h1 hidden>Medicine Delivery Shops</h1>
   <section>
    <HomeWrapp>
     <ShopsWrapp>
      <h2>Shops</h2>
      <ul>
       {shops.map(({ _id, name }) => (
        <Link key={_id} to={`/shops/${_id}`}>
         {name}
        </Link>
       ))}
      </ul>
     </ShopsWrapp>
     <Outlet />
    </HomeWrapp>
   </section>
  </main>
 );
};

export default Home;
