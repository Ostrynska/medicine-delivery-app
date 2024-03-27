import styled from 'styled-components';

export const ErrorText = styled.p`
 color: orangered;
 font-size: 12px;
`;

export const FormContainer = styled.form`
 width: 100%;
 padding: 1.5rem 0;
 @media screen and (min-width: 1200px) {
  width: 350px;
 }
 > h2 {
  width: 200px;
  padding: 0 0 5px 0;
  text-transform: uppercase;
  color: orangered;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Sulphur Point', sans-serif;
 }
`;

export const FormGroup = styled.div`
 margin-top: 5px;
 transition: all 250ms ease-in-out 0s;
 @media screen and (min-width: 1200px) {
  margin-top: 20px;
 }
 &:hover,
 &:focus {
  color: orangered;
 }
`;

export const Label = styled.label`
 font-weight: 500;
 margin-bottom: 8px;
 font-size: 16px;
 font-weight: 500;
 line-height: 1;
 letter-spacing: 0.4px;
`;

export const Input = styled.input`
 width: 100%;
 padding: 10px 12px;
 border-radius: 8px;
 border: 1px solid #ccc;
 color: rgb(63, 63, 63);
 font-size: 16px;
 font-weight: 400;
 line-height: 1.5;
 transition: all 250ms ease-in-out 0s;
 &:hover,
 &:focus {
  border: 1px solid orangered;
  color: orangered;
 }
`;

export const TextArea = styled.textarea`
 width: 100%;
 font-size: 16px;
 border: 1px solid #ccc;
 border-radius: 4px;
 cursor: pointer;

 resize: none;
 min-height: 100px;
 background-color: transparent;
 color: rgb(0, 0, 0);
 line-height: 1.5;
 padding: 1.375rem 0.75rem;
 font-family: Raleway, sans-serif;
 transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
 &:hover,
 &:focus {
  border: 1px solid orangered;
 }
`;
