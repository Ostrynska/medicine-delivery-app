import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DrugWrapp = styled.li`
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;

 padding: 1.5rem;
 border: 1px solid rgba(0, 0, 0, 0.1);
 max-height: 429px;
 max-width: 100%;
 width: 326px;
 background-color: white;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
 cursor: pointer;
 @media screen and (min-width: 576px) {
  max-height: 389px;
  width: 245px;
 }
 @media screen and (min-width: 768px) {
  max-height: 397px;
  width: 335px;
 }
 @media screen and (min-width: 1200px) {
  padding: 1.5rem;
  width: 390px;
  max-height: 480px;
  justify-content: center;
 }
 @media screen and (min-width: 1400px) {
  width: 400px;
 }
 > h3 {
  text-transform: capitalize;
 }
 &:hover,
 &:focus {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
   rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
   rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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

export const TextWrapp = styled.div`
 overflow-y: scroll;
 max-width: 340px;

 > p {
  font-size: 14px;
  margin-top: 1rem;
  font-family: Raleway, sans-serif;
  @media screen and (min-width: 1200px) {
   margin: 1rem 0px 0.5rem;
  }
 }
`;

export const PriceWrapp = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 > p {
  font-size: 18px;
  font-weight: 600;
  color: orangered;
 }
`;

export const ImageWrapp = styled.div`
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
   height: 233px;
  }
  &:hover {
   transform: scale(1.05);
  }
 }
`;

export const Button = styled.button`
 padding: 8px 20px;
 border-radius: 4px;
 font-size: 14px;
 text-decoration: none;
 color: white;
 background-color: orangered;
 font-weight: 500;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
 @media screen and (min-width: 1200px) {
  font-size: 16px;
 }

 &:hover,
 &:focus {
  background-color: grey;
 }
`;

export const FavoriteWrapp = styled.div`
 position: absolute;
 top: 12px;
 right: 12px;
 width: 25px;
 cursor: pointer;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
`;
