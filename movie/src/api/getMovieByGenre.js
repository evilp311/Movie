import axios from 'axios'

export default async function getMovieByGenre (genre = '') {
  if (!genre) {
    return
  }
  const res = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/genres/${genre}/movies`
  )

  return res.data.data.map(({ id, title, poster, imdb_rating }) => ({
    id: id,
    name: title,
    img: poster,
    rating: imdb_rating
  }))
}
