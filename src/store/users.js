import axios from 'axios';
export default {
    namespaced:true,
    state: {
        token:null,
    },
    mutations: {
      
        SET_USERs(state, users)
        {
            state.users = users
        }
    },
    actions: {
        async getUsers({commit})
        {
            await axios.get("api/users")
                .then(res=>{
     
                    commit('SET_USERs', res.data.users)
                   
                }).catch(()=>{
                    commit('SET_USERs', null)

                });
        },
    },
}
