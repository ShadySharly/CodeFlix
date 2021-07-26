<template>
    <div class="mt-1 mt-sm-2 mt-md-5 mt-lg-3 mb-5">
        <b-container>
            <!-- Fila pa buscar, filtrar y volver -->            
            <barra-busqueda></barra-busqueda>

            <!-- Fila Resultados y filtros -->
            <b-row class="mt-5 "> 
                <!-- Columna Filtros -->
                <b-col class="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-2">
                    <vertical-filter></vertical-filter>
                </b-col>
                <!-- Columna Resultados -->
                <b-col class="col-md-12 col-lg-9 col-xl-10">
                    
                    <b-container class="container-foros">
                        <div class="py-md-3">
                            <h3>
                                Mostrando Solo Artículos
                            </h3>
                        </div>
                        <b-row>
                            <b-col class="col-lg-4 col-md-6 col-12 col-sm-12 mb-md-3" v-for="(articulo, index) in articulos" :key="index">
                                                 <b-card tag="article" class="mb-2 item">

                        <b-card-title :title=articulo.name>
                        </b-card-title>

                        <b-card-text>
                            {{articulo.contenido}}
                        </b-card-text>

                        <b-button pill class="btn-ir-sitio" :href="articulo.url">
                            Ir al sitio web
                            <b-icon icon="arrow-up-right" class="ml-2"></b-icon>
                        </b-button>

                    </b-card>

                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import VerticalFilter from '../components/VerticalFilter.vue'
import BarraBusqueda from '../components/BarraBusqueda.vue'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            articulos: [],
        }
    },
    name: 'SearchArticulos',

    components: {
        VerticalFilter,
        BarraBusqueda
    },
    computed: {
        ...mapGetters(['getArticulos']),
    },

    mounted(){
        this.articulos = this.getArticulos;
    },
}
</script>

<style scoped>
    .container-foros{
        height: 100%;
        width: 100%;
            border: 1px solid #ddd;
    }
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
    .link-card{
        text-decoration: none;
        color: black;
    }
    
    .crop {
    overflow: hidden;
    height: 100%;

}
.btn-ir-sitio {
    background-color: #488479;
    border-color: #488479;

}
</style>