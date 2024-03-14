import React, { useEffect, useState } from 'react';
import { getOrders } from '../../services/orders-api';

import Loader from '../../components/Loader/Loader';
import iconSearch from '../../assets/images/search.png';
import {
 HistoryWrapp,
 SearchIcon,
 SearchInput,
 SearchWrapp,
} from './History.styled';

const History = () => {
 const [orders, setOrders] = useState([]);
 const [searchInput, setSearchInput] = useState('');
 const [searchResults, setSearchResults] = useState([]);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  const fetchOrders = async () => {
   try {
    const ordersData = await getOrders();
    setOrders(ordersData);
   } catch (error) {
    console.error('Error fetching orders:', error);
   }
  };
  fetchOrders();
 }, []);

 const handleSearchInputChange = event => {
  setSearchInput(event.target.value);
 };

 const handleSearch = async () => {
  const searchTerm = searchInput.toLowerCase().trim();
  if (!searchTerm) {
   setSearchResults([]);
   return;
  }

  setLoading(true);

  try {
   const results = orders.filter(
    order =>
     order.email.toLowerCase().includes(searchTerm) ||
     order.phone.includes(searchTerm) ||
     order.id === searchTerm
   );
   setSearchResults(results);
  } catch (error) {
   console.error('Error searching orders:', error);
  } finally {
   setLoading(false);
  }
 };

 return (
  <HistoryWrapp>
   <h1 hidden>Order history</h1>
   <section>
    <SearchWrapp>
     <SearchIcon src={iconSearch} alt="search" width={20} />
     <SearchInput
      name="search"
      type="text"
      placeholder="Enter email, phone number, or order ID"
      value={searchInput}
      onChange={handleSearchInputChange}
      onClick={handleSearch}
     />
    </SearchWrapp>
    {loading ? (
     <Loader />
    ) : searchResults.length > 0 ? (
     <div>
      <h2>Search Results:</h2>
      <ul>
       {searchResults.map(order => (
        <li key={order.id}>
         <h3>Order #{order.order}</h3>
         <div>
          <h4>User information:</h4>
          <p>{order.name}</p>
          <p>{order.email}</p>
          <p>{order.phone}</p>
         </div>
         <div>
          <ul>
           {order.drugslist.map(item => (
            <li key={item.id}>
             <h5>Shop: {item.shop}</h5>
             <ul>
              Order:
              {item.orderlist.map(drug => (
               <li key={drug.id}>
                <img src={drug.photo} alt={drug.name} loading="lazy" />
                <h6>{drug.name}</h6>
                <p>
                 Price: <span>{drug.totalByDrug}</span>
                </p>
               </li>
              ))}
              <p>
               Total by shop: <span>{item.totalPriceByShop}</span>
              </p>
             </ul>
            </li>
           ))}
          </ul>
         </div>
         <p>
          Total: <span>{order.total}</span>
         </p>
        </li>
       ))}
      </ul>
     </div>
    ) : (
     <h2>No search results found.</h2>
    )}
   </section>
  </HistoryWrapp>
 );
};

export default History;
