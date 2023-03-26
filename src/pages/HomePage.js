
import MovieIntro from '../components/MovieIntro';
import TopRateMovies from '../components/TopRateMovies';
import { DataMoviesSlider } from '../DataMoviesSlider';
import Modal from "react-modal";
import { useState } from 'react';

function HomePage() {

  
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      backgroundColor: "red",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <MovieIntro />
      <div className="movies-container">
        {DataMoviesSlider.map((e, index) => {
          return (
            <TopRateMovies MovieKind={e.MovieKind} api={e.api} key={index} />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <h1>hello</h1>
      </Modal>
    </div>
  );
}

export default HomePage