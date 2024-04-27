import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Screenshots() {
  const [gameScreenshot, setGameScreenshot] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`

    fetch(url)
      .then(response => response.json())
      .then(data => setGameScreenshot(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="game__screenshots">
      {gameScreenshot.map(screenshot => (
        <img width="250" key={screenshot.id} src={screenshot.image} alt={screenshot.name} />
      ))}
    </div>
  );
}