import styled from 'styled-components';

export const CartWrapp = styled.div`
 margin-left: 120px;
 overflow-y: scroll;
 padding: 1.5rem 0;
 width: 696px;

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
 padding: 0 0 0 28px;
 width: 100%;
 justify-content: space-evenly;
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
 margin-left: 20px;
 width: 90px;
 padding: 8px 12px;
 border-radius: 8px;
 border: 1px solid #ccc;
 color: rgb(63, 63, 63);
 margin-right: 10px;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;

 &:hover,
 &:focus {
  border-color: orangered;
 }
`;

export const InputWrapp = styled.div``;

export const PriceText = styled.p`
 margin: 56px 0 0 0;
 font-size: 18px;
 font-weight: 500;
 > span {
  color: orangered;
 }
`;
