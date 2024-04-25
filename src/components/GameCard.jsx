import React from 'react';
import { Link } from 'react-router-dom';
const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
        <h3>{game.name}</h3>
      </Link>
      <h4>price</h4>
    </div>
  );
};

export default GameCard;