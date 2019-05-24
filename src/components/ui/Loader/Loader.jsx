import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  const loaderAnimation = keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;

  const Container = styled.div`
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
  `;

  const Loading = styled.span`
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 20px;
    border: 6px solid rgba(155, 89, 182, 0.6);
    border-right-color: #9b59b6;
    border-radius: 50%;
    animation: ${loaderAnimation} 1.5s infinite linear;
    box-sizing: border-box;
  `;

  return (
    <Container>
      <Loading />
    </Container>
  )
};

export default Loader;
