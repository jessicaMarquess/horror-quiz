import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  float: right;

  @media screen and(max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Horror Movies</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre o universo dos filmes de terror!</p>
            <input type="text" placeholder='Digite seu nome aqui'/>
          </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h2>Quizes do pessoal</h2>
              <p>🛠⛏Em Construção⚒🔧</p>
            </Widget.Content>
          </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="#"/>
    </QuizBackground>
  );
};
