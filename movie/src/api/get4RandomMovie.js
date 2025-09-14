import axios from 'axios'

export default async function get4RandomMovie () {
  try {
    const res = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/random_movies`
    )

    return res.data.map(({ id, title, poster, imdb_rating, genres }) => ({
      id: id,
      name: title,
      img: poster,
      rating: imdb_rating,
      genres: genres
    }))
  } catch (e) {
    console.log(e.error.massege)
  }
}
