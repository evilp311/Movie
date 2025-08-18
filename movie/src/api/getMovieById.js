import axios from 'axios'
import formatMovie from '../utils/fornatMovie'
export default async function getMovieByID (id = '') {
  if (!id) {
    return
  }
  const res = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/movies/${id}`
  )

  return formatMovie(res.data)
}
