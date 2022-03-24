import axios from "axios"
export default {
    actions:{
        async fetchUser(result){
            const res = await axios.get('http://localhost:3001/movies');
              const newUser = res.data
              result.commit('addMovie', newUser)
        }
    },
    mutations: {
        addMovie(state, newUser){
            state.users = newUser
        }
    },
    state:{
        users: []
    },
    getters:{
        sendUserState(state){
            return state.users
        }
    }
}