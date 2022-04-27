import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const localToken = localStorage.getItem('token')
const asyncCreateApp = async ()=>{
    await store.dispatch('auth/me'),
          createApp(App).use(store).use(router).mount('#app')
}
if(localToken) {
    asyncCreateApp()
}
else createApp(App).use(store).use(router).mount('#app')

