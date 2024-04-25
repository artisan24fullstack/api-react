import React, { useState, useEffect } from 'react';
import Header from '../layout/Header.jsx';
import SearchBar from '../layout/SearchBar.jsx';
import NewRelease from '../layout/NewRelease.jsx';

function HomePage() {




  return (
    <>
      <Header />
      <SearchBar />
      <NewRelease />
    </>
  );

}

export default HomePage;