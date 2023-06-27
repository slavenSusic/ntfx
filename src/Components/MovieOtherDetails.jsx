import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetailsOther } from './api';
import SingleMovie from './SingleMovie';

function MoviesOtherDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchTvDetails = async () => {
      try {
        const data = await getMoviesDetailsOther(id);
        setMovieDetails(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchTvDetails();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const {tagline, media_type , poster_path,title, backdrop_path, overview, release_date,vote_average } = movieDetails;

  return (
    <>
      <SingleMovie
      media={media_type}
      poster={poster_path}
        title={title}
        backgroundImage={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        overview={overview}
        release={release_date}
        id={id}
        vote_average={vote_average}
        release_date={release_date}
        tagline={tagline}

     
      />
    </>
  );
}

export default MoviesOtherDetails;
