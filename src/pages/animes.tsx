import React from 'react';

// Components
import Search from '../components/search';
import Head from '../infra/components/Head';

const Animes = () => {
  return (
    <React.Fragment>
      <Head title="Animes | Naped" />
      <Search
        name="Animes"
        image="/animes.jpg"
        typeUrl="Animes"
      />
    </React.Fragment>
  );
};

export default Animes;
