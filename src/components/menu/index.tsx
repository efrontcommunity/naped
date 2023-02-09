import React, { useState } from 'react';

// Next.js
import Link from 'next/link';

// Styled Components
import { Container } from './styles';
import { ContainerMaxWidth } from '../container/styles';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    document.body.classList.toggle('overflow-body');
  };

  return (
    <Container>
      <ContainerMaxWidth>
        <section>
          <Link href="/">
            <a>
              <img src="/logo-naped.svg" alt="Ilustração erro 404" />
            </a>
          </Link>

          <div className={isActive ? 'bg-salmon' : 'container-mobile'}>
            <div className="open-mobile" onClick={handleClick}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <nav>
              <ul onClick={handleClick}>
                <li>
                  <div className="close-menu">
                    <div></div>
                    <div></div>
                  </div>
                </li>
                <li>
                  <Link href="/">
                    <a>Início</a>
                  </Link>
                </li>
                <li>
                  <Link href="/series">
                    <a>Séries</a>
                  </Link>
                </li>
                <li>
                  <Link href="/filmes">
                    <a>Filmes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/animes">
                    <a>Animes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/jogos">
                    <a>Jogos</a>
                  </Link>
                </li>

                <Link href="/conta/entrar">
                  <a>
                    <button>Minha conta</button>
                  </a>
                </Link>
              </ul>
            </nav>
          </div>

          <article>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>Início</a>
                  </Link>
                </li>
                <li>
                  <Link href="/series">
                    <a>Séries</a>
                  </Link>
                </li>
                <li>
                  <Link href="/filmes">
                    <a>Filmes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/animes">
                    <a>Animes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/jogos">
                    <a>Jogos</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href="/conta/entrar">
              <a>
                <button>Minha conta</button>
              </a>
            </Link>
          </article>
        </section>
      </ContainerMaxWidth>
    </Container>
  );
};

export default Menu;
