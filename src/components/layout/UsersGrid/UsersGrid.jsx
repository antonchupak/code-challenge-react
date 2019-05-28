import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserGrid.module.css';

import { UserCard } from '../../index';

const UserGrid = ({ users, onUserClick }) => (
  <div className={styles.grid}>
    { users.map((user, index) => {
      const props = {
        ...user,
        index,
        onDetailsClick: onUserClick
      };

      return (<UserCard { ...props } key={user.id} />)
    })}
  </div>
);

UserGrid.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func
};

UserGrid.defaultProps = {
  users: [],
  onUserClick: () => {}
};

export default UserGrid;
