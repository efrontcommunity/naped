import React from 'react';

// Next.js
import Link from 'next/link';

// Components
import Head from '../../../infra/components/Head';
import Menu from '../../../components/menu';

// Styled Components
import { ContainerAccount } from '../../../styles/account';
import { ContainerMaxWidth } from '../../../components/container/styles';

const Cadastrar = () => {
  return (
    <React.Fragment>
      <Head title="Cadastrar conta | Naped" />

      <Menu />

      <ContainerAccount>
        <ContainerMaxWidth>
          <div>
            <h3>Naped</h3>
            <h1>Faça uma conta</h1>

            <input type="text" placeholder="Digite seu usuário" />

            <input type="email" placeholder="Digite seu e-mail" />

            <input type="password" placeholder="Digite sua senha" />

            <input type="password" placeholder="Digite novamente sua senha" />

            <Link href="/conta/cadastrar">
              <a>
                <button>Criar conta</button>
              </a>
            </Link>

            <Link href="/conta/entrar">
              <a className="cta-link">Já tenho uma conta</a>
            </Link>
          </div>
        </ContainerMaxWidth>
      </ContainerAccount>
    </React.Fragment>
  );
};

export default Cadastrar;
