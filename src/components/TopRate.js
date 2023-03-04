import React, { useEffect, useState } from 'react';
import { api_backdrop, api_object } from '../app/apiLink';
import apiService from '../app/apiService';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ImageGallery from 'react-image-gallery/src/ImageGallery';
import ReactImageGallery from 'react-image-gallery';

const MovieItem = (url) => {
  return
  <img
    src={url}
    width={"250px"}
    height={"100px"}
  >

  </img>
}

function TopRate() {

  const [dataTopRate, setDataTopRate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api_object.topRate);
        setDataTopRate(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  console.log(dataTopRate);

  return (
    <div className="movies-list-container">
      <h1>Top Rated</h1>

      <div className="movies-list">
        <ReactImageGallery
          showThumbnails={false}
          originalHeight={"70px"}
          originalWidth={"250px"}
          items={dataTopRate.map((item) => {
            return {
              description: "",
              original: `${api_backdrop.backdrop}${item.backdrop_path}`,
              thumbnail: `${api_backdrop.backdrop}${item.backdrop_path}`,
              renderItem: (
                <MovieItem
                  url={`${api_backdrop.backdrop}${item.backdrop_path}`}
                />
              ),
            };
          })}
        />
      </div>
    </div>
  );
}
    
export default TopRate
