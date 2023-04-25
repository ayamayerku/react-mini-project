import { useState, useEffect } from 'react'
import MovieApi from '../../api/MovieApi'
import './Home.scss'
import { APIKey } from '../../api/MovieApikey'
import MovieList from '../MovieList'
import { useAppDispatch } from '../../store/store'
import { addMovie } from '../../store/slices/movieSlices'

type Props = {}

const Home = ({}: Props) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')

  const fetchMovie = async () => {
    try {
      const searchKey = search ? search : 'spider'
      const { data: movies } = await MovieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      )
      
      setTimeout(() => {
        dispatch(addMovie(movies.Search))
      }, 500)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [search])

  return (
    <>
      <div>
        <h3 style={{ margin: '1rem 0' }}>Movies</h3>
        <input
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieList />
      </div>
    </>
  )
}

export default Home

