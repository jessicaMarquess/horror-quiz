/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

export default function Quiz() {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    setName(router.query.name);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Um instante,
              {' '}
              {name}
              !
              Freddy Krueger ainda está atormendando alguém nos sonhos, quando ele estiver
              aqui voltaremos.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jessicaMarquess/horror-quiz" />
    </QuizBackground>
  );
}
