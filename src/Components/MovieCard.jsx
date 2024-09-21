import React from 'react';
import '../MovieCard.css';

export default function MovieCard({ id,title, image, rating, quality }){
  return (
    <div className="movie-card" key={id}>
      <img src=  {image}
       alt='' className="movie-image" />
      <div className="movie-info">
        <div className="title-contain">
        <h2 className="movie-title">{title}</h2>

        </div>
        {/* <h2 className="movie-title">{title}</h2> */}
        <p className="movie-rating">⭐ {rating}/10</p>
        <p className="movie-quality">{quality}</p>
      </div>
    </div>
  );
};

