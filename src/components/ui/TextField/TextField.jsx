import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextField = ({  className, value, name, placeholder, onChange }) => {
  const Container = styled.div`
    position: relative;
    width: 400px;
  `;

  const Input = styled.input`
    padding: 0 14px;
    height: 34px;
    width: 100%;
    line-height: 50px;
    border-radius: 4px;
    border: 2px solid transparent;

    font-size: 14px;
    box-sizing: border-box;

    :focus {
      outline: none;
      box-shadow: 0 0 8px #9b59b6;
      border-color: #9b59b6;

    }
  `;

  const onInputChange = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const value = event.currentTarget.value || '';
    onChange(value, name, event);
  };

  return (
    <Container>
      <Input
        className={className}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onInputChange}
      />
    </Container>
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
