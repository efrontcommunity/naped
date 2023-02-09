import React from 'react';

// Interfaces TypeScript
import { IContent } from '../../../types/interfaces.types';

// Next.js
import Link from 'next/link';

// Styled Components
import { ContainerRelease } from './styles';

const Release = ({ content }: IContent) => {
  return (
    <ContainerRelease>
      <span>{content.category}</span>
      <h2>{content.title}</h2>
      <p>{content.resume}</p>
      <div>
        <Link href={'/posts/' + content.id}>
          <a>Leia mais</a>
        </Link>
      </div>
    </ContainerRelease>
  );
};

export default Release;
