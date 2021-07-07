<template>
    <div class="mt-1 mt-sm-2 mt-md-5 mt-lg-5">
        <b-container>
            <!-- Fila pa buscar, filtrar y volver -->            
            <b-row class="text-center" align-h="center">
                <!-- Botón volver -->
                <b-col class="d-none d-sm-none d-md-block col-md-2 col-lg-2 mt-1 mt-sm-3">
                    <b-button class="btn-volver" :to="{name:'Home'}">
                         <b-icon icon="arrow-left" class="lead"></b-icon> 
                        Volver
                    </b-button>
                </b-col>
                <!-- Barra busqueda --> 
                <b-col class="col-12 col-sm-12 col-md-8 col-lg-8 mt-sm-3 mt-3">
                    <b-form-input placeholder="¿Qué estas buscando?">
                    </b-form-input>
                </b-col>
                <!-- Botón buscar -->
                <b-col class="col-6 col-sm-6 col-md-2 col-lg-2 mt-sm-3 mt-3">
                    <b-button class="btn-home-buscar" :to="{name:'Search'}">
                        Buscar
                    </b-button>
                </b-col>
                <b-col class="d-block d-sm-block d-md-block d-lg-none d-xl-none mt-3 col-6">
                    <sidebar-filter></sidebar-filter>
                </b-col>
                
            </b-row>

            <!-- Fila Resultados y filtros -->
            <b-row class="mt-5 "> 
                <!-- Columna Filtros -->
                <b-col class="d-none d-sm-none d-md-none d-lg-block col-lg-3" >
                    <vertical-filter></vertical-filter>
                </b-col>
                <!-- Columna Resultados -->
                <b-col class="col-md-12 col-lg-9">
                    
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
import SidebarFilter from '../components/SidebarFilter.vue'

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
        SidebarFilter

    }
}
</script>

<style scoped>
    .container-foros{
        background: rgb(226,226,226);
        background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 100%); 
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
    
</style>
