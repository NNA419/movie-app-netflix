import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../app/apiService';
import { API_KEY, DETAIL_MOVIE_URL, IMG_URL } from '../app/config';
import "./DetailMoviePage.css"

import ShareIcon from "@mui/icons-material/Share";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

function DetailMoviePage() {
  const [dataDetail, setDataDetail] = useState({});

  const param = useParams();
  const api = `${DETAIL_MOVIE_URL}/${param.movieId}?api_key=${API_KEY}&language=en-US`;
  // console.log(param)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(api);
        setDataDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

  console.log(dataDetail);

  return (
    <div className="detail-container">
      <div key={dataDetail.id}>
        <div
          style={{
            backgroundImage: `url(${
              IMG_URL + dataDetail.backdrop_path || dataDetail.poster_path
            })`,
            width: "100%",
            height: "400px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <div className="fadetop"></div>
          <Container maxWidth="lg">
            <div className="detail-main">
              <div className="detail-poster">
                <img src={IMG_URL + dataDetail.poster_path} alt="" />
              </div>
              <div className="detail-heading">
                <div className="detail-context">
                  <h4>
                    {dataDetail.release_date || dataDetail.first_air_date}
                  </h4>
                  <h1> {dataDetail.title || dataDetail.name}</h1>
                  <p>{dataDetail.overview}</p>
                </div>
                <div className="main_icon">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "30px",
                    }}
                  >
                    <button className="icon_playarrowicon">
                      <PlayArrowIcon id="icon_play" />
                    </button>
                    <span>Watch The Trailer</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className="icon_playarrowicon">
                      <ShareIcon id="icon_share" />
                    </button>
                    <span>Share</span>
                  </div>
                </div>
                <div className="detail-rate">
                  <div className="vote_average">
                    <p>
                      <span className="voted">
                        {Math.floor(dataDetail.vote_average)}
                      </span>
                      /10 <span className="imdb">IMDb</span>
                    </p>
                  </div>
                  <div className="add_heart">
                    <button className="add">
                      <AddIcon id="icon_add" />
                    </button>
                    <button className="heart">
                      <FavoriteIcon id="icon_heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default DetailMoviePage