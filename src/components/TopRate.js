import React, { useEffect, useState } from 'react';
import { api_backdrop, api_object } from '../app/apiLink';
import apiService from '../app/apiService';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
        {dataTopRate.map((item) => {
          return (
            <div key={item.id}>
              <img
                alt=''
                className='img-movie'
                src={`${api_backdrop.backdrop}${item.backdrop_path}`}
              >
              </img>
            </div>
          )
        })}
      </div>

      <div className="prev-next-wrapper">
        <button className="prev-next-btn">
          <ArrowBackIosIcon id="prev-btn" />
        </button>
        <button className="prev-next-btn">
          <ArrowForwardIosIcon id="prev-btn" />
        </button>
      </div>

    </div>
  );
}
    
export default TopRate
