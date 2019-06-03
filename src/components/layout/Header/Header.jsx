import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

import { Navigation, TextField } from '../../index';

const Header = ({ links, searchProps }) => {
  const textFieldProps = {
    ...searchProps,
    placeholder: 'Search user by First / Last name'
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <TextField { ...textFieldProps } />
      </div>
      <Navigation links={links} />
    </header>
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
