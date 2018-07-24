import axios from 'axios'

export const storeTask = (payload) => {
  return axios.post(`https://localhost:3000/tasks`, payload)
}
