import React from 'react';
import { useWatchlistStore } from '../utility/WatchListStore';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';

function MyList({ movie }) {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const watchlist = useWatchlistStore((state) => state.watchlist);
  const removeFromWatchlist = useWatchlistStore((state) => state.removeFromWatchlist);
  const handleRemove = (movieId) => {
    removeFromWatchlist(movieId);
  };
  const watchlistEmpty = watchlist.length > 0;

  useEffect(() => {
    if (movie && movie.id) {
      fetchVideoId();
    }
  }, [movie]);

  const fetchVideoId = async () => {
    try {
      let apiUrl = '';
      if (movie && movie.id) {
        if (movie.name) {
          apiUrl = `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
        } else {
          apiUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
        }
  
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (data.results && data.results.length > 0) {
          console.log('Video ID:', data.results[0].key);
          setVideoId(data.results[0].key);
          
        }
      }
    } catch (error) {
      console.error('Error fetching video ID:', error);
    }
  };

  return (
    <div className="">
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

      <div className="text-white text-center text-5xl">{!watchlistEmpty && <p>Add some movies to watch!</p>}</div>
      <div className="grid grid-cols-5">
        {watchlist.map((movie) => (
          <div key={movie.id} className="pt-20 w-[250px] pl-10">
           
              <img
                onClick={() => setOpen(true)}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
                alt={movie.title}
                className="w-full cursor-pointer"
              />
       <p className='text-white'> {movie.id}</p>
            <button className='text-white' onClick={() => handleRemove(movie.id)}>Delete from watchlist</button>
            <h1 className="text-white text-3xl text-center">
              {movie.title} {movie.name}
            </h1>
            <h2>{movie.media}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
