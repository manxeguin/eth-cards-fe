import React from 'react';
import { Helmet } from 'react-helmet';

import CardList from '../../components/CardList';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js application homepage" />
      </Helmet>
      <div>
        <section>
          <div className="container is-space-2xl-top">
            <div className="slide-container is-space-2xl-top">
              <div className="wrapper">
                <CardList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default HomePage;
