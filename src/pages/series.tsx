import React from 'react';

// Components
import Search from '../components/search';
import Head from '../infra/components/Head';

const Séries = () => {
  return (
    <React.Fragment>
      <Head title="Séries | Naped" />
      <Search
        name="Séries"
        image="/series.webp"
        typeUrl="Séries"
      />
    </React.Fragment>
  );
};

export default Séries;
