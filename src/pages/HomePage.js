import MovieIntro from '../components/MovieIntro';
import TopRateMovies from '../components/TopRateMovies';
import { DataMoviesSlider } from '../DataMoviesSlider';

function HomePage() {

  

  return (
    <>
      <MovieIntro />
      <div className="movies-container">
        {DataMoviesSlider.map((e) => {
          return (<TopRateMovies MovieKind={e.MovieKind} api={e.api} />)
        })}
      </div>
    </>
  );
}

export default HomePage