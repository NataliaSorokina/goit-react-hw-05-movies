import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

function ReactLoader() {
  return (
    <LoaderContainer>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={5000}
      />
    </LoaderContainer>
  );
}

export default ReactLoader;
