import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDrugs } from '../../redux/shops/operations';
import { addToCart } from '../../redux/cart/slice';

import {
 DrugsWrapp,
 Line,
 PriceWrapp,
 ImageWrapp,
 TextWrapp,
 Button,
} from './DrugsList.styled';

const DrugsList = () => {
 const { id } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchDrugs(id));
 }, [dispatch, id]);

 const drugs = useSelector(state => state.shops.drugsList);

 const handleAddToCard = item => {
  dispatch(addToCart(item));
 };

 return (
  <DrugsWrapp>
   <h2>Medicines</h2>
   <ul>
    {drugs.map(({ id, name, photo, description, price }) => (
     <li key={id}>
      <ImageWrapp>
       <img src={photo} alt={name} width={300} height={200} loading="lazy" />
      </ImageWrapp>
      <h3>{name}</h3>
      <Line />
      <TextWrapp>
       <p>{description}</p>
      </TextWrapp>
      <PriceWrapp>
       <p>{price}</p>
       <Button
        onClick={() => handleAddToCard({ id, name, photo, description, price })}
       >
        Add
       </Button>
      </PriceWrapp>
     </li>
    ))}
   </ul>
  </DrugsWrapp>
 );
};

export default DrugsList;
