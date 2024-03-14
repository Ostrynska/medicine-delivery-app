import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapp = styled.header`
 display: flex;
 flex-direction: column;
 gap: 12px;
 padding: 20px;
 margin-bottom: 16px;
 border-bottom: 1px solid black;
 @media screen and (min-width: 576px) {
  padding: 8px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }
 > nav {
  display: flex;
 }
`;

export const Logo = styled(NavLink)`
 font-weight: 700;
 font-size: 28px;
 margin: 0;
 @media screen and (min-width: 576px) {
  font-size: 26px;
 }
 @media screen and (min-width: 768px) {
  font-size: 30px;
 }
`;

export const Link = styled(NavLink)`
 display: flex;
 align-items: center;
 padding: 4px 8px;
 border-radius: 4px;
 text-decoration: none;
 color: black;
 font-weight: 500;
 transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1) 0s;
 @media screen and (min-width: 576px) {
  padding: 8px 6px;
 }
 @media screen and (min-width: 768px) {
  padding: 8px 16px;
 }

 &:hover,
 &:focus {
  color: orangered;
 }

 &.active {
  color: white;
  background-color: orangered;
 }
`;
