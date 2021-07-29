<template>
<!-- Fila pa buscar, filtrar y volver -->
<b-row class="text-center">
    <!-- Botón volver -->
    <b-col class="d-none d-sm-none d-md-block col-md-2 col-lg-2 mt-1 mt-sm-3">
        <b-button class="btn-volver" @click="volver()">
            <b-icon icon="arrow-left" class="lead"></b-icon>
            Volver
        </b-button>
    </b-col>
    <!-- Barra busqueda -->
    <b-col class="col-12 col-sm-12 col-md-8 col-lg-8 mt-sm-3 mt-3">
        <b-form-input placeholder="¿Qué estas buscando?" @input="showDismissibleAlert=false" v-model="query">
        </b-form-input>
    </b-col>
    <!-- Botón buscar -->
    <b-col class="col-6 col-sm-6 col-md-2 col-lg-2 mt-sm-3 mt-3">
        <b-button v-if="this.query != '' " class="btn-home-buscar" @click="buscar(query)">
            
            Buscar
        </b-button>
        <b-button v-else class="btn-home-buscar" @click="showDismissibleAlert=true">Buscar</b-button>
    </b-col>
    <b-alert class="mt-3 mb-0" v-model="showDismissibleAlert" variant="danger" dismissible>
            Debes escribir una query
          </b-alert>
    <b-col class="d-block d-sm-block d-md-block d-lg-none d-xl-none mt-3 col-6">
        <sidebar-filter></sidebar-filter>
    </b-col>

</b-row>
</template>

<script>
import SidebarFilter from '../components/SidebarFilter.vue'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return {
            query: '',
            showDismissibleAlert: false,
        }
    },

    name: "BarraBusqueda",

    components:{
        SidebarFilter

    },

    methods:{
        ...mapGetters(['getRutaRegreso']),
        ...mapMutations(['changeTypeFilter', 'setRutaRegreso']),
        ...mapActions(['busqueda']),

        volver(){
            this.changeTypeFilter('volver');
            let componente = this.getRutaRegreso();
            this.$router.replace({name: componente})
        },
        // Funcion que realiza la busqueda y llama a la vista de resultados
      async buscar(query){
        await this.busqueda(query);
        this.setRutaRegreso('Home')
        if(this.$route.name != 'Search'){
            this.$router.replace({name: 'Search'});
            console.log(this.$router.name)
        }
        
      }
    }
}
</script>

<style scoped>
    .btn-home-buscar{
        background-color: #F26E50;
        border-color: #F26E50;
        border-radius: 12px;
        width: 80%;
    }

    .btn-volver{
        background-color: white;
        color: black;
        border-radius: 12px;
        width: 80%;
    }
</style>
