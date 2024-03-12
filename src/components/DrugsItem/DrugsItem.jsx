import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../redux/cart/slice';
import {
 addToFavorites,
 removeFromFavorites,
} from '../../redux/favorite/slice';
import { getFavorites } from '../../redux/favorite/selectors';

import iconAdd from '../../assets/images/add-to-favorite.png';
import iconRemove from '../../assets/images/remove-from-favorite.png';

import {
 DrugWrapp,
 Line,
 PriceWrapp,
 ImageWrapp,
 TextWrapp,
 Button,
 FavoriteWrapp,
} from './DrugsItem.styled';

const DrugsItem = ({ drug }) => {
 const dispatch = useDispatch();

 const favorites = useSelector(getFavorites);

 const handleAddToCard = item => {
  dispatch(addToCart(item));
 };

 const toggleFavorite = () => {
  const isFavorite = favorites.some(favorite => favorite.id === drug.id);

  if (isFavorite) {
   dispatch(removeFromFavorites(drug));
  } else {
   dispatch(addToFavorites(drug));
  }
 };

 return (
  <DrugWrapp>
   <ImageWrapp>
    <img
     src={drug.photo}
     alt={drug.name}
     width={300}
     height={200}
     loading="lazy"
    />
   </ImageWrapp>
   <h3>{drug.name}</h3>
   <button onClick={() => toggleFavorite(drug.id)}>
    <FavoriteWrapp>
     {favorites.some(favorite => favorite.id === drug.id) ? (
      <img src={iconAdd} alt="Add to Favorites" />
     ) : (
      <img src={iconRemove} alt="Remove from Favorite" />
     )}
    </FavoriteWrapp>
   </button>

   <Line />
   <TextWrapp>
    <p>{drug.description}</p>
   </TextWrapp>
   <PriceWrapp>
    <p>{drug.price}</p>
    <Button onClick={() => handleAddToCard(drug)}>Add</Button>
   </PriceWrapp>
  </DrugWrapp>
 );
};

export default DrugsItem;
