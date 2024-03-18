import styled from 'styled-components';

import { Input, InputIcon } from '../../components/SearchBar/SearchBar.styled';

export const HistoryWrapp = styled.div`
 width: 100%;
 min-height: 88vh;
`;
export const SearchWrapp = styled.div`
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
`;

export const SearchIcon = styled(InputIcon)`
 position: absolute;
 top: auto;
 @media screen and (min-width: 768px) {
  left: 130px;
 }
 @media screen and (min-width: 1200px) {
  left: 269px;
 }
 @media screen and (min-width: 1400px) {
  left: 319px;
 }
`;

export const SearchInput = styled(Input)`
 width: 100%;
 @media screen and (min-width: 768px) {
  width: 450px;
 }
 @media screen and (min-width: 1200px) {
  width: 650px;
 }
 @media screen and (min-width: 1400px) {
  width: 750px;
 }
`;

export const SearchResultsWrapp = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const ShopOrderList = styled.ul`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 30px;
`;

export const ShopOrderItem = styled.li`
 width: 100%;
 padding: 1.5rem;
 > h4 {
  text-transform: uppercase;
  color: orangered;
  font-size: 18px;
  font-family: 'Sulphur Point', sans-serif;
 }
`;

export const ResultsList = styled.ul`
 width: 100%;
 margin-top: 1.5rem;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 30px;
`;

export const ResultsItem = styled.li`
 width: 100%;
 border: 1px solid rgb(230 229 229 / 60%);
 background: linear-gradient(
  90deg,
  rgba(36, 25, 0, 0.029871323529411797) 0%,
  rgba(121, 92, 9, 0.055081407563025264) 35%,
  rgba(255, 220, 0, 0) 100%
 );
 border-radius: 4px;
 background-color: white;
`;

export const ResultsItemOrderInf = styled.div`
 padding: 1.5rem;
 @media screen and (min-width: 576px) {
  display: flex;
  justify-content: space-between;
 }
`;

export const ResultsItemTitle = styled.h2`
 padding: 0 0 20px 0;
 text-transform: uppercase;
 color: orangered;
 font-size: 30px;
 font-weight: 800;
 font-family: 'Sulphur Point', sans-serif;
`;

export const ResultsItemUserInf = styled.div`
 width: 300px;
 @media screen and (min-width: 576px) {
  width: 223px;
 }
 @media screen and (min-width: 768px) {
  width: 259px;
 }
 @media screen and (min-width: 1200px) {
  width: 300px;
 }
 > h3 {
  padding: 0 0 10px 0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
`;

export const OrderList = styled.ul`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-between;

 @media screen and (min-width: 576px) {
  justify-content: space-evenly;
 }
 @media screen and (min-width: 768px) {
  justify-content: space-between;
 }
`;

export const OrderItem = styled.li`
 display: flex;
 gap: 30px;
 width: 400px;
 justify-content: space-between;
 @media screen and (min-width: 576px) {
  padding: 5px 40px;
 }
 @media screen and (min-width: 768px) {
  width: 310px;
 }
 @media screen and (min-width: 1200px) {
  width: 400px;
 }
`;

export const OrderItemInfTotal = styled.div`
 display: flex;
 width: 400px;
 height: 44px;
 justify-content: flex-end;
 align-items: center;

 @media screen and (min-width: 576px) {
  padding: 5px 40px;
 }
 @media screen and (min-width: 768px) {
  width: 310px;
 }
 @media screen and (min-width: 1200px) {
  width: 400px;
 }

 > p {
  background-color: #f2f1f0;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  width: 150px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 800;
  color: orangered;
  font-family: 'Sulphur Point', sans-serif;
  > span {
   color: black;
  }
 }
`;

export const OrderItemInf = styled.div`
 width: 150px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
 > h5 {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
 > p {
  > span {
   color: orangered;
  }
 }
`;

export const OrderItemImageWrapp = styled.div`
 display: flex;
 justify-content: center;

 > img {
  width: 100px;
  height: 118px;
  object-fit: contain;
  transition: transform 0.15s ease-in-out;

  &:hover {
   transform: scale(1.025);
  }
 }
`;

export const Line = styled.hr`
 margin: 0.25rem 0;

 border-top: 1px solid #000;
 opacity: 0.25;
`;

export const TotalWrapp = styled.div`
 width: 100%;
 background-color: #ebebeb;
 display: flex;
 justify-content: flex-end;
 padding: 5px 30px 5px 0;
 > p {
  text-transform: uppercase;
  color: orangered;
  font-size: 26px;
  font-weight: 600;
  > span {
   color: black;
   font-family: 'Sulphur Point', sans-serif;
  }
 }
`;
