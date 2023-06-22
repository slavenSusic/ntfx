import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { genresData } from '../utility/Genres';
console.log(genresData)

import { useState, useEffect } from 'react';

function TvShowsBanner({movies , props})  {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * movies.results.length));
    const [randomMovie, setRandomMovie] = useState(movies.results[randomIndex]);
    const results = movies.results;
    useEffect(() => {
      const interval = setInterval(() => {
        const newIndex = Math.floor(Math.random() * movies.results.length);
        setRandomIndex(newIndex);
        setRandomMovie(movies.results[newIndex]);
      }, 8000); // Change the interval duration as desired (in milliseconds)
  
      return () => {
        clearInterval(interval); // Clean up the interval on component unmount
      };
    }, [movies.results]);

   




return (
    <>
    <div className="w-full bg-slate-900 relative">
         <div className='flex flex-row-reverse'>
         <div className="pl-5 absolute top-[180px] left-[50px]  text-white text-2xl z-10 m-w-[500px]">
           <div className='flex justify-left items-center '>
             <h2 className='text-6xl'>{randomMovie.name}</h2> <span className='py-2'></span>
             
             </div>
             <p className='text-4xl'>{randomMovie.original_name} <p className='text-2xl'>Origin country : [{randomMovie.origin_country}]</p></p> 
   <div className='py-10'>
     <div className='flex'>
             <p className=''> <span className='pl-5 mr-5'> Score: </span> <span className="text-green-500 relative ">{randomMovie.vote_average.toFixed(1)}</span></p>
            <span className='absolute top-[155px] left-[114px] '><CircularProgress 
              variant="determinate" 
              size="4rem"
              {...props}
            
            
            
             value={randomMovie.vote_average*10} 
             
             sx={ randomMovie.vote_average > 7 ? { color: "green" }
             : randomMovie.vote_average > 6
             ? { color: "yellow" }
             : { color: "red" }}
             
                        
             
             />
                         
               
               
               </span> 
            
             </div>
            </div>
            
            <div className='flex gap-4 py-4 justify-start items-left'>
     {randomMovie.genre_ids.map((id) => {
       const genre = genresData.find((genre) => genre.id === id);
       return <p key={id} className='border px-2 pb-1'>
      
         <p className='inline-block text-2xl' >
           {genre ? genre.name : ""}
           </p>
        
         </p>;
     })}
   </div>
   </div>
         <div className="relative  w-2/3">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
           <img
             src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`}
             alt={randomMovie.title}
             className="w-full h-4/3"
             
           />
           
           </div>
         </div>
          </div>
       </>
     );
}
export default TvShowsBanner;