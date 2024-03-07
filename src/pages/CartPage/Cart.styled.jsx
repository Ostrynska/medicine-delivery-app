import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CartWrapp = styled.div`
 min-height: 88vh;
 width: 100%;
 padding-bottom: 8px;
 display: flex;
 justify-content: space-between;
`;
export const ShopsWrapp = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 overflow-y: scroll;

 min-width: 300px;
 padding: 1.5rem;
 box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 border: 1px solid rgba(0, 0, 0, 0.1);

 > h2 {
  padding: 0 0 20px 0;
  text-transform: uppercase;
  color: orangered;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
 > ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
 }
`;

export const Link = styled(NavLink)`
 width: 100%;
 padding: 20px 10px;
 font-weight: 500;
 border: 1px solid rgb(230 229 229 / 60%);
 border-radius: 4px;
 background-color: white;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;

 &:hover,
 &:focus {
  color: orangered;
  border: 1px solid orangered;
 }

 &.active {
  color: white;
  background-color: orangered;
 }
`;
