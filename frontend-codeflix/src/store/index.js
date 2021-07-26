import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Axios
Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    durationValueFilter: 60,
    videos: {

    },
    videosBackup: {

    },

    foros:{

    },
    forosBackup:{

    },
    articulos:{

    },
    articulosBackup:{

    },

    queryPersonalizada: [],

    // esta ruta es para volver
    rutaRegreso:"/",

    typeFilter: {value: true, vista: 'Search'}
  },

  mutations: {
    setBusqueda(state, data){
      //Se guarda la data en las variables del state
      state.videos = data.videos;
      state.videosBackup = data.videos;
      state.foros = data.foros;
      state.forosBackup = data.foros;
      state.articulos = data.articulos;
      state.articulosBackup = data.articulos;
      //console.log(state.videos)
    },

    // esta es una funcion de flecha (aun no sabemos la diferencia pero funciona)
    setRutaRegreso: (state, url) =>{
      state.rutaRegreso = url
    },

    changeTypeFilter: (state, vista) =>{
      if(vista == 'volver'){
        if(state.typeFilter.value == false && state.typeFilter.vista == 'Videos'){
          state.typeFilter.value = true;
          state.typeFilter.vista = 'search'
        }
      }
      else if( vista == 'Videos'){
        state.typeFilter.value = false;
        state.typeFilter.vista = 'Videos'
      }

      

      if (state.typeFilter.value == true && vista == 'SearchVideos'){
        state.typeFilter.value = false
      }
      else if( state.typeFilter.value == true){
        state.typeFilter.value = true;
      }
    },

    setQueryPersonalizada: (state, queryResult)=>{
      state.queryPersonalizada = queryResult;
    },

    setQuery: (state, q) => {
      state.query = q;
    },

    setDurationValueFilter: (state,value) => {
      state.videos = state.videosBackup;
      state.videos = state.videos.filter(function (el) {
        return el.duracion <= value; // Changed this so a home would match
      });
      //console.log(state.videos[0]["duracion"]);
    },

    setLanguageFilter: (state, langList) => {
      state.videos = state.videosBackup;
      state.foros = state.forosBackup;
      state.articulos = state.articulosBackup;
      //console.log(state.videosBackup)
      if (langList.length == 0){
        console.log("se quita el filtro")
      }
      else{
        var videos = [];
        var foros = [];
        var articulos = [];
        for(var j=0; j<langList.length; j++){
          for(var i=0; i<state.videosBackup.length; i++){
            if(state.videosBackup[i]["titulo"].indexOf(langList[j])!= -1) {
              videos.push(state.videosBackup[i])
            }
          };// end for Videos
          state.videos = videos;
          for(var i=0; i<state.forosBackup.length; i++){
            if(state.forosBackup[i]["pregunta"]["titulo"].indexOf(langList[j])!= -1) {
              foros.push(state.forosBackup[i])
            }
          }; //end for Foros
          state.foros = foros;
          for(var i=0; i<state.articulosBackup.length; i++){
            if(state.articulosBackup[i]["name"].indexOf(langList[j])!= -1) {
              articulos.push(state.articulosBackup[i])
            }
          }; //end for articulos
          state.articulos = articulos;
        } //end of for lanList
      }
    },

    setDateFilter: (state, fecha) =>{
      var videos = state.videos;
      var foros = state.foros;
      var articulos = [];
      var ed = new Date(fecha.desde).getTime();
      var sd = new Date(fecha.hasta).getTime();

      state.videos = videos.filter(video => {var time = new Date(video.fecha).getTime();
                             return (ed <= time && time <= sd);
                            });
      
      state.foros = foros.filter(foro => {var time = new Date(foro.pregunta.fecha).getTime();
        return (ed <= time && time <= sd);
        });
    },

    resetDateFilter: (state) =>{
      state.videos = state.videosBackup;
      state.foros = state.forosBackup;
      state.articulos = state.articulosBackup;
    }
  },
  
  actions: {
    async busqueda({commit}, query){
      let resultVideos = null;
      let resultForos = null;
      let resultArticulos = null;
      commit('setQuery', query)
      const url1 = "http://localhost:5000/video";
      const url2 = "http://localhost:5000/stack";
      const url3 = "http://localhost:5000/articles";
      // se consume el backend
      // seba y franco del futuro --> ***** añadir la query a la url ******
      await axios.get(url1, {params: {text: query}}).then((response) => {
      resultVideos = response.data;
      });
      await axios.get(url2, {params: {text: query}}).then((response) => {
        resultForos = response.data;
        console.log(resultForos)
      });
      await axios.get(url3, {params: {text: query}}).then((response) => {
        resultArticulos = response.data;
      });

      var result = {videos: resultVideos, foros: resultForos, articulos: resultArticulos};
      // Se llama a la función setBusqueda que está en Mutations
      commit('setBusqueda', result);

    },
    
    async busquedaQueryPersonalizada({commit}, recurso){
      let result = null;
      const url = "http://localhost:5000/";

      await axios.get(url+recurso.tipo+"/others", {params: {id: recurso.id}}).then((response) => {
        result = response.data;
      });
      console.log(result);
      commit('setQueryPersonalizada', result);
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
    },

    getTypeFilter: state => {
      return state.typeFilter.value;
    },

    getQueryPersonalizada: state => {
      return state.queryPersonalizada;
    },

    getQuery: state => {
      return state.query;
    },

    getDurationValueFilter: state => {
      return state.durationValueFilter;
    }
  },

  modules: {
  }
})
