import React, { useState, useEffect } from 'react';

// Interfaces TypeScript
import { IPost, ISearch } from '../../types/interfaces.types';

// Next.js
import Link from 'next/link';

// Components
import Footer from '../footer';
import Menu from '../menu';

// Styled Components
import { ContainerMaxWidth } from '../container/styles';
import { ContainerSearch } from './styles';
import { ContainerRecent } from '../posts/recents/styles';

// API
import api from '../../services/api';

const Search = ({ name, image, typeUrl }: ISearch) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    api.get(`/posts?category=${typeUrl}`).then(response => {
      setMain(response.data);
    });
  }, []);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);

    const foundItems: string[] = main.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setResult(foundItems);
  };

  return (
    <React.Fragment>
      <Menu />

      <ContainerSearch>
        <ContainerMaxWidth>
          <div className="banner-search">
            <div className="gradient"></div>
            <img src={image} alt="Banner sobre a aba" />
            <div className="text-gradient">
              <h2>{name}</h2>
              <p>
                O Naped pode ser sua fonte de informações sobre o mundo nerd e
                outros assuntos relacionados.
              </p>
            </div>
          </div>

          <input
            type="text"
            onChange={inputHandler}
            placeholder="Quer ajuda na procura? Pesquise aqui"
          />

          <section className="container-search">
            {query && result.length > 0 ? (
              result.map((content: IPost) => (
                <ContainerRecent key={content.id}>
                  <img src={content.imageUrl} alt={content.title} />

                  <div>
                    <span>{content.category}</span>
                    <h2>{content.title}</h2>
                    <p>{content.resume}</p>
                    <Link href={'/posts/' + content.id}>
                      <a>Ler mais</a>
                    </Link>
                  </div>
                </ContainerRecent>
              ))
            ) : (
              <h2 className="warning-search">
                Ops, não encontramos nada! Tente pesquisar algumas coisa.
              </h2>
            )}
          </section>
        </ContainerMaxWidth>
      </ContainerSearch>
      <Footer />
    </React.Fragment>
  );
};

export default Search;
