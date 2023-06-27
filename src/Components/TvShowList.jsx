import React, { useState, useEffect } from 'react';
import TvShowsBanner from './TvShowsBanner';
import TelevisionShow from './TelevisionShow';
import { getBanerData } from './api';
import { useLoaderData } from 'react-router-dom';
function TvShowList() {
  
const loaderData=useLoaderData()
console.log(loaderData)
  const key='b8265fde483da20f23c22850f82f6872'
  
  const trending=`https://api.themoviedb.org/3/trending/tv/day?api_key=b8265fde483da20f23c22850f82f6872&language=en-US`
  const airingToday=`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`
  const topRatedTvshows= `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`

  // const loaderData=useLoaderData(loader)
 

  return (
    <>
   <TvShowsBanner movies={loaderData}/> 
    <TelevisionShow loaderDataf={trending} title={'Trending'}/>
    <TelevisionShow loaderDataf={airingToday} title={'On air today'}/>
    <TelevisionShow loaderDataf={topRatedTvshows} title={'Top rated shows'}/>
  
      </>
  )
}

export default TvShowList
export function loader() {
  return getBanerData()
}
