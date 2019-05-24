import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserGrid.module.css';

import { UserCard } from '../../index';

const UserGrid = ({ users }) => (
  <div className={styles.grid}>
    { users.length ? users.map((user, index) => (<UserCard { ...user } key={index} />)) : false }
  </div>
);

UserGrid.propTypes = {
  users: PropTypes.array
};

UserGrid.defaultProps = {
  users: []
};

export default UserGrid;
