import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

import { Avatar, Button } from './../../index';

const UserCard = ({ firstName, lastName, userName, email, image }) => (
  <div className={styles.card}>
    <div>
      <Avatar image={image} />
    </div>
    <div className={styles.data}>
      <p className={styles.generalName}>
        <span className={styles.text}>{firstName}</span>
        <span className={styles.text}>{lastName}</span>
      </p>
      <p className={styles.userName}>{userName}</p>
      <p className={styles.email}>{email}</p>
    </div>
    <Button>Details</Button>
  </div>
);

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string
};

UserCard.defaultProps = {
  firstName: '',
  lastName: '',
  userName: '',
  email: ''
};

export default UserCard;
