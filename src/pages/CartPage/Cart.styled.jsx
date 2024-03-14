import styled from 'styled-components';

export const CartWrapp = styled.div`
 width: 100%;
 min-height: 88vh;
 padding-bottom: 8px;
 @media screen and (min-width: 1200px) {
  display: flex;
  justify-content: space-between;
 }
`;

export const SubmitWrapp = styled.div`
 display: flex;
 justify-content: center;
 @media screen and (min-width: 576px) {
  justify-content: flex-end;
 }
`;

export const Button = styled.button`
 cursor: pointer;
 padding: 12px 64px;
 text-decoration: none;
 color: orangered;
 background-color: white;
 font-weight: 500;
 font-size: 16px;
 border: 2px solid orangered;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
 @media screen and (min-width: 768px) {
  padding: 18px 84px;
  font-size: 18px;
 }
 &:hover,
 &:focus {
  background-color: orangered;
  color: white;
 }
`;
