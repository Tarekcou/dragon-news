import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const Homelayout = () => {
  return (<>
    <header>
      <Header> </Header>
      <section>
        <LatestNews />
      </section>
    </header>
    <nav></nav>

    <main></main>

    </>
  );
}

export default Homelayout;
