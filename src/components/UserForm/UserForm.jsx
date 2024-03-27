import React, { useState } from 'react';

import * as Yup from 'yup';

import { InputsSchema } from '../../validation/inputsSchema';

import {
 FormContainer,
 FormGroup,
 Label,
 Input,
 TextArea,
 ErrorText,
} from './UserForm.styled';

const UserForm = React.forwardRef((props, ref) => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
 });

 const [errors, setErrors] = useState({});

 const validationSchema = InputsSchema;

 const handleBlur = async e => {
  const { id, value } = e.target;
  try {
   await Yup.reach(validationSchema, id).validate(value);
   setErrors({ ...errors, [id]: '' });
  } catch (error) {
   setErrors({ ...errors, [id]: error.message });
  }
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
     onBlur={handleBlur}
     onChange={e => setFormData({ ...formData, name: e.target.value })}
     required
    />
    {errors.name && <ErrorText>{errors.name}</ErrorText>}
   </FormGroup>
   <FormGroup>
    <Label htmlFor="email">Email</Label>
    <Input
     type="email"
     id="email"
     value={formData.email}
     onBlur={handleBlur}
     onChange={e => setFormData({ ...formData, email: e.target.value })}
     required
    />
    {errors.email && <ErrorText>{errors.email}</ErrorText>}
   </FormGroup>
   <FormGroup>
    <Label htmlFor="phone">Phone</Label>
    <Input
     type="tel"
     id="phone"
     value={formData.phone}
     onBlur={handleBlur}
     onChange={e => setFormData({ ...formData, phone: e.target.value })}
     required
    />
    {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
   </FormGroup>
   <FormGroup>
    <Label htmlFor="address">Address</Label>
    <TextArea
     id="address"
     value={formData.address}
     onBlur={handleBlur}
     onChange={e => setFormData({ ...formData, address: e.target.value })}
     required
    />
    {errors.address && <ErrorText>{errors.address}</ErrorText>}
   </FormGroup>
  </FormContainer>
 );
});

export default UserForm;
