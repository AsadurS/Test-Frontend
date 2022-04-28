<template>
    <h1>Hello, Mr {{user.name}}</h1>
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
 export  default {
   setup(){
      const store = useStore();
      const user = ref(false);
     onMounted(()=>{
        document.getElementsByClassName('chaotic-orbit')[0].style.display="none"
         if(store.state.auth.user) user.value = store.state.auth.user
     })
     return {
       user
     }
   }
 }
</script>
