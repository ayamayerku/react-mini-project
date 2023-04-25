
import { Movie } from '../../models/moive.models'
import MovieCard from '../MovieCard'
import './MovieList.scss'


type Props = {
  movies: Movie | undefined
}
const MovieList = ({ movies }: Props) => {
  return (
    <div className='movie-container'>
      {movies && movies.Search.map((movie) => <MovieCard movie={movie} />)}
    </div>
  )
}

export default MovieList