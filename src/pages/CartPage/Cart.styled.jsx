import styled from 'styled-components';

export const CartWrapp = styled.div`
 width: 100%;
 padding-bottom: 8px;
 display: flex;
 justify-content: space-between;
`;

export const SubmitWrapp = styled.div`
 display: flex;
 justify-content: flex-end;
`;

export const Button = styled.button`
 cursor: pointer;

 padding: 18px 84px;
 text-decoration: none;
 color: orangered;
 background-color: white;
 font-weight: 500;
 font-size: 18px;
 border: 2px solid orangered;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;

 &:hover,
 &:focus {
  background-color: orangered;
  color: white;
 }
`;