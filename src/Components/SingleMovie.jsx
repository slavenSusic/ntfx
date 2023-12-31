import CircularProgress from "@mui/material/CircularProgress";
import ModalVideo from "react-modal-video";
;
import { useState, useEffect } from "react";
import { useWatchlistStore } from "../utility/WatchListStore";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

//ova komponenta je i SingleMovie i SingleTVshow u jednoj

function SingleMovie({
  media,
  poster,
  props,
  vote_average,
  name,
  title,
  backgroundImage,
  origin_country,
  first_air_date,
  overview,
  seasons,
  tagline,
  type,
  id,
  release_date,
}) {
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);

  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  

  useEffect(() => {
    fetchVideoId();
  }, []);

  const fetchVideoId = async () => {
    try {
      let apiUrl = "";
      if (name) {
        apiUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
      } else {
        apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b8265fde483da20f23c22850f82f6872`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
       console.log(data)
      if (data.results && data.results.length > 0) {
        setVideoId(data.results[0].key);
        console.log(data.results[0].key)
      }
    } catch (error) {
      console.error("Error fetching video ID:", error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleAddToWatchlist = () => {
    addToWatchlist({ media, title, id, poster, name });
    setOpenSnackbar(true);
  };

  return (
    <div className="w-full bg-slate-900 relative flex flex-col-reverse ">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Added to Watch List
        </Alert>
      </Snackbar>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
  
      <div className="flex flex-col-reverse">
     
        <div className=" text-white text-center z-10 lg:flex flex-col items-start">
          <div className="">
            <h2 className="pt-5 font-bold text-5xl md:text-4xl lg:text-left lg:pl-10 lg:pt- lg:text-6xl">
              {name} {title}
            </h2>

            <div className="my-10 flex justify-center items-center md:my-12 lg:justify-start">
              <span className="text-lg mr-[25px] md:text-2xl lg:text-4xl lg:pl-20">
                {" "}
                Score:{" "}
              </span>{" "}
              <span className="text-green-500 mr-[-45px] text-2xl md:text-2xl lg:text-3xl lg:mr-[-52px]">
                {vote_average && vote_average.toFixed(1)}
              </span>
              {vote_average && (
                <CircularProgress
                  variant="determinate"
                  size="4rem"
                  {...props}
                  value={vote_average * 10}
                  sx={
                    vote_average > 7
                      ? { color: "green" }
                      : vote_average > 6
                      ? { color: "yellow" }
                      : { color: "red" }
                  }
                />
              )}
            </div>

            <div className="">
              <p className=" text-center text-2xl lg:w-[700px] lg:text-left  md:text-3xl md:py-5 md:pl-10 lg: max-w-[900px]">
                {overview.toString().split(/\s+/).slice(0, 15).join(" ")}...
              </p>
              <p className="text-center italic py-5 lg:text-left lg:pl-10">{tagline}</p>
              <div className="">
                <div className="italic py-5">
                  
                  {release_date && (
                    <p className="text-center lg:text-left lg:pl-10">Release date: {release_date}</p>
                  )}
                </div>
                  <div className="flex items-center justify-center gap-5 lg:justify-start lg:pl-10">
                  {seasons && <p>Seasons {seasons}</p>}
                {first_air_date ? (
                  <p className="flex gap-5 ">
                    {" "}
                    <p>|</p> On air since: {first_air_date}
                  </p>
                ) : null}

                <p>
                  {type ? (
                    <p className="flex gap-5 ">
                      {" "}
                      <p>|</p> {type}{" "}
                    </p>
                  ) : null}
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-10 py-3 justify-center md:pl-10 lg:text-4xl lg:gap-10">
            <button
              onClick={() => setOpen(true)}
              className="border  px-2 flex items-center text-lg xl:text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="full"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 lg:w-8 lg:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>

              <span className="">Watch trailer</span>
            </button>

            <button
              onClick={handleAddToWatchlist}
              className=" border py-3 px-2 flex items-center text-lg xl:text-2xl  hover:bg-slate-800 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 lg:w-8 lg:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span className="px-4">Add to Watch List</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full right-[0px] top-4 lg:w-3/4 lg:absolute lg:right-[0px] ">
        <div className=" md:absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${backgroundImage}`}
          alt={title}
          className="w-full lg:h-screen bg-cover bg-no-repeat"
        />
      </div>
    </div>
  );
}

export default SingleMovie;
