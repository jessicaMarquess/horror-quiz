import styled from 'styled-components';
import Head from "next/head";
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
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
    <>
      <Head>
        <title>Horror Movies Quiz</title>
        <meta name="title" content="Horror Movies Quiz" />
        <meta
          name="description"
          content="Teste seus conhecimentos dos maiores ícones dos filmes de terror!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vercel.com/jessicamarquess/horror-quiz"
        />
        <meta property="og:title" content="Horror Movies Quiz" />
        <meta
          property="og:description"
          content="Quiz sobre fimes de terror criado durante a 2° Imersão React da Alura"
        />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={db.bg} />
        <meta property="twitter:title" content="Horro Movies Quiz" />
        <meta
          property="twitter:description"
          content="Quiz sobre fimes de terror criado durante a 2° Imersão React da Alura"
        />
        <meta property="twitter:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <QuizLogo />  
          <Widget>
            <Widget.Header>
              <h1>Horror Movies</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste os seus conhecimentos sobre o universo dos filmes de terror!</p>
              <Widget.Input placeholder='Digite seu nome :)  ' type='text'/>
              <Widget.Button>Jogar!</Widget.Button>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h2>Quizes do pessoal</h2>
              <p>🛠⛏Em Construção🔧🛠</p>
            </Widget.Content>
          </Widget>
        <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/jessicaMarquess/horror-quiz"/>
      </QuizBackground>
    </>
  );
}
