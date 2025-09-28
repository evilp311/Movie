import axios from 'axios'

export default async function getAllMovies () {
  try {
    const res = await axios.get(
      'https://moviesapi.codingfront.dev/api/v1/movies?page={page}'
    )
    return res.data.data.map(({ id, title, poster, imdb_rating, genres }) => ({
      id: id,
      name: title,
      img: poster,
      rating: imdb_rating,
      genres: genres
    }))
  } catch (e) {
    console.log(e.error.massage)
  }
}
