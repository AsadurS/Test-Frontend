import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
require("@/store/subcriber.js")
axios.defaults.baseURL = "http://localhost:8000";

console.log(localStorage.getItem("token"))
store.dispatch('auth/attempt', localStorage.getItem("token")).then(()=>{
    createApp(App).use(store).use(router).mount('#app')

})


