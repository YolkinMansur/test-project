import axios from "axios"
export default {
    actions:{
        async fetchMovies(result){
            const res = await axios.get('http://localhost:3001/movies');
              const newMovie = res.data
              result.commit('addMovie', newMovie)
        }
    },
    mutations: {
        addMovie(state, newMovie){
            state.movies = newMovie
        }
    },
    state:{
        movies: []
    },
    getters:{
        sendState(state){
            return state.movies
        }
    }
}