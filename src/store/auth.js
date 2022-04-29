import axios from 'axios';
export default {
    namespaced:true,
    state: {
        token:null,
        user:null,
    },
    mutations: {
        SET_TOKEN(state,token){
            state.token = token;
        },
        SET_USER(state, user)
        {
            state.user = user
        }
    },
    actions: {
        async signIn({commit},credentials)
        {
            await axios.post("api/login",credentials)
                .then(res=>{
                    commit('SET_TOKEN', res.data.access_token)
                    commit('SET_USER', res.data.user)
                    localStorage.setItem('token',res.data.access_token)
                }).catch(()=>{
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)

                });
        },
        async attempt({commit, state}, token){
            if(token)
            {
              await commit('SET_TOKEN', token)
            }
            if(!state.token)
            {
              return ;
            }
          
            try{
              await axios.
              post("api/me").
              then(res=>{
                  commit("SET_USER", res.data)
                  commit('SET_TOKEN', localStorage.getItem('token'))
              }) 
              
            }catch(e)
            {
              commit('SET_TOKEN', null)
              commit("SET_USER", null)
              localStorage.removeItem("token")
            }
          },
       
        async signUp({commit},credentials)
        {
            await axios.post("api/signup",credentials)
                .then(res=>{
                    commit('SET_TOKEN', res.data.access_token)
                    commit('SET_USER', res.data.user)
                    localStorage.setItem('token',res.data.access_token)
                }).catch(()=>{
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                });
        },
        signout({commit}){
            return axios.post("api/logout").then(()=>{
                commit('SET_TOKEN', null)
                commit("SET_USER", null)
            });
        }
    },
}
