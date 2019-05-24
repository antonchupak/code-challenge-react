import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, className, onClick }) => {
  const Btn = styled.button`
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 20px;
    padding: 0 10px;
    color: white;
    background-color: #9b59b6;
    border: none;
    border-radius: 4px;
    font-wight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    :hover {
      background-color: rgba(155, 89, 182, 0.8);
    }
    
    :focus {
      outline: none;
    }
    
    :active {
      background-color: rgba(155, 89, 182, 0.9);
    }
  `;
  return (
    <Btn className={className} onClick={onClick}>
      {children}
    </Btn>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
