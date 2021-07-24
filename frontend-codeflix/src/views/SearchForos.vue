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
                                Mostrando Solo Foros
                            </h3>
                        </div>
                        <b-row>
                            <b-col class="col-lg-4 col-md-6 col-12 col-sm-12 mb-md-3" v-for="(foro, index) in foros" :key="index">
                                                  <b-card img-alt="Image" img-top class="item crop" no-body>
                        <a href="#" v-bind:class="queryPersonalizada" @click="queryPersonalizada(1)" class="stretched-link"></a>
                        <b-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" height="40px" width="230px" alt="Image" top class="pr-4 mr-5 mb-2 m-2">
                            </b-img>

                        <b-card-title class="mt-md-2 mb-0 ml-md-2 p-2">{{foro.pregunta.titulo}}</b-card-title>
                        <b-card-body class="p-lg-2">
                            <b-avatar variant="info" :src="foro.pregunta.imagenAutor" class="mr-3 ml-lg-0"></b-avatar>
                            <span class="mr-auto">{{foro.pregunta.autor}}</span>
                        </b-card-body>
                        <div class="mx-2 mb-2 px-1" style="font-size:13px;color:grey;">
                            <span class="mx-1">{{foro.pregunta.fecha}}</span>
                            |
                            <span class="mx-1">{{foro.pregunta.puntaje}} votos</span>
                        </div>
                        <template #footer>
                            <b-badge v-for="(tag, indice) in foro.pregunta.tags" :key=indice pill variant="warning" class="mr-2" style="border-radius: 20px; color:black; text-decoration: none" href="/">
                                {{tag}}
                            </b-badge>
                        </template>
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
import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            foros: [],
        }
    },
    name: 'SearchForos',

    components: {
        VerticalFilter,
        BarraBusqueda
    },
    computed: {
        ...mapGetters(['getForos']),
    },

    mounted(){
        this.foros = this.getForos;
    },
    methods:{
        ...mapActions(['busquedaQueryPersonalizada']),
        async queryPersonalizada(id){
            console.log(id);
            await this.busquedaQueryPersonalizada(id);
            this.$router.replace({name: "Foro"});
        }
    }
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
</style>