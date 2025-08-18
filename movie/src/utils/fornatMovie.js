export default function formatMovie (movie) {
  const {
    title,
    poster,
    released,
    runtime,
    plot,
    genres,
    images,
    imdb_rating,
    type
  } = movie

  const newGenres = genres.map(val => val)
  const newImage = images[0]

  return {
    name: title,
    poster: poster,
    released: released,
    runtime: runtime,
    plot: plot,
    genres: newGenres,
    image: newImage,
    rating: imdb_rating,
    type: type
  }
}
