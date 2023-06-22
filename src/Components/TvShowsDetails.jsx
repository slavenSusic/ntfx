import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvDetails } from './api';
import SingleMovie from './SingleMovie';

function TvShowsDetails() {
  const { id } = useParams();
  const [tvDetails, setTVDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getTvDetails(id);
        setTVDetails(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!tvDetails) {
    return <p>Loading...</p>;
  }

  const {media_type, type, poster_path, vote_average,name, tagline, title, backdrop_path, overview, release_date, number_of_seasons ,first_air_date

  } = tvDetails;

  return (
    <>
    <SingleMovie
    media= {media_type}
    poster={poster_path}
      title={title}
      backgroundImage={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
      overview={overview}
      release={release_date}
      seasons={number_of_seasons}
      tagline={tagline}
      name={name}
      vote_average={vote_average}
      id={id}
      first_air_date={first_air_date}
      type={type}



    />
  </>
  );
}
 export default TvShowsDetails
