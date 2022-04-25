<template>
  <div class="about">
    <input type="text" v-model="name.name">
    <h1>{{name.name}}</h1>
    <h1>{{tasks[tasks.length-1]}}</h1>
    <button @click="showAlert">showAlert</button>
  </div>
</template>
<script>
  import { ref, readonly, reactive, watch,computed } from "vue"

  export default {
    setup () {
      let name = reactive({
        name: "asadur"
      })
      const tasks = ref(["Write my posts", "Go for a walk", "Meet my friends", "Buy fruit"])
      const newItemText = ref("") 

      const addNewTodo = () => {
        if (newItemText.value != "") {
          tasks.value.unshift(newItemText.value);
        }
        newItemText.value = "";
      }
      const removeTodo = () => {
        tasks.value.shift();
      }
      const showAlert = ()=>{
        console.log(publishedBooksMessage)
        tasks.value.pop()
        
      }
      watch(name,()=>{
        console.log('muhammad','sattar')
      })
      const publishedBooksMessage = computed(() => {
        showAlert()
        return 1;
      })
     
      return {
        name,
        tasks: readonly(tasks),
        newItemText,
        addNewTodo,
        removeTodo,
        showAlert
      }
    }
  }; 
</script> 

