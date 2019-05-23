import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navigation = ({ links }) => {
  return (
    <ul>
      { links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      )) }
    </ul>
  )
};

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navigation;
