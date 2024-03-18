import styled from 'styled-components';

import { Input, InputIcon } from '../../components/SearchBar/SearchBar.styled';

export const HistoryWrapp = styled.div`
 width: 100%;
 min-height: 88vh;
 padding-bottom: 8px;
 display: flex;
 justify-content: center;
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
`;

export const SearchInput = styled(Input)`
 width: 450px;
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
`;

export const ResultsList = styled.ul`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 30px;
`;

export const ResultsItem = styled.li`
 width: 100%;
 border: 1px solid rgb(230 229 229 / 60%);
 border-radius: 4px;
 background-color: white;
 padding: 1.5rem;
 margin: 1.5rem 0;
`;

export const ResultsItemOrderInf = styled.div`
 display: flex;
 justify-content: space-between;
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
 > h3 {
  padding: 0 0 10px 0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
`;

export const OrderItem = styled.li`
 display: flex;
 justify-content: space-between;
 gap: 30px;
`;

export const OrderItemImageWrapp = styled.div`
 display: flex;
 justify-content: center;
 > img {
  max-width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  object-fit: cover;
  transition: transform 0.15s ease-in-out;
  @media screen and (min-width: 576px) {
   height: 118px;
  }
  @media screen and (min-width: 768px) {
   height: 150px;
   object-fit: contain;
  }
  @media screen and (min-width: 1200px) {
   object-fit: cover;
   ${'' /* height: 233px; */}
  }
  &:hover {
   transform: scale(1.05);
  }
 }
`;
