import React, { useState } from 'react';

import {
 FormContainer,
 FormGroup,
 Label,
 Input,
 TextArea,
} from './UserForm.styled';

const UserForm = React.forwardRef((props, ref) => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
 });

 const getData = () => {
  return formData;
 };

 const clearFormValues = () => {
  setFormData({
   name: '',
   email: '',
   phone: '',
   address: '',
  });
 };

 React.useImperativeHandle(ref, () => ({
  getData,
  clearFormValues,
 }));

 return (
  <FormContainer ref={ref}>
   <h2>Shipping Information</h2>
   <FormGroup>
    <Label htmlFor="name">Name</Label>
    <Input
     type="text"
     id="name"
     value={formData.name}
     onChange={e => setFormData({ ...formData, name: e.target.value })}
     required
    />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="email">Email</Label>
    <Input
     type="email"
     id="email"
     value={formData.email}
     onChange={e => setFormData({ ...formData, email: e.target.value })}
     required
    />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="phone">Phone</Label>
    <Input
     type="tel"
     id="phone"
     value={formData.phone}
     onChange={e => setFormData({ ...formData, phone: e.target.value })}
     required
    />
   </FormGroup>
   <FormGroup>
    <Label htmlFor="address">Address</Label>
    <TextArea
     id="address"
     value={formData.address}
     onChange={e => setFormData({ ...formData, address: e.target.value })}
     required
    />
   </FormGroup>
  </FormContainer>
 );
});

export default UserForm;
