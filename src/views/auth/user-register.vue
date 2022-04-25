<template>
  <div class="container-fluid">
    <div class="row main-content bg-success text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        <h4 class="company_title">Please Enter Your</h4>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row">
            <h2>Log In</h2>
          </div>
          <div class="row">
            <form control="" class="form-group">
              <div class="row">
                <input type="text" name="name" id="name" class="form__input" v-model='form.name' placeholder="Name">
              </div>
              <div class="row">
                <input type="text" name="email" id="email" v-model='form.email' class="form__input" placeholder="Email">
              </div>
              <div class="row">
                <!-- <span class="fa fa-lock"></span> -->
                <input type="password" name="password" id="password" v-model='form.password' class="form__input" placeholder="Password">
              </div>
              <div class="row">
                <!-- <span class="fa fa-lock"></span> -->
                <input type="password" name="confirm-password" id="c-password" v-model='form.password_confirmation'  class="form__input" placeholder="Password Confirmation">
              </div>

                <input type="submit" value="Submit" class="btn">

            </form>
          </div>
          <div class="row">
            <p>Already Register? <router-link to="/auth/login">Login</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive, onMounted} from "vue"
import { useStore } from  'vuex'
export default {
  setup () {
    const formData = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
   const store = useStore()

    const submitForm = ()=>{
    store.dispatch('auth/signUp',123)
    }
    onMounted(()=>{
      submitForm()
    })
    return {
      form:formData,
      submitForm
    }
  }
}
</script>
<style>
.main-content{
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0,0,0,.4);
  margin: 5em auto;
  display: flex;
}
.company__info{
  background-color: #008080;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android{
  font-size:3em;
}
@media screen and (max-width: 640px) {
  .main-content{width: 90%;}
  .company__info{
    display: none;
  }
  .login_form{
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
  }
}
@media screen and (min-width: 642px) and (max-width:800px){
  .main-content{width: 70%;}
}
.row > h2{
  color:#008080;
}
.login_form{
  background-color: #fff;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
  border-top:1px solid #ccc;
  border-right:1px solid #ccc;
}
form{
  padding: 0 2em;
}
.form__input{
  width: 100%;
  border:0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em .5em .5em;
  padding-left: 2em;
  outline:none;
  margin:1.5em auto;
  transition: all .5s ease;
}
.form__input:focus{
  border-bottom-color: #008080;
  box-shadow: 0 0 5px rgba(0,80,80,.4);
  border-radius: 4px;
}
.btn{
  transition: all .5s ease;
  width: 70%;
  border-radius: 30px;
  color:#008080;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #008080;
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.btn:hover, .btn:focus{
  background-color: #008080;
  color:#fff;
}
</style>
