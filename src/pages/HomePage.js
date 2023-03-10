import ActionMovies from '../components/ActionMovies';
import Animation from '../components/Animation';
import Fantasy from '../components/Fantasy';
import MovieIntro from '../components/MovieIntro';
import TopRate from '../components/TopRate';

function HomePage() {

  

  return (
    <>
      <MovieIntro />
      <div className='movies-container'>
        <TopRate />
        <ActionMovies />
        <Animation />
        <Fantasy/>
      </div>
    </>
  );
}

export default HomePage