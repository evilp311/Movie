import axios from 'axios'

export default function getGenre () {
  return new Promise((resolve, reject) => {
    axios
      .get('https://moviesapi.codingfront.dev/api/v1/genres')
      .then(response => {
        resolve(response.data.map(obj => obj.name))
      })
      .catch(error => {
        reject(error)
      })
  })
}
