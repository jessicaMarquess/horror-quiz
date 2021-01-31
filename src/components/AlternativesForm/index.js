/* eslint-disable linebreak-style */
import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        color: #fff;
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: #fff;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;