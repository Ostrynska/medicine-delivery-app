import styled from 'styled-components';

export const Container = styled.div`
 max-width: 360px;
 margin: 0 auto;
 padding: 0 16px;
 @media screen and (min-width: 576px) {
  max-width: 540px;
 }
 @media screen and (min-width: 768px) {
  max-width: 720px;
 }
 @media screen and (min-width: 1200px) {
  max-width: 1200px;
 }
 @media screen and (min-width: 1400px) {
  max-width: 1400px;
 }
`;
