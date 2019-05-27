import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

import Flag from 'react-country-flag';
import { Avatar, Button } from './../../index';

const UserCard = ({ firstName, lastName, userName, email, image, index, country, onDetailsClick }) => {
  const flagProps = {
    code: country,
    styleProps: { marginLeft: '6px', top: '-5px', width: '14px', height: '14px' },
    svg: true
  };

  return (
    <div className={styles.card}>
      <div>
        <Avatar image={image} />
      </div>
      <div className={styles.data}>
        <p className={styles.generalName}>
          <span className={styles.text}>{firstName}</span>
          <span className={styles.text}>{lastName}</span>
          { country ? <Flag { ...flagProps } /> : false }
        </p>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.email}>{email}</p>
      </div>
      <Button onClick={() => onDetailsClick(index)}>Details</Button>
    </div>
  );
}

UserCard.propTypes = {
  index: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  country: PropTypes.string,
  onDetailsClick: PropTypes.func
};

UserCard.defaultProps = {
  index: 0,
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  image: '',
  country: '',
  onDetailsClick: () => {}
};

export default UserCard;
