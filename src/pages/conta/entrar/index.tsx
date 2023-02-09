import React from 'react';

// Next.js
import Link from 'next/link';

// Components
import Menu from '../../../components/menu';
import Head from '../../../infra/components/Head';

// Styled Components
import { ContainerMaxWidth } from '../../../components/container/styles';
import { ContainerAccount } from '../../../styles/account';

const Entrar = () => {
  return (
    <React.Fragment>
      <Head title="Entrar na conta | Naped" />

      <Menu />

      <ContainerAccount>
        <ContainerMaxWidth>
          <div>
            <h3>Naped</h3>
            <h1>Entrar na conta</h1>

            <input type="text" placeholder="Digite seu usuário" />

            <input type="password" placeholder="Digite sua senha" />

            <Link href="/conta/entrar">
              <a>
                <button>Logar na conta</button>
              </a>
            </Link>

            <Link href="/conta/cadastrar">
              <a className="cta-link">Criar uma conta</a>
            </Link>
          </div>
        </ContainerMaxWidth>
      </ContainerAccount>
    </React.Fragment>
  );
};

export default Entrar;
