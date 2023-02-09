import React from 'react';

// Interfaces TypeScript
import { IContent } from '../../../types/interfaces.types';

// Next.js
import Link from 'next/link';

// Styled Components
import { Container } from './styles';

const Highlights = ({ content }: IContent) => {
  return (
    <Container>
      <Link href={'/posts/' + content.id}>
        <a>
          <article>
            <div className="gradient"></div>
            <img src={content.imageUrl} alt={content.title} />
            <div className="highlights-texts">
              <span>{content.category}</span>
              <h2>{content.title}</h2>
            </div>
          </article>
        </a>
      </Link>
    </Container>
  );
};

export default Highlights;
