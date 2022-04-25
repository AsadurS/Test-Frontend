import axios from "axios";


let token  =  localStorage.getItem('token')?? null
const apiClient = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json",
        'token'      : `Bearer ${token}`
    },
});
export default apiClient;