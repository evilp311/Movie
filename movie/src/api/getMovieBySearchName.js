import axios from 'axios'
import formatMovie from '../utils/fornatMovie'
export async function getMovieBySearchName (name = '') {
  if (!name) {
    return
  }

  try {
    const res = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/movies?q=${name}`
    )
    if (res.data.data[0]) {
      return formatMovie(res.data.data[0])
    } else {
      return res.data.data
    }
  } catch (e) {
    console.log(e.error.massge)
  }
}
