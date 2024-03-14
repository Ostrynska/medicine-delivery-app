import styled from 'styled-components';

export const SortForm = styled.form`
 width: 100%;
 position: relative;
 display: flex;
 align-items: center;
 gap: 14px;
 margin-bottom: 20px;
 flex-direction: column;
 @media screen and (min-width: 576px) {
  gap: 10px;
 }
 @media screen and (min-width: 1200px) {
  justify-content: space-between;
  margin-bottom: 40px;
  flex-direction: row;
  gap: 24px;
 }
`;

export const InputIcon = styled.img`
 position: absolute;
 top: 12px;
 left: 10px;
 @media screen and (min-width: 1200px) {
  top: 33%;
  left: 10px;
 }
`;

export const Input = styled.input`
 width: 100%;
 padding: 8px 8px 8px 40px;
 background-color: #f0eded;
 border: none;
 border-radius: 8px;
 @media screen and (min-width: 1200px) {
  width: 420px;
 }
`;

export const ContainerSortBtn = styled.div`
 display: flex;
 gap: 14px;
 @media screen and (min-width: 1200px) {
  gap: 4px;
 }
`;

export const SortBtn = styled.button`
 padding: 8px;
 border-radius: 8px;
 background-color: #f0eded;
 color: grey;
 &:hover,
 &:focus {
  background-color: lightgrey;
 }
`;
