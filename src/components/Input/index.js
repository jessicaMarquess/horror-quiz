/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.outher};
  font-weight: 400;
  line-height: 1;
  border: none;
  border-radius: .2rem;
`;

// eslint-disable-next-line react/prop-types
function Input({ onChange, placeholder, ...props}) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
  name: '',  
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


export default Input;
