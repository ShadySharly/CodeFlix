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
                                <a href="#" class="link-card">
                                    <!-- Card con los vídeos -->
                                    <b-card
                                        :title= video.name
                                        :img-src= video.url_imagen_video
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        class="mb-2 item"
                                    >
                                    <a href="#" class="stretched-link"></a>
                                    <b-card-title class="mt-md-2 ml-md-2">{{video.titulo}}</b-card-title>
                                    <b-card-body class="p-lg-2">
                                        <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3 ml-lg-0"></b-avatar>
                                        <span class="mr-auto">Super Kitty</span>
                                    </b-card-body>
                                    </b-card>
                                </a>
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

export default {
    name: 'SearchVideos',

    data(){
    return{
      videos: [
            {
                titulo: "video_1",
                autor: "autor_1",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            },
            {
                titulo: "video_2",
                autor: "autor_2",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            },
            {
                titulo: "video_3",
                autor: "autor_3",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            },
            {
                titulo: "video_4",
                autor: "autor_4",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            },
            {
                titulo: "video_5",
                autor: "autor_5",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            },
            {
                titulo: "video_6",
                autor: "autor_6",
                url_imagen_autor: "url",
                link_video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
                url_imagen_video: "https://i.ytimg.com/an_webp/zpOULjyy-n8/mqdefault_6s.webp?du=3000&sqp=CO-piYcG&rs=AOn4CLBv_eQfxVHmfIewuSjgIVwoNmBL0Q",
            }
            ],
        }
    },

    components:{
        VerticalFilter,
        BarraBusqueda,

    }
}
</script>

<style scoped>
    .container-videos{
        background: rgb(226,226,226);
        background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 100%); 
        height: 100%;
        width: 100%;
        border: 1px solid #ddd;
    }
    .link-card{
        text-decoration: none;
        color: black;
    }
    
</style>
