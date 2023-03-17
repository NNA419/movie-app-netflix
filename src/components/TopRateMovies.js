import React, { useEffect, useState } from 'react';
import apiService from '../app/apiService';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, A11y } from "swiper";
import { IMG_URL } from '../app/config';

function TopRateMovies({ MovieKind , api }) {

  const [dataTopRate, setDataTopRate] = useState([]);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api);
        setDataTopRate(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  
  // console.log(dataTopRate);
  // console.log(intervalRef);
  
  return (
    <div className="movies-list-container">
      <h1>{MovieKind}</h1>
      <Swiper
        speed={900}
        slidesPerGroup={6}
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation, A11y]}
        loop={isLoop}
        onSlideChange={(e) => {
          if (e.a11y.clicked !== false) {
            setIsLoop(true);
          }
        }}
        onSwiper={(e) => {
          console.log("e2", e.a11y);
        }}
        breakpoints={{
          380: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          // 1024: {
          //   slidesPerView: 6,
          //   spaceBetween: 10,
          // },
        }}
        className="movies-list"
      >
        {dataTopRate.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                alt=""
                className="img-movie"
                src={`${IMG_URL}${item.backdrop_path}`}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
    
export default TopRateMovies
