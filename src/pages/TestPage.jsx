import React, { useState, useEffect } from 'react';
import Header from '../layout/Header.jsx';
import GenresData from '../layout/Genres.jsx';

function TestPage() {




  return (
    <>
      <Header />
      <h1 >Page test</h1>
      <p>pour tester les appels API</p>
      <GenresData />
    </>
  );

}

export default TestPage;