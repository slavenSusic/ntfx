import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true
};

function Movie({ movies }) {
  const results = movies.results;
  const randomIndex = Math.floor(Math.random() * movies.results.length);
  const randomMovie = results[randomIndex];

  const clickHandler = (e) => {
    e.stopPropagation();
    console.log('Button clicked');
  };


  return (
   
      <div className="py-5 bg-slate-900">
        <h1 className='text-white text-3xl p-10'>Recent Movies</h1>
     <Slider {...settings}>
    {movies.results.map((movie) => (
      <div key={movie.id} className="relative overflow-hidden w-64 h-96 group">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="block w-full h-full transition-transform duration-300 ease-out transform-gpu"
          />
          <div className="absolute inset-0 flex items-start opacity-0 group-hover:opacity-50 bg-gray-200">
            <button  onClick={clickHandler} className=" top-0 right-0 text-white rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="full" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-20 h-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
</button>
          </div>
        </Link>
      </div>
    ))}
  </Slider>
      </div>

  );
}

export default Movie;
