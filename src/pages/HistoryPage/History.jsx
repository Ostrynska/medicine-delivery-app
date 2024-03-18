import React, { useEffect, useState } from 'react';
import { getOrders } from '../../services/orders-api';

import Loader from '../../components/Loader/Loader';
import iconSearch from '../../assets/images/search.png';
import {
 HistoryWrapp,
 Line,
 SearchIcon,
 SearchInput,
 SearchWrapp,
 SearchResultsWrapp,
 ShopOrderList,
 ShopOrderItem,
 ResultsList,
 ResultsItem,
 ResultsItemOrderInf,
 ResultsItemTitle,
 ResultsItemUserInf,
 OrderList,
 OrderItem,
 OrderItemInf,
 OrderItemInfTotal,
 OrderItemImageWrapp,
 TotalWrapp,
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
      <ResultsList>
       {searchResults.map(order => (
        <ResultsItem key={order.id}>
         <ResultsItemOrderInf>
          <ResultsItemTitle>Order #{order.order}</ResultsItemTitle>
          <ResultsItemUserInf>
           <h3>User information:</h3>
           <p>{order.name}</p>
           <p>{order.email}</p>
           <p>{order.phone}</p>
          </ResultsItemUserInf>
         </ResultsItemOrderInf>
         <ShopOrderList>
          {order.drugslist.map(item => (
           <ShopOrderItem key={item.id}>
            <h4>{item.shop}</h4>
            <Line />
            <OrderList>
             {item.orderlist.map(drug => (
              <OrderItem key={drug.id}>
               <OrderItemImageWrapp>
                <img src={drug.photo} alt={drug.name} loading="lazy" />
               </OrderItemImageWrapp>
               <OrderItemInf>
                <h5>{drug.name}</h5>
                <p>
                 Price: <span>{drug.totalByDrug}</span>
                </p>
               </OrderItemInf>
              </OrderItem>
             ))}
             <OrderItemInfTotal>
              <p>
               Total: <span>{item.totalPriceByShop}</span>
              </p>
             </OrderItemInfTotal>
            </OrderList>
           </ShopOrderItem>
          ))}
         </ShopOrderList>
         <TotalWrapp>
          <p>
           Total: <span>{order.total}</span>
          </p>
         </TotalWrapp>
        </ResultsItem>
       ))}
      </ResultsList>
     </div>
    ) : (
     <SearchResultsWrapp>
      <h2>No search results found.</h2>
     </SearchResultsWrapp>
    )}
   </section>
  </HistoryWrapp>
 );
};

export default History;
