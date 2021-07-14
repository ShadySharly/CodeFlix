<template>
<div class="mt-1 mt-sm-2 mt-md-5 mt-lg-5">
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

                <b-container class="container-videos">
                    <div class="py-md-3">
                        <h3>
                            Mostrando Solo Videos
                        </h3>
                    </div>
                    <b-row>
                        <b-col class="col-lg-4 col-md-6 col-12 col-sm-12 mb-md-3" v-for="(video, index) in videos" :key="index">
                                <!-- Card con los vídeos -->
                                <b-card :title=video.name :img-src=video.thumbnail img-alt="Image" img-top tag="article" class="item" no-body>
                                    <a href="#" v-bind:class="queryPersonalizada" @click="queryPersonalizada(video.id)" class="stretched-link"></a>

                                    <b-card-title class="mt-md-2 mb-0 ml-md-2 p-2">{{video.titulo}}</b-card-title>
                                    <b-card-body class="p-lg-2">
                                        <b-avatar variant="info" :src="video.thumbnailAutor" class="mr-3 ml-lg-0"></b-avatar>
                                        <span class="mr-auto">Super Kitty</span>
                                    </b-card-body>
                                    <div class="mx-2 mb-2 px-1" style="font-size:13px;color:grey;">
                                        <span class="mx-1">{{video.fecha}}</span>
                                        |
                                        <span class="mx-1">{{video.duracion}} min</span>
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
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'SearchVideos',

    data() {
        return {
            videos: [],
        }
    },

    components: {
        VerticalFilter,
        BarraBusqueda,

    },

    computed: {
        ...mapGetters(['getVideos']),
    },

    mounted(){
        this.videos = this.getVideos;
    },

    methods: {
        ...mapActions(['busquedaQueryPersonalizada']),
        async queryPersonalizada(id){
            console.log(id);
            await this.busquedaQueryPersonalizada(id);
            this.$router.replace({name: "Video"});
        },
    }
}
</script>

<style scoped>
.container-videos {
    background: rgb(226, 226, 226);
    background: linear-gradient(180deg, rgba(226, 226, 226, 1) 0%, rgba(255, 255, 255, 1) 100%);
    height: 100%;
    width: 100%;
    border: 1px solid #ddd;
}

.link-card {
    text-decoration: none;
    color: black;
}
</style>
