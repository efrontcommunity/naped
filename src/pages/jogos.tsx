import React from 'react';

// Components
import Search from '../components/search';
import Head from '../infra/components/Head';

const Jogos = () => {
  return (
    <React.Fragment>
      <Head title="Jogos | Naped" />
      <Search
        name="Jogos"
        image="/jogos.jpg"
        typeUrl="Jogos"
      />
    </React.Fragment>
  );
};

export default Jogos;
