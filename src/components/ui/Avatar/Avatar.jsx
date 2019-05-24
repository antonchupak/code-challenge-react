import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = ({ image, className }) => {
  const Container = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    background: #9b59b6;
    border-radius: 50%;
    overflow: hidden;
  `;

  const Img = styled.img`
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Container className={className}>
      {image ? (<Img src={image} alt='Avatar'/>) : false}
    </Container>
  )
};

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  image: '',
  className: ''
};

export default Avatar;
