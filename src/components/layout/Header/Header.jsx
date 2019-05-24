import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Navigation, TextField } from '../../index';

const Header = ({ links, searchProps }) => {
  const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px; 
    padding: 0 20px;
    background-color: #95a5a6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 2;
    box-shadow: 0px 4px 8px 0px rgba(149,165,166,1);
  `;

  const textFieldProps = {
    ...searchProps,
    placeholder: 'Search user by First / Last name',
  };

  return (
    <Header>
      <TextField { ...textFieldProps } />
      <Navigation links={links} />
    </Header>
  )
};

Header.propTypes = {
  links: PropTypes.array,
  searchProps: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  })
};

export default Header;
