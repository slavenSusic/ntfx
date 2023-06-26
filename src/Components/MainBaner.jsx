import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { genresData } from "../utility/Genres";
console.log(genresData);
import { useState, useEffect } from "react";

function MainBaner({ movies, props }) {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * movies.results.length)
  );
  const [randomMovie, setRandomMovie] = useState(movies.results[randomIndex]);
  const results = movies.results;
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * movies.results.length);
      setRandomIndex(newIndex);
      setRandomMovie(movies.results[newIndex]);
    }, 8000); 

    return () => {
      clearInterval(interval); 
    };
  }, [movies.results]);

  const releaseDate = randomMovie.release_date;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = releaseDate.toLocaleString("hr-HR", options);

  return (
    <>
      <div className="w-full bg-slate-900 relative">
        <div className="flex flex-row-reverse">
          <div className="pl-5 absolute top-[60px] left-[50px]  text-white text-2xl z-10 m-w-[500px]">
            <div className="flex justify-left items-center ">
              <h2 className="text-5xl">{randomMovie.title}</h2>
             
             
            </div>
            ({randomMovie.release_date.toString().slice(0, 4)})
            <h2 className="text-2xl w-[700px]">{randomMovie.overview.toString().split(/\s+/).slice(0, 15).join(" ")}...</h2>
            <div className="py-10">
              <div className="flex">
                <p className="">
                  {" "}
                  <span className="pl-5 mr-5"> Score: </span>{" "}
                  <span className="text-green-500 relative ">
                    {randomMovie.vote_average.toString().slice(0, 3)}
                  </span>
                </p>
                <span className="absolute top-[168px] left-[114px] ">
                  <CircularProgress
                    variant="determinate"
                    size="4rem"
                    {...props}
                    value={randomMovie.vote_average * 10}
                    sx={
                      randomMovie.vote_average > 7
                        ? { color: "green" }
                        : randomMovie.vote_average > 6
                        ? { color: "yellow" }
                        : { color: "red" }
                    }
                  />
                </span>
              </div>
            </div>

            <div className="flex gap-4 py-4 justify-start items-left">
              {randomMovie.genre_ids.map((id) => {
                const genre = genresData.find((genre) => genre.id === id);
                return (
                  <p key={id} className="border px-2 pb-1">
                    <p className="inline-block text-sm">
                      {genre ? genre.name : "zzz"}
                    </p>
                  </p>
                );
              })}
            </div>

            
          
          </div>
          <div className="relative  w-2/3">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
            <img
              src={`http://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
              alt={randomMovie.title}
              className="w-full h-full object-cover"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBaner;
