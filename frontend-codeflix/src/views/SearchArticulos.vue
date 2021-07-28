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
                                                 <b-card tag="article" class="mb-2 item card-articulo">

                        <b-card-title :title=articulo.titulo>
                        </b-card-title>

                        <div class="mx-2 mb-2 px-1" style="font-size:13px;color:grey;">
                            <span class="mx-1">{{articulo.fecha}}</span>
                            |
                            <span class="mx-1">{{articulo.autor}} votos</span>
                        </div>

                        <hr>

                        <div class="articulo-contenido">
                            <b-card-text>
                            {{articulo.contenido}}
                        </b-card-text>
                        </div>

                        <div class="mt-3">
                            <b-button pill variant="success" dark :href="articulo.link" target="_blank">
                                Ir al sitio web
                                <b-icon icon="arrow-up-right"></b-icon>
                            </b-button>
                        </div>

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

.card-articulo{
    

}
.articulo-contenido{
    overflow: hidden;
    max-height: 500px;
}
</style>