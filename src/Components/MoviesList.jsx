
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovies } from "./api";
import Movie from "../Pages/Movie";
import MainBaner from "./MainBaner";
import MovieOther from "./MovieOther";



function MoviesList() {
  const loaderData=useLoaderData(loader)

   
  console.log(loaderData)
  const key='b8265fde483da20f23c22850f82f6872'

  const requestTrendings = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`
const requestPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
const requestTopRated =  `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
const requestHorror = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`
const requestUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
  


    return (
      <>
      <MainBaner movies={loaderData} />
      <MovieOther loaderDataf={requestTrendings} title={'Trending'} />
       <MovieOther loaderDataf={requestPopular}  title={'Pupular'} />
      <MovieOther loaderDataf={requestTopRated} title={'Top rated'} />
      <MovieOther loaderDataf={requestTrendings} title={'Trending Movies'} />
      <MovieOther loaderDataf={requestHorror} title={'Horror movies'} />
      <MovieOther loaderDataf={requestUpcoming} title={ 'Upcoming Movies'} />
    
      </>
    )
  }
  export default MoviesList
  

  export function loader() {
    return getMovies();
  }
  export function loaderComingSoon() {
    return comingSoonMovies();
  }