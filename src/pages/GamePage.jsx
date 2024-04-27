import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layout/Header.jsx';
import SearchBar from '../layout/SearchBar.jsx';
import Movie from '../components/Movie.jsx';
import Screenshots from '../components/Screenshots.jsx';

const GamePage = () => {
  const { id } = useParams();
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchGameDetails = async () => {
      setLoading(true);
      console.log("GamePage")
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        const cachedGameDetails = localStorage.getItem(`game_${id}`);
        if (cachedGameDetails) {
          setGame(JSON.parse(cachedGameDetails));
        } else {
          const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
          if (!response.ok) {
            throw new Error('Failed to fetch game details');
          }
          const data = await response.json();
          console.log(data)
          setGame(data);
          localStorage.setItem(`game_${id}`, JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchScreenshots = async () => {
      setLoading(true);
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        const cachedScreenshots = localStorage.getItem(`screenshots_${id}`);
        if (cachedScreenshots) {
          setScreenshots(JSON.parse(cachedScreenshots));
          setLoading(false);
        } else {
          const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`);
          if (!response.ok) {
            throw new Error('Failed to fetch screenshots');
          }
          const data = await response.json();
          setScreenshots(data.results);
          setLoading(false);
          localStorage.setItem(`screenshots_${id}`, JSON.stringify(data.results));
        }
      } catch (error) {
        console.error('Error fetching screenshots:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
    fetchScreenshots();
  }, [id]);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(game)
  return (
    <div className='GamePage'>
      <Header />
      <SearchBar />
      {game && (
        <>

          <div className='Title'>
            <h1>{game.name}</h1>
          </div>
          <div className='Content'>
            <div className='TopContent'>
              <img width="500" src={game.background_image} />
            </div>
            <div className="game-details">
              <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
            </div>
          </div>
        </>
      )}
      <hr />
      <Screenshots />
      <hr />
      <Movie />
    </div>

  );
};

export default GamePage;