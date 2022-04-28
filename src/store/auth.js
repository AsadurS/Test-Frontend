import apiClient from '../http-common';
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
            await apiClient.post("api/login",credentials)
                .then(res=>{
                    commit('SET_TOKEN', res.data.access_token)
                    commit('SET_USER', res.data.user)
                    localStorage.setItem('token',res.data.access_token)
                }).catch(()=>{
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)

                });
        },
        async me({commit})
        {
            await apiClient.post("api/me")
                .then(res=>{
                    commit('SET_TOKEN', localStorage.getItem('token'))
                    commit('SET_USER', res.data)
                }).catch(()=>{
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                    localStorage.removeItem("token")

                });
        },
        async signUp({commit},credentials)
        {
            await apiClient.post("api/signup",credentials)
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
            return apiClient.post("api/logout").then(()=>{
                commit('SET_TOKEN', null)
                commit("SET_USER", null)
            });
        }
    },
}
