import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../layout/Header.jsx';
import SearchBar from '../layout/SearchBar.jsx';
import GameCard from '../components/GameCard.jsx';

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query) {
      fetchGames(query);
    }
  }, [location.search]);

  const fetchGames = async (query) => {
    setLoading(true); // Set loading state to true before fetching data
    // Replace 'YOUR_API_KEY' with your actual API key from RAWG
    console.log("SearchPage")
    const API_KEY = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(`https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }
      const data = await response.json();
      console.log(data)
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div>
        <Header />
        <SearchBar />
        Loading
      </div>
    );

  }

  return (
    <div className='background'>
      <Header />
      <SearchBar />
      <div className='Category-Header'>
        <h2>Search Result</h2>
        <div className="game-list">
          {searchResults.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default SearchResultsPage;