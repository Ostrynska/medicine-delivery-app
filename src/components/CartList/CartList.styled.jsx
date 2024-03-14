import styled from 'styled-components';
import { ImageWrapp, PriceWrapp } from '../DrugsItem/DrugsItem.styled';

export const Price = styled(PriceWrapp)`
 align-items: baseline;
 @media screen and (min-width: 576px) {
  align-items: center;
 }
`;

export const Image = styled(ImageWrapp)`
 width: 150px;
 height: 100px;
 > img {
  height: 100px;
  object-fit: contain;
 }
`;

export const CartWrapp = styled.div`
 padding: 1rem 0;
 width: 100%;
 @media screen and (min-width: 576px) {
  padding: 1.5rem 0;
 }
 @media screen and (min-width: 1200px) {
  margin-left: 120px;
  width: 696px;
 }
 @media screen and (min-width: 1400px) {
  width: 868px;
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
  margin-top: 34px;
  height: 350px;
  overflow-y: scroll;
  @media screen and (min-width: 576px) {
   height: 510px;
  }
  > li {
   display: flex;

   padding: 1.5rem;
   border: 1px solid rgba(0, 0, 0, 0.1);
   max-height: 480px;
   max-width: 100%;
   background-color: white;
   transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
   cursor: pointer;
   &:not(:last-child) {
    margin-bottom: 10px;
   }
   &:hover,
   &:focus {
    border: 1px solid orangered;
   }
  }
 }
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 padding: 0 0 0 18px;
 width: 100%;
 justify-content: space-evenly;
 @media screen and (min-width: 576px) {
  padding: 0 0 0 28px;
 }
 > h3 {
  text-transform: capitalize;
 }
 > p {
  font-size: 14px;
 }
`;

export const Text = styled.h4`
 font-size: 16px;
 font-weight: 300;
 color: orangered;
`;

export const ButtonWrapp = styled.div`
 display: flex;
 justify-content: flex-end;
`;

export const Button = styled.button`
 cursor: pointer;

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

export const ButtonDelete = styled(Button)`
 background-color: grey;
 color: white;

 &:hover,
 &:focus {
  background-color: orangered;
 }
`;

export const Input = styled.input`
 margin-left: 30px;
 width: 70px;
 padding: 8px 12px;
 border-radius: 8px;
 border: 1px solid #ccc;
 color: rgb(63, 63, 63);

 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
 @media screen and (min-width: 576px) {
  margin-right: 10px;
  margin-left: 20px;
  width: 90px;
 }
 &:hover,
 &:focus {
  border-color: orangered;
 }
`;

export const InputWrapp = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 @media screen and (min-width: 576px) {
  flex-direction: row;
  gap: 0px;
 }
`;

export const PriceText = styled.p`
 margin: 56px 0 0 0;

 font-size: 18px;
 font-weight: 500;
 @media screen and (min-width: 576px) {
  margin: 46px 0 0 0;
 }
 @media screen and (min-width: 768px) {
  margin: 56px 0 0 0;
 }
 > span {
  color: orangered;
 }
`;
