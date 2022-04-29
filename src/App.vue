<template>
 <div>
   <nav >
    <span v-if="!store.state.auth.token">
       <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/register">Register</router-link>
    </span>
     <span v-else>
         <router-link to="/dashboard">dashboard</router-link> |
        <router-link to="/users">User</router-link> |
        <a  @click="logout" style="color:red;cursor:pointer">logout</a> 
     </span>
   </nav>

   <router-view/>
 </div>

</template>
<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import router from './router';

 export  default {
   setup(){
      const store = useStore();
      const navShow = ref(false);
     onMounted(()=>{
        document.getElementsByClassName('chaotic-orbit')[0].style.display="none"
     })

     const logout =async ()=>{
      await store.dispatch('auth/signout')
       if(store.state.auth.token==null) router.push('/auth/login')
     }
     return {
       navShow,
       logout,store
     }
   }
 }
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
