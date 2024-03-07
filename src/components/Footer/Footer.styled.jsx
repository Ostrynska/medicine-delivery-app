import styled from 'styled-components';

export const FooterWrapp = styled.footer`
 margin-bottom: auto;
 margin-top: 10px;
 text-align: center;
 font-size: medium;
 color: black;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 p {
  @media screen and (max-width: 436px) {
   font-size: 14px;
  }
 }
`;
