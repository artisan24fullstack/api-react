import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
      </Link>
    </div>
  );
};

export default GameCard;