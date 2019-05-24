import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Navigation = ({ links }) => {
  const Nav = styled.ul`
    display: inline-flex;
    flex-direction: row;
  `;

  const NavItem = styled.li`
    position: relative;
    margin-left: 20px;
    
    :first-child {
      margin-left: 0;
    }
  `;

  const NavRouterLink = styled(NavLink)`
    display: inline-block;
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 4px;
      background-color: #9b59b6;
      transition: all 0.2s ease-in-out;
    }
    
    :hover {
      color: #9b59b6;
    }
    
    :hover::after {
      width: 100%;
    }

    &.active {
      color: #9b59b6;
    }
    
    &.active::after {
      width: 100%;
    }
  `;

  return (
    <Nav>
      { links.map((link, index) => (
        <NavItem key={index}>
          <NavRouterLink to={link.path} exact={true}>{link.title}</NavRouterLink>
        </NavItem>
      )) }
    </Nav>
  )
};

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navigation;
