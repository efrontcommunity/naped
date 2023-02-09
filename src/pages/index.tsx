import React, { useState, useEffect } from 'react';

// Next.js
import Head from '../infra/components/Head';

// Components
import Highlights from '../components/posts/highlights';
import Menu from '../components/menu';
import Recents from '../components/posts/recents';
import Releases from '../components/posts/releases';
import Footer from '../components/footer';

// Styled Componentes
import { ContainerMaxWidth } from '../components/container/styles';

// API
import api from '../services/api';

const Home = () => {
  const [main, setMain] = useState([]);
  const [recent, setRecent] = useState([]);
  const [release, setRelease] = useState([]);

  useEffect(() => {
    api.get('/posts?star=5').then(response => {
      setMain(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/posts?_sort=date&_order=desc&_limit=3').then(response => {
      setRecent(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/posts?_sort=date&_order=desc&_limit=2').then(response => {
      setRelease(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Head title="Início | Naped" />

      <Menu />

      <ContainerMaxWidth>
        <main>
          <section className="presentation">
            <h1>
              Mundo nerd?
              <br />
              Naped!
            </h1>
            <p>
              O Naped pode ser sua fonte de informações sobre o mundo nerd e
              outros assuntos relacionados.
            </p>
          </section>

          <section className="highlights">
            {main.map(item => {
              return <Highlights key={item.id} content={item} />;
            })}
          </section>

          <section className="recent">
            <h2>Notícias mais recentes</h2>
            <div className="recent-container">
              {recent.map(item => {
                return <Recents key={item.id} content={item} />;
              })}
            </div>
          </section>

          <section className="release">
            <h2>Lançamentos</h2>
            <div className="release-container">
              {release.map(item => {
                return <Releases key={item.id} content={item} />;
              })}
            </div>
          </section>
        </main>
      </ContainerMaxWidth>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
