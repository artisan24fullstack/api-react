import React, { useState, useEffect } from 'react';
import Header from '../layout/Header.jsx';
import PopularGames from '../layout/PopularGames.jsx';
import FutureGames from '../layout/FutureGames.jsx';
import Screenshots from '../components/Screenshots.jsx';
import Movie from '../components/Movie.jsx';
//import GenresData from '../layout/Genres.jsx';

function TestPage() {



  /**
      <GenresData />
      <PopularGames />
      <FutureGames />
      <Screenshots />


   */
  return (
    <>
      <Header />
      <h1 >Page test</h1>
      <p>pour tester les appels API</p>
    </>
  );

}

export default TestPage;