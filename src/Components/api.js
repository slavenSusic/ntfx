export async function getMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODI2NWZkZTQ4M2RhMjBmMjNjMjI4NTBmODJmNjg3MiIsInN1YiI6IjY0NmUwOTdkZDE4NTcyMDEwMTlhYTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5obtYse9riTw4YS0t8H8pAfyKC0axfGnOJLKJ2sLL3U'
      }
    };
  
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
  
    if (!response.ok) {
      throw { message: 'Failed to fetch posts.', status: 500 };
    }
  
    return response.json();
  }

  export async function getMoviesDetails(id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODI2NWZkZTQ4M2RhMjBmMjNjMjI4NTBmODJmNjg3MiIsInN1YiI6IjY0NmUwOTdkZDE4NTcyMDEwMTlhYTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5obtYse9riTw4YS0t8H8pAfyKC0axfGnOJLKJ2sLL3U'
      }
    };
  
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US' + id, options);
  
    if (!response.ok) {
      throw { message: 'Failed to fetch posts.', status: 500 };
    }
  
    return response.json();
  }



  export async function getMoviesDetailsOther(id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODI2NWZkZTQ4M2RhMjBmMjNjMjI4NTBmODJmNjg3MiIsInN1YiI6IjY0NmUwOTdkZDE4NTcyMDEwMTlhYTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5obtYse9riTw4YS0t8H8pAfyKC0axfGnOJLKJ2sLL3U'
      }
    };
  
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
  
    if (!response.ok) {
      throw { message: 'Failed to fetch movie details.', status: response.status };
    }
  
    return response.json();
  }
  


  
  export async function comingSoonMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODI2NWZkZTQ4M2RhMjBmMjNjMjI4NTBmODJmNjg3MiIsInN1YiI6IjY0NmUwOTdkZDE4NTcyMDEwMTlhYTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5obtYse9riTw4YS0t8H8pAfyKC0axfGnOJLKJ2sLL3U'
      }
    };
  
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options);
  
    if (!response.ok) {
      throw { message: 'Failed to fetch movie details.', status: response.status };
    }
  
    return response.json();
  }


  

  


  export async function getBanerData() {
    const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=b8265fde483da20f23c22850f82f6872&language=en-US');
      if (!response.ok) {
      throw { message: 'Failed to fetch posts.', status: 500 };
      }
    return response.json();
  }
  


  export async function getTvDetails(id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODI2NWZkZTQ4M2RhMjBmMjNjMjI4NTBmODJmNjg3MiIsInN1YiI6IjY0NmUwOTdkZDE4NTcyMDEwMTlhYTk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5obtYse9riTw4YS0t8H8pAfyKC0axfGnOJLKJ2sLL3U'
      }
    };
  
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options);
  
    if (!response.ok) {
      throw { message: 'Failed to fetch TV show details.', status: response.status };
    }
  
    return response.json();
  }
 
  
  
  
  
  



  // 97546

  // https://api.themoviedb.org/3/tv/97546?api_key=b8265fde483da20f23c22850f82f6872&language=en-US




//   import CircularProgress from '@mui/material/CircularProgress';
// import ModalVideo from 'react-modal-video';
// import { useState, useEffect } from 'react';

// function SingleMovie({ props, vote_average, name, title, backgroundImage, overview, seasons, tagline }) {
//   const [isOpen, setOpen] = useState(false);
//   const [videoId, setVideoId] = useState('');

//   useEffect(() => {
//     fetchVideoId();
//   }, []);

//   const fetchVideoId = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b8265fde483da20f23c22850f82f6872`
//       );
//       const data = await response.json();

//       if (data.results && data.results.length > 0) {
//         setVideoId(data.results[0].key);
//       }
//     } catch (error) {
//       console.error('Error fetching video ID:', error);
//     }
//   };

//   const playTrailer = () => {
//     const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
//     window.open(youtubeUrl);
//   };

//   const season = seasons ? { seasons } : '';

//   return (
//     <div className="w-full bg-slate-900 relative">
//       <div className="flex flex-row-reverse">
//         <div className="absolute top-[400px] left-[600px] transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl z-10">
//           <div className="">
//             <h2 className="font-bold text-6xl py-10">
//               {name} {title}
//             </h2>
//             <div className="py-10 pt-10">
//               <div className="flex">
//                 <p className="">
//                   {' '}
//                   <span className="pl-5 mr-5"> Score: </span>{' '}
//                   <span className="text-green-500 relative ">
//                     {vote_average && vote_average.toFixed(1)}
//                   </span>
//                 </p>
//                 <span className="absolute top-[162px] left-[97px] ">
//                   {vote_average && (
//                     <CircularProgress
//                       variant="determinate"
//                       size="4rem"
//                       {...props}
//                       value={vote_average * 10}
//                       sx={
//                         vote_average > 7
//                           ? { color: 'green' }
//                           : vote_average > 6
//                           ? { color: 'yellow' }
//                           : { color: 'red' }
//                       }
//                     />
//                   )}
//                 </span>
//               </div>
//             </div>
//             <p className="text-4xl py-5 w-3/4">{overview.split(' ').slice(0, 25).join(' ')}...</p>
//             <p className="text-2xl py-1 w-3/4">{tagline}</p>
//             {seasons && <p>Seasons to watch {seasons}</p>}

//             <ModalVideo
//               channel="youtube"
//               autoplay
//               isOpen={isOpen}
//               videoId={videoId}
//               onClose={() => setOpen(false)}
//             />

//             <button className="btn-primary" onClick={() => setOpen(true)}>
//               VIEW DEMO
//             </button>
//           </div>
//           <div className="flex gap-5 ">
//             <button
//               onClick={playTrailer}
//               className="flex pt-4  border px-6 justify-center content-center text-2xl gap-4 bg-white"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="full"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
//                 />
//               </svg>
//               <span className="text-3xl text-slate-900">Watch trailer</span>
//             </button>
//             <button className=" py-4 flex border px-6 justify-center content-center text-2xl gap-4 hover:bg-slate-800 ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//               </svg>
//               <span className="text-3xl">Add to Watch List</span>
//             </button>
//           </div>
//         </div>
//         <div className="relative  w-4/5">
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${backgroundImage}`}
//             alt={title}
//             className="w-full h-screen"
//             style={{ objectFit: 'cover' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleMovie;
