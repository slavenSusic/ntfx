import React, { useState, useEffect } from 'react';
import { useWatchlistStore } from '../utility/WatchListStore';
import ModalVideo from 'react-modal-video';
import { useParams } from 'react-router-dom';

function MyList({ movie }) {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState('');

  const watchlist = useWatchlistStore((state) => state.watchlist);
  const removeFromWatchlist = useWatchlistStore((state) => state.removeFromWatchlist);
  const handleRemove = (movieId) => {
    removeFromWatchlist(movieId);
    setSelectedMovieId('');
  };
 
  const watchlistEmpty = watchlist.length === 0;

  useEffect(() => {
    if (selectedMovieId) {
      fetchVideoId(selectedMovieId);
    }
  }, [selectedMovieId]);

  const fetchVideoId = async (movieId) => {
    try {
      let apiUrl = "";
      const movieItem = watchlist.find((item) => item.id === movieId);
      if (movieItem?.name) {
        apiUrl = `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
      } else {
        apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
      }
  
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      if (data?.results && data?.results.length > 0) {
        setVideoId(data.results[0].key);
        console.log(data.results[0].key);
      }
    } catch (error) {
      console.error("Error fetching video ID:", error);
    }
  };

  const handleImageClick = (movieId) => {
    setOpen(true);
    setSelectedMovieId(movieId);
  };

  return (
    <div className="">
      <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
      />
      <div className="text-white text-center text-5xl">{watchlistEmpty && <p>Add some movies to watch!</p>}</div>
      <div className="grid grid-cols-5">
        {watchlist.map((movieItem) => (
          <div key={movieItem.id} className="pt-20 w-[250px] pl-10 flex flex-col gap-3">
            <img
              onClick={() => handleImageClick(movieItem.id)}
              src={`https://image.tmdb.org/t/p/w500/${movieItem.poster}`}
              alt={movieItem.title}
              className="w-full cursor-pointer"
            />
      
           
            <button className=" text-white border py-2 px-3 hover:bg-red-500" onClick={() => handleRemove(movieItem.id)}>
              Delete from watchlist
            </button>
            <h1 className="text-white text-3xl text-center">
              {movieItem.title} {movieItem.name}
            </h1>
            <h2>{movieItem.media}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;
