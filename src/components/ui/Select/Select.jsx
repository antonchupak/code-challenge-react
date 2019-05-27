import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Select.module.css';

const Select = ({ className, label, options, name, value, onChange }) => {
  const onChangeSelect = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const value = event.currentTarget.value || '';
    onChange(value, name, event);
  };

  return (
    <div className={classnames(styles.container, className)}>
      { label ? (<label className={styles.label} htmlFor={name}>{label}</label>) : false }
      <select className={styles.select} name={name} value={value} onChange={onChangeSelect}>
        { options.map((option) => (<option value={option} key={option}>{option}</option>)) }
      </select>
    </div>
  )
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  options: [],
  name: '',
  value: '',
  onChange: () => {}
};

export default Select;
