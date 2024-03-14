import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeWrapp = styled.div`
 min-height: 88vh;
 display: flex;
 ${'' /* justify-content: center; */}
 flex-direction: column;
 gap: 8px;
 width: 100%;
 padding-bottom: 8px;
 background-image: ${({ backgroundLoaded }) =>
  backgroundLoaded
   ? 'none'
   : "url('https://png.pngtree.com/png-clipart/20230927/original/pngtree-medicine-ordering-mobile-app-concept-of-healthcare-drugstore-and-online-pharmacy-png-image_13159766.png')"};
 background-size: 300px 230px;
 background-repeat: no-repeat;
 background-position: bottom;

 @media screen and (min-width: 576px) {
  gap: 0px;
 }
 @media screen and (min-width: 1200px) {
  flex-direction: row;
  gap: 32px;
  background-size: 699px 588px;
  background-position: right;
  justify-content: start;
 }
 @media screen and (min-width: 1400px) {
  justify-content: space-between;
 }
`;
export const ShopsWrapp = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 overflow-y: scroll;
 height: fit-content;

 padding: 1.5rem;
 box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
 border: 1px solid #ccc;
 background-color: white;
 @media screen and (min-width: 576px) {
  padding: 1.5rem 0;
  border: none;
  box-shadow: none;
  background-color: transparent;
 }
 @media screen and (min-width: 1200px) {
  padding: 1.5rem;
  width: 320px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: 1px solid #ccc;
  background-color: white;
 }

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
  gap: 10px;
  flex-direction: row;
  @media screen and (min-width: 576px) {
   flex-wrap: nowrap;
   gap: 6px;
   align-items: normal;
  }
  @media screen and (min-width: 1200px) {
   gap: 16px;
   align-items: center;
   flex-wrap: wrap;
  }
 }
`;

export const Link = styled(NavLink)`
 width: 100%;
 padding: 6px 10px;
 font-size: 16px;
 font-weight: 500;
 border: 1px solid #ccc;
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

 @media screen and (min-width: 576px) {
  font-size: 14px;
  padding: 4px 10px;
 }
 @media screen and (min-width: 1200px) {
  font-size: 16px;
  padding: 20px 10px;
 }
`;
