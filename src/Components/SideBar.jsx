import React from 'react';
import '../SideBar.css'; // Add CSS to style the sidebar

const SmallMovieCard = ({ title, image, rating, quality }) => {
  return (
    <div className="small-movie-card">
      <img src={image} alt={title} className="small-movie-image" />
      <div className="movie-info">
        <h4 className="small-movie-title">{title}</h4>
        <p className="small-movie-rating">Rating: {rating}</p>
        <p className="small-movie-quality">Quality: {quality}</p>
      </div>
    </div>
  );
};



const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Trending</h3>
     
      <SmallMovieCard
        title="Dune"
        image="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
        rating={8.0}
        quality="HD"
      />
      <SmallMovieCard
        title="Free Guy"
        image="https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
        rating={7.6}
        quality="HD"
      />
     
      <SmallMovieCard
        title="No Time to Die"
        image="https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
        rating={7.4}
        quality="HD"
      />
      <SmallMovieCard
        title="The Suicide Squad"
        image="https://image.tmdb.org/t/p/w500/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg"
        rating={7.2}
        quality="HD"
      />
      <SmallMovieCard
        title="Jungle Cruise"
        image="https://image.tmdb.org/t/p/w500/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
        rating={6.9}
        quality="HD"
      />
      
    
      <SmallMovieCard
        title="A Quiet Place Part II"
        image="https://image.tmdb.org/t/p/w500/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg"
        rating={7.5}
        quality="HD"
      />
      <SmallMovieCard
        title="The Tomorrow War"
        image="https://image.tmdb.org/t/p/w500/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg"
        rating={6.9}
        quality="HD"
      />
      
    
      <SmallMovieCard
        title="Cruella"
        image="https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg"
        rating={7.4}
        quality="HD"
      />
      {/* Add more SmallMovieCard components here */}
    </div>
  );
};

export default Sidebar;
