import React, { useEffect, useState } from "react";
import { api_backdrop, api_object } from "../app/apiLink";
import apiService from "../app/apiService";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, A11y } from "swiper";

function Fantasy() {
  const [dataFantasy, setDataFantasy] = useState([]);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api_object.fantasy);
        setDataFantasy(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="movies-list-container">
      <h1>Fantasy</h1>
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
        className="movies-list"
      >
        {dataFantasy.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                alt=""
                className="img-movie"
                src={`${api_backdrop.backdrop}${item.backdrop_path}`}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Fantasy 
