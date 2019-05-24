import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Avatar.module.css';

const Avatar = ({ image, className }) => {
  return (
    <div className={classnames(styles.avatar ,className)}>
      {image ? (<img className={styles.image} src={image} alt='Avatar'/>) : false}
    </div>
  )
};

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  image: '',
  className: ''
};

export default Avatar;
