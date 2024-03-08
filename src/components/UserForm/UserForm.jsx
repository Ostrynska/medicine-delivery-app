import React, { useRef } from 'react';

import {
 FormContainer,
 FormGroup,
 Label,
 Input,
 TextArea,
} from './UserForm.styled';

const UserForm = React.forwardRef((props, ref) => {
 const nameRef = useRef('');
 const emailRef = useRef('');
 const phoneRef = useRef('');
 const addressRef = useRef('');

 const getData = () => {
  return {
   name: nameRef.current.value,
   email: emailRef.current.value,
   phone: phoneRef.current.value,
   address: addressRef.current.value,
  };
 };

 React.useImperativeHandle(ref, () => ({
  getData,
 }));

 return (
  <FormContainer ref={formDataRef}>
   <h2>Shipping Information</h2>
   <FormGroup>
    <Label htmlFor="name">Name</Label>
    <Input type="text" id="name" ref={nameRef} required />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" ref={emailRef} required />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="phone">Phone</Label>
    <Input type="tel" id="phone" ref={phoneRef} required />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="address">Address</Label>
    <TextArea id="address" ref={addressRef} required />
   </FormGroup>
  </FormContainer>
 );
});

export default UserForm;
