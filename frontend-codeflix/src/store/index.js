import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Axios
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: {

    },
    foros:{

    },
    articulos:{

    },

    // esta ruta es para volver
    rutaRegreso:"/"
  },

  mutations: {
    setBusqueda(state, data){
      //Se guarda la data en las variables del state
      state.videos = data.videos;
      state.foros = data.foros;
      state.articulos = data.articulos;
      console.log(state.videos)
    },

    // esta es una funcion de flecha (aun no sabemos la diferencia pero funciona)
    setRutaRegreso: (state, url) =>{
      state.rutaRegreso = url
    }
  },
  
  actions: {
    async busqueda({commit}, query){
      let result = null;
      const url = "http://localhost:3000/data";
      // se consume el backend
      // seba y franco del futuro --> ***** añadir la query a la url ******
      await axios.get(url).then((response) => {
      result = response.data;
    })
      // Se llama a la función setBusqueda que está en Mutations
      commit('setBusqueda', result);

    }  
  },
  getters: {
    getVideos: state => {
      return state.videos;
    },

    getForos: state => {
      return state.foros;
    },

    getArticulos: state => {
      return state.articulos;
    },

    getRutaRegreso: state => {
      return state.rutaRegreso;
    }
  },

  modules: {
  }
})
