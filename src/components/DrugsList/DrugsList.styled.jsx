import styled from 'styled-components';

export const DrugsWrapp = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 width: 855px;
 overflow-y: scroll;
 padding: 1.5rem 0 0 0;

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
  justify-content: space-between;
  gap: 30px;
 }
`;
