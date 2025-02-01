import axios from "axios";

const instance = axios.create({
    baseURL: 'http://fakestoreapi.in/api'
})
export default instance;