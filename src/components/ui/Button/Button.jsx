import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={classnames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
