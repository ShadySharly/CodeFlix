<template>
<div>
    <b-container class="my-3">
        <!-- Fila pa buscar, filtrar y volver -->
        <barra-busqueda></barra-busqueda>
    </b-container>

    <b-container class="container-general my-4 mx-auto px-3 py-2">
        <b-row class="mt-2">
            <b-col class="col-lg-8 col-12">
                <b-card no-body class="p-0">
                    <b-embed type="iframe" aspect="16by9" :src="video.url" allowfullscreen></b-embed>
                    <b-card-body>
                        <b-card-title>
                            {{video.titulo}}
                        </b-card-title>
                        <div class="d-flex justify-content-start align-items-center">
                            <b-avatar variant="info" :src="video.thumbnailAutor" class="mr-3"></b-avatar>
                            <span class="mr-2" style="min-width:80px">{{video.autor}}</span>
                            <div class="flex-grow-1 mx-2">
                                <b-badge v-for="tag in video.tags" :key="tag" pill variant="success" class="mx-1 tag">
                                    <a href="#" v-bind:class="buscarTag" @click="buscarTag(tag)">
                                        {{tag}}
                                    </a>
                                </b-badge>
                            </div>
                        </div>
                        <div class="mx-2 my-2 px-1" style="font-size:15px;color:grey;">
                      <span class="mx-1">{{video.fecha}}</span>
                      |
                      <span class="mx-1">{{video.duracion}} min</span>
                    </div>
                        <hr>
                        <div class="px-2 contenido-text-video">
                            <b-card-text class="">
                                {{video.descripcion}}
                            </b-card-text>
                        </div>
                        <div class="mt-2" v-if="this.extendido1 != 'auto'">
                            <b-button variant="outline-warning" @click="cambiarHeightVideo()">
                                mostrar descripción completa
                            </b-button>
                        </div>
                        <div class="mt-2" v-else>
                            <b-button variant="outline-secondary" @click="cambiarHeightVideo()">
                                mostrar menos
                            </b-button>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>

            <b-col class="col-lg-4 ">
                <h4>Artículos y Tutoriales</h4>
                <b-card>
                    <div class="mb-2">
                        <h1>
                            <a href="#">
                                {{articulo.pagina}}
                            </a>
                        </h1>
                    </div>
                    <div class="mb-3">
                        <b-card-title style="font-weight:800">{{articulo.titulo}}</b-card-title>
                        <b-card-sub-title>{{articulo.autor}}  |  {{articulo.fecha}}</b-card-sub-title>
                    </div>
                    <div class="contenido-text-articulo">
                        <b-card-text>
                        {{articulo.contenido}}
                    </b-card-text>
                    </div>
                    <div class="mt-2" v-if="this.extendido2 != 'auto'">
                            <b-button variant="outline-warning" @click="cambiarHeightArticulo()">
                                mostrar descripción completa
                            </b-button>
                        </div>
                        <div class="mt-2" v-else>
                            <b-button variant="outline-secondary" @click="cambiarHeightArticulo()">
                                mostrar menos
                            </b-button>
                        </div>
                    <template #footer>
                        <div class="d-flex my-1 justify-content-end">
                            
                            <b-button pill variant="success" dark :href="articulo.link" target="_blank">
                                Ir al sitio web
                                <b-icon icon="arrow-up-right"></b-icon>
                            </b-button>
                        </div>
                    </template>
                </b-card>
            </b-col>

        </b-row>

        <b-row class="my-3">
            <b-col class="col-12">
                <b-card class="card-foro">
                    <div class="d-flex justify-content-between mb-3">
                        <b-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" style="width:20%"></b-img>
                        <b-button pill style="background-color:darkorange;color:black;" class="my-1" :href="foro.pregunta.link" target="_blank">
                            Ir al sitio web
                            <b-icon icon="arrow-up-right"></b-icon>
                        </b-button>
                    </div>
                    <b-row class="my-2">
                        <b-col class="col-lg-1 col-1" align-self="center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <h4>
                                        <b-icon icon="hand-thumbs-up"></b-icon>
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        <span class="mx-2">{{foro.pregunta.puntaje}}</span>
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        <b-icon icon="hand-thumbs-down"></b-icon>
                                    </h4>
                                </div>
                            </div>
                        </b-col>
                        <b-col class="col-lg-11 col-11">
                            <b-card>
                                <b-card-title style="font-weight:bold">
                                    {{foro.pregunta.titulo}}
                                </b-card-title>
                                <div class="d-flex my-2">
                                    <div class="mr-4">
                                        <span class="mr-2" style="font-size:14px; color:grey">Preguntado:</span>
                                    <span style="font-size:14px; color:black">{{foro.pregunta.fecha}}</span>
                                    </div>
                                    <div>
                                        <span class="mr-2" style="font-size:14px; color:grey">Puntaje:</span>
                                    <span style="font-size:14px; color:black">{{foro.pregunta.puntaje}}</span>
                                    </div>
                                </div>
                                <b-card-text>
                                    <div v-html="foro.pregunta.contenido">
                                    </div>
                                </b-card-text>
                                <div>
                                    <b-avatar variant="info" :src="foro.pregunta.imagenAutor" class="mr-3 ml-lg-0"></b-avatar>
                            <span class="mr-auto">{{foro.pregunta.autor}}</span>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col class="col-lg-1 col-1" align-self="center">
                            <div class="d-flex flex-column align-items-center">
                                <div>
                                    <h4>
                                        <b-icon icon="hand-thumbs-up"></b-icon>
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        <span class="mx-2">{{foro.respuesta.puntaje}}</span>
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        <b-icon icon="hand-thumbs-down"></b-icon>
                                    </h4>
                                </div>
                            </div>
                        </b-col>
                        <b-col class="col-lg-11 col-11">
                            <b-card>
                                <b-card-title style="font-weight: bold">
                                    Top Respuesta
                                </b-card-title>
                                <div class="d-flex my-2">
                                    <div class="mr-4">
                                        <span class="mr-2" style="font-size:14px; color:grey">Preguntado:</span>
                                    <span style="font-size:14px; color:black">{{foro.respuesta.fecha}}</span>
                                    </div>
                                    <div>
                                        <span class="mr-2" style="font-size:14px; color:grey">Puntaje:</span>
                                    <span style="font-size:14px; color:black">{{foro.respuesta.puntaje}}</span>
                                    </div>
                                </div>
                                <b-card-text >
                                  <div v-html="foro.respuesta.contenido">
                                    </div>
                                </b-card-text>
                                <div>
                                    <b-avatar variant="info" :src="foro.respuesta.imagenAutor" class="mr-3 ml-lg-0"></b-avatar>
                            <span class="mr-auto">{{foro.respuesta.autor}}</span>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>

                </b-card>
            </b-col>
        </b-row>
    </b-container>

