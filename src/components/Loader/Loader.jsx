import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

function Loader() {
 return (
  <Container>
   <ClipLoader
    color="orangered"
    loading="true"
    size={130}
    aria-label="Loading Spinner"
    data-testid="loader"
   />
  </Container>
 );
}

export default Loader;
