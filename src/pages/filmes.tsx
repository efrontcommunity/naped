import React from 'react';

// Components
import Search from '../components/search';
import Head from '../infra/components/Head';

const Filmes = () => {
  return (
    <React.Fragment>
      <Head title="Filmes | Naped" />
      <Search
        name="Filmes"
        image="/filmes.jpg"
        typeUrl="Filmes"
      />
    </React.Fragment>
  );
};

export default Filmes;
