import React from 'react';
import './Card.css'; // import the CSS file

const Card = () => {
  return (
    <div className="custom-card">
      <img
        className="card-image"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Beautiful Landscape"
      />
      <div className="card-content">
        <h2 className="card-title">Heading</h2>
        <p className="card-text">
          Simple Yet Beautiful Card Design with TailwindCss. Subscribe to our Youtube channel for more ...
        </p>
        <button className="card-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
