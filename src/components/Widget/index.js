import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,h2,h3{
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p{
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  & > *:first-child{
    margin-top: 0;
  }
  
  & > *:last-child{
    margin-bottom: 0;
  }
  
  ul{
    list-style: none;
    padding: 0;
  }
`;

Widget.Input = styled.input`
  font-family: 'Lato', sans-serif;
  width: 100%;
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.outher};
  font-weight: bold;
  border: none;
  border-radius: .2rem;
`;
Widget.Button = styled.button`
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
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default Widget;
