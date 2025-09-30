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

    return res.data.data.map(({ id, title, poster, imdb_rating, genres }) => ({
      id: id,
      name: title,
      img: poster,
      rating: imdb_rating,
      genres: genres
    }))
  } catch (e) {
    console.log(e.error.massge)
  }
}
