import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalUserDetails.module.css';

import Flag from 'react-country-flag';

const ModalUserDetails = (props) => {
  const { firstName, lastName, state, city, street, postcode, phone, cell, country } = props;

  const flagProps = {
    code: country,
    styleProps: { width: '20px', height: '20px' },
    svg: true
  };

  const getName = () => {
    const name = [];
    if (firstName) name.push(firstName);
    if (lastName) name.push(lastName);

    return name.join(' ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.key}>First / Last name:</span>
        <span className={styles.value}>{getName()}</span>
      </div>
      { country ? (<div className={styles.row}>
        <span className={styles.key}>Country:</span>
        <span className={styles.value}><Flag { ...flagProps } /></span>
      </div>) : false }
      <div className={styles.row}>
        <span className={styles.key}>State:</span>
        <span className={styles.value}>{state}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>City:</span>
        <span className={styles.value}>{city}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>Street:</span>
        <span className={styles.value}>{street}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>Postcode:</span>
        <span className={styles.value}>{postcode}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>Phone:</span>
        <a className={styles.value} href={`tel:${phone}`}>{phone}</a>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>Cell:</span>
        <a className={styles.value} href={`tel:${cell}`}>{cell}</a>
      </div>
    </div>
  )
};

ModalUserDetails.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  cell: PropTypes.string,
  postcode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

// TODO: Add defaultProps

export default ModalUserDetails;
