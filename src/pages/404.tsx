import React from 'react';

// Next.js
import Link from 'next/link';

// Components
import Menu from '../components/menu';
import Head from '../infra/components/Head';

// Styled Componentes
import { ContainerMaxWidth } from '../components/container/styles';
import { ContainerError } from '../styles/error404';

const Custom404 = () => {
  return (
    <React.Fragment>
      <Head title="Erro 404 | Naped" />

      <Menu />

      <ContainerError>
        <ContainerMaxWidth>
          <section>
            <div>
              <span>
                <h2>Tenho más notícias para você!</h2>
                <p>
                  A página que você está procurando pode ter sido removida ou
                  está temporariamente indisponível.
                </p>
                <Link href="/">
                  <a>
                    <button>Voltar para o início</button>
                  </a>
                </Link>
              </span>

              <div>
                <img src="/illustration-erro.svg" alt="Ilustração erro 404" />
                <h3>
                  Ups! Você chegou no espaço...
                  <br />
                  volte para o mundo nerd!
                </h3>
              </div>
            </div>
          </section>
        </ContainerMaxWidth>
      </ContainerError>
    </React.Fragment>
  );
};

export default Custom404;
