import React from 'react';

// Next.js
import Link from 'next/link';

// Styled Components
import { ContainerMaxWidth } from '../container/styles';
import { ContainerFooter } from './styles';

const Footer = () => {
  return (
    <React.Fragment>
      <ContainerFooter>
        <ContainerMaxWidth>
          <section>
            <p>
              Copyright © 2022
              <Link href="https://iuricode.com">
                <a target="_blank">iuricode.com.</a>
              </Link>
              Todos os direitos reservados.
            </p>

            <div>
              <p>Powered by</p>
              <img src="/iuricode.svg" alt="Logo iuricode" />
            </div>
          </section>
        </ContainerMaxWidth>
      </ContainerFooter>
    </React.Fragment>
  );
};

export default Footer;
