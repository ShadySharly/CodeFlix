<template>
  <section class="mt-lg-5">
    <b-container class="container-general mx-auto mt-3 p-5">
       <b-row class="pt-0 pb-3 justify-content-center">
        <b-col class="col-md-3 col-7 pt-0" >
          <b-img :src="require('../assets/codeflix-icon.gif')" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col class="col-6 col-md-3" align-self="end">
          <div class="d-flex">
            <h1>
            CodeFlix
          </h1>
          <h6>
            Search
          </h6>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-input placeholder="¿Qué estas buscando?" @input="showDismissibleAlert=false" v-model="query" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-4 mt-2 justify-content-center">
        <b-col class="col-6 col-md-3" >
          
          <b-button v-if="this.query != '' " class="btn-home-buscar" @click="buscar(query)" >Buscar</b-button>
          <b-button v-else class="btn-home-buscar" @click="showDismissibleAlert=true">Buscar</b-button>
           
        </b-col>
        <b-col class="col-6 col-md-3">
          <b-button class="btn-home-explorar" @click="explorar()">¿No sabes que buscar?</b-button>
        </b-col>
      </b-row>

      <b-row>
        <!-- alerta -->
           <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Debes escribir una query
          </b-alert>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

  export default {
    
    data () {
      return{
        query: '',
        showDismissibleAlert: false,
      }
    },
    
    name: 'Home',

    components: {
    },

    methods: {
      // Función que trae la función busqueda definida en Store.actions (Vuex)
      ...mapActions(['busqueda']),
      ...mapMutations(['setRutaRegreso']),

      // Funcion que realiza la busqueda y llama a la vista de resultados
      async buscar(query){
        await this.busqueda(query);
        this.setRutaRegreso('Home')
        this.$router.replace('Search');
      },
      
      async explorar(){
        var query = "a"
        await this.busqueda(query);
        this.setRutaRegreso('Home')
        this.$router.replace({name: 'Explorar'});
      },
    },
  }
</script>

<style scoped>
.section-home{
  background-color: cornflowerblue;
}

.btn-home-buscar{
  background-color: coral;
  border-color: coral;
  width: 100%;
  border-radius: 55px;
}

.btn-home-explorar{
  background-color: #FFC463;
  border-color: #FFC463;
  width: 100%;
  color: #2D2E40;
  border-radius: 55px;
}

.container-general{
  background: rgb(226,226,226);
  background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 100%); 
}
</style>
