import axios from "axios";
let token  =  localStorage.getItem('token')? localStorage.getItem('token'): null
console.log(token,localStorage.getItem('token'))
const apiClient = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
    },
});
export default apiClient;
