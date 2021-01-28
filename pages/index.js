import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>{db.title}</title>

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
          content="Quiz sobre filmes de terror criado durante a 2° Imersão React da Alura"
        />

        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={db.bg} />
        <meta property="twitter:title" content="Horror Movies Quiz" />
        <meta
          property="twitter:description"
          content="Quiz sobre filmes de terror criado durante a 2° Imersão React da Alura"
        />
        <meta property="twitter:image" content={db.bg} />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Horror Movies</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <p>Teste os seus conhecimentos sobre o universo dos filmes de terror!</p>
                <Input
                  name="userName"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Pra começar, escreva seu nome aqui :)"
                  value={name}
                />
                <p>
                  Podemos entrar nos seus piores pesadelos,
                  {' '}
                  {name}
                  ?
                </p>
                <Button type="submit" disabled={name.length === 0}>
                  Estou sim!
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h2>Quizes do pessoal</h2>
              <p>🛠⛏Em Construção🔧🛠</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/jessicaMarquess/horror-quiz" />
      </QuizBackground>
    </>
  );
}
