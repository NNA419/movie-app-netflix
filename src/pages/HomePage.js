import MovieIntro from '../components/MovieIntro';
import TopRate from '../components/TopRate';

function HomePage() {

  

  return (
    <>
      <MovieIntro />
      <div className='movies-container'>
        <TopRate />
      </div>
    </>
  );
}

export default HomePage