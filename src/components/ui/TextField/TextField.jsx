import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './TextField.module.css';

const TextField = ({ className, value, name, placeholder, onChange }) => {
  const onInputChange = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const value = event.currentTarget.value || '';
    onChange(value, name, event);
  };

  return (
    <div className={classnames(className, styles.field)}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onInputChange}
      />
    </div>
  )
};

TextField.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

TextField.defaultProps = {
  className: '',
  value: '',
  placeholder: 'Search',
  onChange: () => {}
};

export default TextField;
