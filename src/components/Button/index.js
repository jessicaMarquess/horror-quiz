/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
font-family: 'Lato', sans-serif;
width: 100%;
display: inline-block;
margin-top: 25px;
background-color:${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.outher};
padding: 0.8em;
border: none;
border-radius: 3px;
display: block;
cursor: pointer;
letter-spacing: 1.4px;
text-transform: uppercase;
font-weight: bold;
transition: .3s;

&:hover,
&:focus {
  opacity: .8;
}

&:disabled {
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: not-allowed;
  opacity: 0.8;
}
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
