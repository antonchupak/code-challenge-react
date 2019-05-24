import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = ({ links }) => (
  <ul className={styles.navigation}>
    { links.map((link, index) => (
      <li className={styles.el} key={index}>
        <NavLink className={styles.link} activeClassName={styles.active} to={link.path} exact={true}>{link.title}</NavLink>
      </li>
    )) }
  </ul>
);

Navigation.propTypes = {
  links: PropTypes.array.isRequired
};

export default Navigation;
