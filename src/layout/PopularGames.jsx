import React, { useEffect, useState } from 'react';

export default function PopularGames() {
  const [games, setGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setCurrentIndex(0);
        console.log(data.results)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const nextGame = () => {
    setCurrentIndex((currentIndex + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentIndex((currentIndex - 1 + games.length) % games.length);
  };

  return (
    <>
      <h2 className='game__title'>Popular Games</h2>
      {games.length > 0 && games[currentIndex] && (
        <div >
          <h3 className='game__subtitle'>{games[currentIndex].name}
            {games[currentIndex].metacritic && (
              <span className="game__score">
                Score: ({games[currentIndex].metacritic})
              </span>
            )}
          </h3>
          <img className="game__image" width="300" src={games[currentIndex].background_image} alt={games[currentIndex].name} />

          <div className="">
            <button onClick={prevGame}>prev</button>
            <button onClick={nextGame}>next</button>
          </div>
        </div>
      )}

    </>
  );
}