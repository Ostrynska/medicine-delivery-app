import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDrugs } from '../../redux/shops/operations';
import { getLoading, getDrugsList } from '../../redux/shops/selectors';
import { getFavorites } from '../../redux/favorite/selectors';
import { getCartList } from '../../redux/cart/selectors';

import DrugsItem from '../DrugsItem/DrugsItem';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';

import { DrugsWrapp } from './DrugsList.styled';

const DrugsList = () => {
 const { id } = useParams();
 const dispatch = useDispatch();

 const drugs = useSelector(getDrugsList);
 const isLoading = useSelector(getLoading);
 const favorites = useSelector(getFavorites);
 const cartList = useSelector(getCartList);

 const [search, setSearch] = useState('');
 const [filteredDrugs, setFilteredDrugs] = useState([]);

 useEffect(() => {
  dispatch(fetchDrugs(id));
 }, [dispatch, id]);

 useEffect(() => {
  localStorage.setItem('localStorageСart', JSON.stringify(cartList));
 }, [cartList]);

 useEffect(() => {
  if (drugs && drugs.length > 0) {
   const filteredArray = drugs.filter(drug =>
    drug.name.includes(search.toLowerCase())
   );
   filteredArray.sort((a, b) => {
    const aIsFavorite = favorites.some(favorite => favorite.id === b.id);
    const bIsFavorite = favorites.some(favorite => favorite.id === a.id);
    return bIsFavorite - aIsFavorite;
   });
   setFilteredDrugs(filteredArray);
  }
 }, [search, drugs, favorites]);

 const handleSearch = e => {
  setSearch(e.currentTarget.value);
 };

 const handleSortByPrice = direction => {
  const sortedDrugs = [...filteredDrugs].sort((a, b) => {
   if (direction === 'up') {
    return a.price - b.price;
   } else if (direction === 'down') {
    return b.price - a.price;
   }
   return 0;
  });
  setFilteredDrugs(sortedDrugs);
 };

 return (
  <DrugsWrapp>
   <h2>Medicines</h2>
   <SearchBar
    value={search}
    onChange={handleSearch}
    sortByPrice={handleSortByPrice}
   />
   {filteredDrugs.length > 0 && (
    <ul>
     {filteredDrugs.map(drug => (
      <DrugsItem key={drug.id} drug={drug} />
     ))}
    </ul>
   )}
   {isLoading && <Loader />}
  </DrugsWrapp>
 );
};

export default DrugsList;
