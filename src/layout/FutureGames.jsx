import React, { useEffect, useState } from 'react';

export default function FutureGames() {
  const [games, setGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2024-01-01,2024-12-31&ordering=-released`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const futureGames = data.results.filter(game => game.released && game.released.substring(0, 4) === '2024').slice(0, 10);
        setGames(futureGames);
        if (futureGames.length > 0) {
          setCurrentIndex(0);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const nextGame = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + games.length) % games.length);
  };

  return (
    <>
      <h2 className='game__title'>Upcoming 2024 Releases</h2>
      {games.length > 0 && games[currentIndex] && (
        <div >
          <h3 className='game__subtitle'>{games[currentIndex].name}</h3>
          <img className="game__image" width="300" src={games[currentIndex].background_image} alt={games[currentIndex].name} />

          <div >
            <button onClick={prevGame}>prev</button>
            <button onClick={nextGame}>next</button>
          </div>
        </div>
      )}
    </>
  );
}