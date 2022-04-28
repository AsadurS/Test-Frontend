<template>
   <div class="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Birthdate</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in users" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.created_at}}</td>
    </tr>

  </tbody>
</table>
   </div>
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default{
    setup() {
        const users = ref([]);
        const store =  useStore()
        onMounted(async ()=>{
         await  store.dispatch('users/getUsers')
         if(store.state.users.users) users.value = store.state.users.users
        })

    return{
        users
    }
    },
}
</script>
