import React from 'react';

// Interfaces TypeScript
import { IContent } from '../../../types/interfaces.types';

// Next.js
import Link from 'next/link';

// Styled Components
import { ContainerRecent } from './styles';

const Recent = ({ content }: IContent) => {
  return (
    <ContainerRecent>
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
  );
};

export default Recent;
