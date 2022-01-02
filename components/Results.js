import requests from '../utils/requests';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({ request }) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
      {request.results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  );
}

export default Results;
