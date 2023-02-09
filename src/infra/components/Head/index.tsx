import React from 'react';

// Next.js
import NextHead from 'next/head';

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
