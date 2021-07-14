<template>
<div class="background-panel p-3">
    <h3>Mostrando Resultados de: "{{query}}"</h3>

    <!--Mostrando videos-->
    <b-container class=" m-1 p-2">
        <b-row>
            <div class="m-0 p-0">
                <b-button variant="link" class="link" @click="filtrarPorVideos()">
                    Videos
                    <b-icon font-scale="0.9" icon="arrow-up-right-circle"></b-icon>
                </b-button>
            </div>
        </b-row>
        <b-row class="no-gutters">
            <b-col cols="1" class="vertical-align">

                <!-- Botón izquierda -->

                <b-button class="button-icon ml-2 px-2" @click="scroll_left1">
                    <b-icon icon="chevron-left" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>
            <b-col class="wrapper1" cols="10">
                <b-col v-for="(video, index) in videos" v-bind:title="video.titulo" :key="index" > 
                    <!-- Card con los vídeos -->

                    <b-card :title=video.name :img-src=video.thumbnail img-alt="Image" img-top tag="article" class="item crop" no-body>
                        <a href="#" v-bind:class="queryPersonalizada" @click="queryPersonalizada(video.id)" class="stretched-link"></a>

                        <b-card-title class="mt-md-2 mb-0 ml-md-2 p-2">{{video.titulo}}</b-card-title>
                        <b-card-body class="p-lg-2">
                            <b-avatar variant="info" :src="video.thumbnailAutor" class="mr-3 ml-lg-0"></b-avatar>
                            <span class="mr-auto">{{video.autor}}</span>
                        </b-card-body>
                        <div class="mx-2 mb-2 px-1" style="font-size:13px;color:grey;">
                            <span class="mx-1">{{video.fecha}}</span>
                            |
                            <span class="mx-1">{{video.duracion}} min</span>
                        </div>
                    </b-card>
                </b-col>
            </b-col>

            <!-- Botón derecha -->

            <b-col cols="1" class="vertical-align">
                <b-button class="button-icon ml-2" @click="scroll_right1">
                    <b-icon icon="chevron-right" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>

        </b-row>
    </b-container>

    <!--Mostrando foros-->
    <b-container class=" m-2 p-3">
        <b-row>
            <div class="m-0 p-0">
                <b-button variant="link" class="link" @click="filtrarPorForos()">
                    Foros
                    <b-icon font-scale="0.9" icon="arrow-up-right-circle"></b-icon>
                </b-button>
            </div>
        </b-row>
        <b-row class="no-gutters">
            <b-col cols="1" class="vertical-align">
                <b-button class="button-icon ml-2 px-2" @click="scroll_left2">
                    <b-icon icon="chevron-left" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>
            <b-col class="wrapper2" cols="10">

                    <!-- Card con los foros -->
                <b-col v-for="(foro, index) in foros" :key="index">

                  <b-card img-alt="Image" img-top tag="foro" class="item crop" no-body>
                        <a href="#" v-bind:class="queryPersonalizada" @click="queryPersonalizada(1)" class="stretched-link"></a>
                        <b-card-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" height="40px" width="100px" alt="Image" top class="pr-4 mr-5 mb-2 m-2">
                            </b-card-img>

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
            </b-col>
            <b-col cols="1" class="vertical-align">
                <b-button class="button-icon ml-2" @click="scroll_right2">
                    <b-icon icon="chevron-right" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>
        </b-row>
    </b-container>

    <!--Mostrando articulos-->
    <b-container class=" m-2 p-3">
        <b-row>
            <h4>Artículos y Tutoriales</h4>
        </b-row>
        <b-row class="no-gutters">
            <b-col cols="1" class="vertical-align">
                <b-button class="button-icon ml-2 px-2" @click="scroll_left3">
                    <b-icon icon="chevron-left" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>
            <b-col class="wrapper3" cols="10">
                <b-col v-for="articulo in articulos" v-bind:title="articulo.name" :key="articulo.id">
                    <!-- Card con los artículos y foros -->
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
            </b-col>
            <b-col cols="1" class="vertical-align">
                <b-button class="button-icon ml-2" @click="scroll_right3">
                    <b-icon icon="chevron-right" font-scale="2" class="mr-2 lead icon-chevron"></b-icon>
                </b-button>
            </b-col>
        </b-row>
    </b-container>