</div>
</template>

<script>
import BarraBusqueda from '../components/BarraBusqueda.vue'
import {mapActions, mapMutations,
    mapGetters
} from 'vuex'

export default {
    data() {
        return {
            video: {},
            foro: {},
            articulo: {},
            heightVideo: "400px",
            heightArticulo: "835px",
            extenderVideo: true,
            extenderArticulo: false,
            extendido1: "400px",
            extendido2: "835px"
            
        }
    },

    name: "Video",
    components: {
        BarraBusqueda
    },

    computed: {
        ...mapGetters(['getQueryPersonalizada']),
        
    },

    mounted() {
        this.video = this.getQueryPersonalizada.video;
        this.foro = this.getQueryPersonalizada.foro;
        this.articulo = this.getQueryPersonalizada.articulo;
    },

    methods: {
              ...mapActions(['busqueda']),
      ...mapMutations(['setRutaRegreso']),
        async buscarTag(query){
            await this.busqueda(query);
            this.setRutaRegreso('Home')
            this.$router.replace({name: 'Search'});
        },

        cambiarHeightVideo(){
            if(this.extendido1 == "auto"){
                document.querySelector(".contenido-text-video").style.maxHeight = this.heightVideo;
                
                this.extendido1 = this.heightVideo;
                this.extenderVideo = true
                console.log(document.querySelector(".contenido-text-video").style.maxHeight)
            }
            else{
                document.querySelector(".contenido-text-video").style.maxHeight = "100%";
                console.log(document.querySelector(".contenido-text-video").style.maxHeight)
                this.extendido1 = "auto";
                this.extenderVideo = false;
                
            }
        },

        cambiarHeightArticulo(){
            if(this.extendido2 == "auto"){
                document.querySelector(".contenido-text-articulo").style.maxHeight = this.heightArticulo;
                
                this.extendido2 = this.heightArticulo;
                this.extenderArticulo = true
                console.log(document.querySelector(".contenido-text-articulo").style.maxHeight)
            }
            else{
                document.querySelector(".contenido-text-articulo").style.maxHeight = "100%";
                console.log(document.querySelector(".contenido-text-articulo").style.maxHeight)
                this.extendido2 = "auto";
                this.extenderArticulo = false;
                
            }
        }
    }
}
</script>

<style scoped>
.container-general {

    width: 100%;
}

.tag {
    border-radius: 13px;
    color: black;
}

.tag a{
    text-decoration: none;
    color: black;
}

.card-foro {
    background: rgb(255, 196, 99);
    background: linear-gradient(180deg, rgba(255, 196, 99, 0.7245098723082983) 0%, rgba(255, 233, 198, 0.7329132336528361) 100%);
}

.contenido-text-video{
    white-space:pre-wrap;
    overflow: hidden;
    max-height: 400px;
}

.contenido-text-articulo{
    white-space:pre-wrap;
    overflow: hidden;
    max-height: 835px;
}

</style>
