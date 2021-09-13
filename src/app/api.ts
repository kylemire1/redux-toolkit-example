import axios from 'axios'
import { Breed } from './models'

axios.defaults.baseURL = 'https://api.thedogapi.com/v1'

export const requests = {
  getBreeds: (limit = 5) =>
    axios.get<Breed[]>(`/breeds?limit=${limit}`).then((res) => res.data),
}
