import axios from "axios";
import { getToken } from "./users-service";
const BASE_URL = 'http://192.168.0.37:8080/api/v1/movies'
const getMovies = async () => {
    try{
        const options = {
            headers: {
              'Authorization': `Bearer ${getToken()}`
            }
        }
        const response = await axios.get(`${BASE_URL}/`, options);
        console.log(response.data);
    }catch{
        console.log("error");
    }
}


export {
    getMovies
}