</div>
</template>

<!-- ***********************************************   Script   ******************************************************************** -->

<script>
import {
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            query: '',
            videos: [],
            foros: [],
            articulos: [],

        }
    },

    computed: {
        ...mapGetters(['getVideos', 'getForos', 'getArticulos', 'getRutaRegreso', 'getQuery'])
    },

    mounted() {
        this.query = this.getQuery;
        this.videos = this.getVideos;
        this.foros = this.getForos;
        this.articulos = this.getArticulos;
    },

    created() {
        this.setRutaRegreso('Home')
    },

    methods: {
        ...mapMutations(['setRutaRegreso', 'changeTypeFilter']),

        ...mapActions(['busquedaQueryPersonalizada']),

        async queryPersonalizada(id) {
            console.log(id);
            await this.busquedaQueryPersonalizada(id);
            this.$router.replace({
                name: "Video"
            });
        },

        filtrarPorVideos() {
            this.changeTypeFilter('Videos');
            this.setRutaRegreso('Search');
            this.$router.replace({
                name: 'SearchVideos'
            })
        },

        filtrarPorForos() {
            this.setRutaRegreso('Search');
            this.$router.replace({
                name: 'SearchForos'
            })
        },

        scroll_left1() {
            let content = document.querySelector(".wrapper1");
            content.scrollLeft -= 280;
        },
        scroll_right1() {
            let content = document.querySelector(".wrapper1");
            content.scrollLeft += 280;
        },
        scroll_left2() {
            let content = document.querySelector(".wrapper2");
            content.scrollLeft -= 280;
        },
        scroll_right2() {
            let content = document.querySelector(".wrapper2");
            content.scrollLeft += 280;
        },
        scroll_left3() {
            let content = document.querySelector(".wrapper3");
            content.scrollLeft -= 280;
        },
        scroll_right3() {
            let content = document.querySelector(".wrapper3");
            content.scrollLeft += 280;
        },
    }
}
</script>

<!-- ***********************************************   Estilos ******************************************************************** -->

<style scoped>
/* Background panel */
.background-panel {
    height: 100%;
    width: 100%;
}

/* Bloque de videos */
.wrapper1 {
    display: flex;
    overflow-x: auto;
    width: 80%;
}

/* Bloque foros */
.wrapper2 {
    display: flex;
    overflow-x: auto;
    width: 80%;
}

/* Bloque de articulos */
.wrapper3 {
    display: flex;
    overflow-x: auto;
    width: 80%;
}

/* Cada casilla del tópico */
.wrapper1 .item {
    min-width: 250px;
    background-color: white;
    margin-right: 1px;
}

.wrapper2 .item {
    min-width: 250px;
    background-color: white;
    margin-right: 1px;

}

.wrapper3 .item {
    min-width: 250px;
    background-color: white;
    margin-right: 1px;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Eliminando scroll de cada bloque */
::-webkit-scrollbar {
    -ms-overflow-style: auto;
    /* for Internet Explorer, Edge */
    display: auto;
    /* for Chrome, Safari, and Opera */
}

/* Quitando scroll en Mozilla (acá poner estilos para mozilla) */
* {
    scrollbar-width: none;
    scrollbar-track-color: #F26E50;
}

/* Si existe el scroll, el fondo será gris*/
::-webkit-scrollbar-track {
    background: rgb(201, 197, 197);

}

/* Si existe el scroll, este será naranjo*/
::-webkit-scrollbar-thumb {
    background: #F26E50;

}

/* Botones avanzar izq y der */
.button-icon {
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 30px;
    border-color: transparent;
    background-color: #488479;
    display: flex;

}

/*Centrar botones */
.vertical-align {
    display: flex;
    align-items: center;
}

/* Iconos */
.icon-chevron {
    color: white;
    min-height: 100%;
}

/*Etiquetas*/
.tag {}

.btn-ir-sitio {
    background-color: #488479;
    border-color: #488479;

}

.link-card {
    text-decoration: none;
    color: black;
}

.link {
    font-size: 1.5rem;
    text-decoration: none;
    color: #2D2E40;
}

.link:hover {
    color: #F26E50;
}

.crop {
    overflow: hidden;
    height: 100%;

}
</style>
