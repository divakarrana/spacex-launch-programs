import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <title>SpaceX Launch Data</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Rockets Information and Launch/Land status by SpaceX"
      />

      <link
        rel="shortcut icon"
        href={`${process.env.PUBLIC_URL}/favicon.ico?v1`}
      />
    </Helmet>
  );
};

export default Head;
