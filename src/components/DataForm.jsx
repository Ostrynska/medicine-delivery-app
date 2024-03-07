import React, { useRef } from 'react';

const DataForm = React.forwardRef((props, ref) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const addressRef = useRef('');

  const getData = () => {
    return {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value
    };
  };

  React.useImperativeHandle(ref, () => ({
    getData
  }));

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" ref={phoneRef} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea id="address" ref={addressRef} />
      </div>
    </form>
  );
});

export default DataForm;
