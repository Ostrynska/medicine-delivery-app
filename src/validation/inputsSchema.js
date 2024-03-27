import * as Yup from 'yup';

export const InputsSchema = Yup.object().shape({
 name: Yup.string()
  .required('Please enter your name')
  .min(3, 'Name must be at least 3 characters')
  .max(20, 'Name must not exceed 20 characters'),
 email: Yup.string().email('Invalid email').required('Please enter your email'),
 phone: Yup.string()
  .matches(/^[0-9]+$/, 'Phone number must contain only digits')
  .min(10, 'Phone number must be at least 10 digits')
  .max(15, 'Phone number must not exceed 15 digits')
  .required('Please enter your phone number'),
 address: Yup.string()
  .required('Please enter your address')
  .min(5, 'Address must be at least 5 characters')
  .max(100, 'Address must not exceed 100 characters'),
});
