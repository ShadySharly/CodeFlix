<template>
    <div class="search mt-5">
        <b-container>
            <!-- Fila pa buscar, filtrar y volver -->
            <b-row>
                <!-- Botón volver -->
                <b-col cols="2" md="2" lg="2">
                    <b-button class="btn-volver" :to="{name:'Home'}">
                         <b-icon icon="arrow-left" class="mr-2 lead"></b-icon> 
                        Volver
                    </b-button>
                </b-col>
                <!-- Barra busqueda --> 
                <b-col cols="8" md="8" lg="8">
                    <b-form-input placeholder="¿Qué estas buscando?">
                    </b-form-input>
                </b-col>
                <!-- Botón buscar -->
                <b-col cols="2" md="2" lg="2">
                    <b-button class="btn-home-buscar" :to="{name:'Search'}">
                        Buscar
                    </b-button>
                </b-col>
            </b-row>

            <!-- Fila Resultados y filtros -->
            <b-row class="mt-5 "> 
                <!-- Columna Filtros -->
                <b-col class="d-none d-sm-none d-md-none d-lg-block" >
                    <vertical-filter></vertical-filter>
                </b-col>
                <!-- Columna Resultados -->
                <b-col cols="8">
                    <result></result>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import VerticalFilter from '../components/VerticalFilter.vue'
import Result from '../components/Result.vue'
  export default {
    name: 'Search',

    components: {
        VerticalFilter,
        Result,
    },
  }
</script>

<style scoped>
    .btn-home-buscar{
        background-color: #F26E50;
        border-color: #F26E50;
        width: 70%;
        border-radius: 12px;
    }

    .btn-volver{
        background-color: white;
        color: black;
        border-radius: 12px;
    }
    
    

</style>