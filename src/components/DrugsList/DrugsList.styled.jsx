import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DrugsWrapp = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 min-width: 300px;

 > h2 {
  padding: 0 0 20px 0;
  text-transform: uppercase;
  color: orangered;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
 > ul {
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  > li {
   display: flex;
   flex-direction: column;

   padding: 1.5rem;
   border: 1px solid rgba(0, 0, 0, 0.1);
   max-height: 480px;
   max-width: 100%;
   background-color: white;
   transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
   &:hover,
   &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
     rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   }
   > p {
    font-size: 14px;
    max-width: 340px;
    margin: 1rem 0px 0.5rem;
    font-family: Raleway, sans-serif;
   }
  }
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

export const Line = styled.hr`
 margin: 0.25rem 0;

 border-top: 1px solid #000;
 opacity: 0.25;
`;

export const PriceWrapp = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const ImageWrapp = styled.div`
 display: flex;
 justify-content: center;
 > img {
  object-fit: cover;
  max-width: 100%;
  display: flex;
  align-items: center;
  transition: transform 0.15s ease-in-out;
  &:hover {
   transform: scale(1.05);
  }
 }
`;

export const Button = styled.button`
 padding: 8px 20px;
 border-radius: 4px;
 text-decoration: none;
 color: white;
 background-color: orangered;
 font-weight: 500;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;

 &:hover,
 &:focus {
  background-color: grey;
 }
`;
