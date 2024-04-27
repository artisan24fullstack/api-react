import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const [gameMovies, setGameMovies] = useState([]);
  const { id } = useParams();

  console.log(id)
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.rawg.io/api/games/${id}/movies?key=${apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => setGameMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(gameMovies.length);

  if (gameMovies.length >= 0) {
    return (
      <div className="game__movies">
        {gameMovies.map(movies => (
          <video width="500" key={movies.id} src={movies.data.max} alt={movies.id} />
        ))}
      </div>
    );
  } else return null;
}