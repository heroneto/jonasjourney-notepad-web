import axios from 'axios'
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({path: path.resolve(__dirname, '..', '..', '.env')})

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
  // baseURL: "https://jonasnotepad.herokuapp.com"
})

console.log(process.env.REACT_APP_API_HOST)

export default api