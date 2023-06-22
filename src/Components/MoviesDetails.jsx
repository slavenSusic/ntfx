import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMoviesDetails } from './api';
import SingleMovie from './SingleMovie';
import { useParams } from 'react-router-dom';

function MoviesDetails() {
  const movieData = useLoaderData();
  console.log(movieData);

  const { id } = useParams();
  const selectedMovie = movieData?.movie;
  const title = selectedMovie?.title;
  const backgroundImage = selectedMovie?.backdrop_path;
  const overview = selectedMovie?.overview;
  const release = selectedMovie?.release_date;
  const origin_country=selectedMovie?.origin_country




  return (
    <div>
      {selectedMovie ? (
        <SingleMovie
          title={title}
          overview={overview}
          release={release}
          backgroundImage={backgroundImage}
          id={id}
          origin_country={origin_country}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MoviesDetails;

export function loader({ params }) {
  const movieId = params.id;
  return getMoviesDetails(movieId);
}