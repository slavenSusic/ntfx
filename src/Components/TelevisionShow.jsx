import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function TelevisionShow({loaderDataf, title}) {


    
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(loaderDataf);
          const jsonData = await response.json();
          setData(jsonData.results);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [loaderDataf]);
  

  
    const settings = {
      dots: false,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className="bg-slate-900">
      <h1 className='text-white pl-10 text-4xl py-5' >{title}</h1>
      <Slider {...settings}>
        {data.map((movie) => (
          <div key={movie.id} className="bg-slate-900 px-3">
       
            <Link to={`/tv-shows/${movie.id}`}>
              <div className='bg-slate-900 
              '>
                 <div className="hover:border inline-grid">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className=""
                />
                </div>
              </div>
            </Link>
          </div>
        
        ))}
      </Slider>
    </div>
    );
  }

export default TelevisionShow