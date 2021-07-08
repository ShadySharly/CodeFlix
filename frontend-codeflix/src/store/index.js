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

    }
  },

  mutations: {
    setBusqueda(state, data){
      //Se guarda la data en las variables del state
      state.videos = data.videos;
      state.foros = data.foros;
      state.articulos = data.articulos;
      console.log(state.articulos)
    }
  },
  
  actions: {
    async busqueda({commit}, query){
      console.log("entra a busqueda")
      let result = null;
      // se consume el backend
      // seba y franco del futuro --> ***** añadir la query a la url ******
      await axios.get("http://localhost:3000/data").then((response) => {
      result = response.data;
    })
      console.log('hace el axios')
      console.log(result.videos[0].titulo)
      // Se llama a la función setBusqueda que está en Mutations
      commit('setBusqueda', result);

    }  
  },
  modules: {
  }
})
