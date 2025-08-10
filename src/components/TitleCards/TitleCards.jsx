import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import card_data from "../../assets/cards/Cards_data.js";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const url = `https://api.themoviedb.org/3/movie/${
    category ? category : "now_playing"
  }?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2U5MTc3MTliMjQ0ZTdlYjYyNmUzMjkyMjBkNTI4YiIsIm5iZiI6MTc1NDgyMjE5MS43MDEsInN1YiI6IjY4OTg3NjJmOTdlOGI3NGVkNDkyZWQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nU9EHfcrQ_vpt5c1GWdudu3wdZIM8SLzUVghx8Rjjxw",
    },
  };
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              alt=""
              className="card-image"
            />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
