<template>
<div>
  <b-navbar class="mynavbar py-lg-0 py-sm-4 py-4" toggleable="lg" type="dark" variant="">
    <b-navbar-brand href="#" class="ml-4" @click="irAInicio()">
        <b-icon class="mr-2" icon="house-door-fill" style="color:white"></b-icon>    
        Inicio
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
            <b-button squared class="navbar-btn py-lg-4" @click="irAComoUsar()">¿Como usar?</b-button>
        </b-nav-item>
        <b-nav-item href="#" >
            <b-button squared class="navbar-btn py-lg-4" @click="buscar()">Exlorar Temas</b-button>
        </b-nav-item>
        <b-nav-item href="#" >
            <b-button squared class="navbar-btn py-lg-4">Conacto</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {

  name: 'Navbar',

  methods: {
      // Función que trae la función busqueda definida en Store.actions (Vuex)
      ...mapActions(['busqueda']),
      ...mapMutations(['setRutaRegreso']),

      // Funcion que realiza la busqueda y llama a la vista de resultados
      async buscar(){
        var query = "a"
        await this.busqueda(query);
        this.setRutaRegreso('Home')
        this.$router.replace({name: 'Explorar'});
      },
      
      irAComoUsar(){
        this.setRutaRegreso('Home');
        this.$router.replace({name: 'Comousar'})
      },

      irAInicio(){
        this.$router.replace({name: 'Home'})
      }
    },
}
</script>

<style scoped>
.mynavbar{
    background-color: #2D2E40;
}

.navbar-btn{
    background-color: #2D2E40;
    border:none;
}

</style>