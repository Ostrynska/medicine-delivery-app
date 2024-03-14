import styled from 'styled-components';

export const DrugsWrapp = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 overflow-y: scroll;
 padding: 1.5rem 0 0 0;

 @media screen and (min-width: 1200px) {
  width: 855px;
 }
 @media screen and (min-width: 1400px) {
  width: 975px;
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
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media screen and (min-width: 576px) {
   gap: 18px;
  }
  @media screen and (min-width: 1200px) {
   gap: 30px;
   justify-content: space-between;
  }
  @media screen and (min-width: 1400px) {
   justify-content: center;
  }
 }
`;
