import React from 'react';
import '../index.css';

const RowCard = ({ title, imageUrl, description }) => {
  return (
    <div className="row-card">
      <div className="row-card-title">
        <h3>{title}</h3>
      </div>
      <div className="row-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="row-card-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RowCard;