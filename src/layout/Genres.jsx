import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard.jsx";


function GenresData() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const storedData = localStorage.getItem('genresdata');

    const getThreeMonthsAgoDate = () => {
      const currentDate = new Date();
      const threeMonthsAgo = new Date(currentDate);
      threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
      return threeMonthsAgo.toISOString().slice(0, 10);
    };

    if (storedData) {
      setGames(JSON.parse(storedData));
    } else {
      const threeMonthsAgoDate = getThreeMonthsAgoDate();
      const endDate = new Date().toISOString().slice(0, 10); // Current date
      fetchGenresGames(API_KEY, {
        dates: `${threeMonthsAgoDate},${endDate}`,
      });
    }
  }, []);

  const fetchGenresGames = (apiKey, params) => {
    const queryParams = new URLSearchParams(params).toString();
    fetch(`https://api.rawg.io/api/genres?key=${apiKey}&${queryParams}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('genresdata', JSON.stringify(data.results));
        setGames(prevGames => [...prevGames, ...data.results]);
      })
      .catch(error => console.error('Error fetching data:', error));
  };


  return (
    <div className='Category-Header'>
      <h2>Genres</h2>
      <div className="game-list">
        {games.map((game, index) => (
          <span key={index}>
            {game.name}
          </span>
        ))}
      </div>

    </div>
  );

}


export default GenresData;