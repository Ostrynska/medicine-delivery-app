import React, { useState } from 'react';

import {
 FormContainer,
 FormGroup,
 Label,
 Input,
 TextArea,
 ErrorMessage,
} from './UserForm.styled';

const UserForm = React.forwardRef((props, ref) => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
 });

 const [errors, setErrors] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
 });

 const validateForm = () => {
  let valid = true;
  const newErrors = { ...errors };

  // Validate Name
  if (!formData.name.trim()) {
   newErrors.name = 'Name is required';
   valid = false;
  } else {
   newErrors.name = '';
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
   newErrors.email = 'Email is required';
   valid = false;
  } else if (!emailRegex.test(formData.email)) {
   newErrors.email = 'Invalid email address';
   valid = false;
  } else {
   newErrors.email = '';
  }

  // Validate Phone
  const phoneRegex = /^\d{10}$/;
  if (!formData.phone.trim()) {
   newErrors.phone = 'Phone is required';
   valid = false;
  } else if (!phoneRegex.test(formData.phone)) {
   newErrors.phone = 'Invalid phone number';
   valid = false;
  } else {
   newErrors.phone = '';
  }

  // Validate Address
  if (!formData.address.trim()) {
   newErrors.address = 'Address is required';
   valid = false;
  } else {
   newErrors.address = '';
  }

  setErrors(newErrors);
  return valid;
 };

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
    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
    {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
   </FormGroup>
   <FormGroup>
    <Label htmlFor="address">Address</Label>
    <TextArea
     id="address"
     value={formData.address}
     onChange={e => setFormData({ ...formData, address: e.target.value })}
     required
    />
    {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
   </FormGroup>
  </FormContainer>
 );
});

export default UserForm;
