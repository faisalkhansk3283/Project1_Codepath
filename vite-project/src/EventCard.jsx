import React from 'react';

const EventCard = (props) => {
  return (
    <div className="event-card">
      <img src={props.imageUrl} alt={name} />
      <div className="event-details">
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <button>
          <a href={props.resourceLink} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
