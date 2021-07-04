<template>

  <div class="background-panel p-3"> 
      <h1>Mostrando Tópicos más buscados</h1> 
        <!--Mostrando articulos-->
      <b-container class=" m-2 p-3">
        <b-row>
          <h4>Artículos y Tutoriales</h4>
        </b-row>
        <b-row class="no-gutters">
          <b-col cols="1" class="vertical-align">
            <b-button class="button-icon ml-2" @click="scroll_left1">
              <b-icon icon="chevron-left" class="mr-2 lead icon-chevron"></b-icon>
            </b-button>
          </b-col>
          <b-col class="wrapper1 no-gutters" cols="10">
            <b-col  v-for="articulo in articulos" v-bind:title="articulo.name" :key="articulo.id">
              <!-- Card con los artículos y foros -->
              <b-card
                :title= articulo.name
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 item"
              >
              <b-card-text>
                {{articulo.name}}
              </b-card-text>
              <a href="#" class="stretched-link"></a>
             </b-card>
            </b-col>
          </b-col>
          <b-col cols="1" class="vertical-align">
             <b-button class="button-icon ml-2" @click="scroll_right1">
                <b-icon icon="chevron-right" class="mr-2 lead icon-chevron"></b-icon>
             </b-button>
          </b-col>
        </b-row>
      </b-container>
      <!--Mostrando videos-->
      <b-container class=" m-2 p-3">
        <b-row>
          <h4>Videos</h4>
        </b-row>
        <b-row class="no-gutters">
          <b-col cols="1" class="vertical-align">
            <b-button class="button-icon ml-2" @click="scroll_left2">
              <b-icon icon="chevron-left" class="mr-2 lead icon-chevron"></b-icon>
            </b-button>
          </b-col>
          <b-col class="wrapper2 no-gutters" cols="10">
            <b-col  v-for="video in videos" v-bind:title="video.name" :key="video.id">
              <!-- Card con los vídeos -->
              <b-card
                :title= video.name
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 item"
              >
              <b-card-text>
                {{video.name}}
              </b-card-text>
              <a href="#" class="stretched-link"></a>
             </b-card>
            </b-col>
          </b-col>
          <b-col cols="1" class="vertical-align">
             <b-button class="button-icon ml-2" @click="scroll_right2">
                <b-icon icon="chevron-right" class="mr-2 lead icon-chevron"></b-icon>
             </b-button>
          </b-col>
        </b-row>
      </b-container>

        <!--Mostrando foros-->
        
      <b-container class=" m-2 p-3">
        <b-row>
          <h4>Foros</h4>
        </b-row>
        <b-row class="no-gutters">
          <b-col cols="1" class="vertical-align">
            <b-button class="button-icon ml-2" @click="scroll_left3">
              <b-icon icon="chevron-left" class="mr-2 lead icon-chevron"></b-icon>
            </b-button>
          </b-col>
          <b-col class="wrapper3 no-gutters" cols="10">
            <b-col  v-for="foro in foros" v-bind:title="foro.name" :key="foro.id">
              <!-- Card con los foros -->
              <b-card
                :title= foro.name
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2 item"
              >
              <b-card-text>
                {{foro.name}}
              </b-card-text>
              <a href="#" class="stretched-link"></a>
             </b-card>
            </b-col>
          </b-col>
          <b-col cols="1" class="vertical-align">
             <b-button class="button-icon ml-2" @click="scroll_right3">
                <b-icon icon="chevron-right" class="mr-2 lead icon-chevron"></b-icon>
             </b-button>
          </b-col>
        </b-row>
      </b-container>
  
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      videos: [
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 4" },
        { name: "Video 5" },
        { name: "Video 6" },
        { name: "Video 7" },
        { name: "Video 8" },
        { name: "Video 9" },
        { name: "Video 10" },
        { name: "Video 11" },
        { name: "Video 12" },
        { name: "Video 13" }
    ],
    foros: [
        { name: "Foro 1" },
        { name: "Foro 2" },
        { name: "Foro 3" },
        { name: "Foro 4" },
        { name: "Foro 5" },
        { name: "Foro 6" },
        { name: "Foro 7" },
        { name: "Foro 8" },
        { name: "Foro 9" },
        { name: "Foro 10" },
        { name: "Foro 11" },
        { name: "Foro 12" },
        { name: "Foro 13" }
    ],
    articulos: [
      { name: "Artículos 1" },
      { name: "Artículos 2" },
      { name: "Artículos 3" },
      { name: "Artículos 4" },
      { name: "Artículos 5" },
      { name: "Artículos 6" },
      { name: "Artículos 7" },
      { name: "Artículos 8" },
      { name: "Artículos 9" },
      { name: "Artículos 10" },
      { name: "Artículos 11" },
      { name: "Artículos 12" },
      { name: "Artículos 13" }
    ],
  
    }
  },

   methods: {
    scroll_left1() {
      let content = document.querySelector(".wrapper1");
      content.scrollLeft -= 200;
    },
    scroll_right1() {
      let content = document.querySelector(".wrapper1");
      content.scrollLeft += 200;
    },
    scroll_left2() {
      let content = document.querySelector(".wrapper2");
      content.scrollLeft -= 200;
    },
    scroll_right2() {
      let content = document.querySelector(".wrapper2");
      content.scrollLeft += 200;
    },
    scroll_left3() {
      let content = document.querySelector(".wrapper3");
      content.scrollLeft -= 200;
    },
    scroll_right3() {
      let content = document.querySelector(".wrapper3");
      content.scrollLeft += 200;
    }
  }
}
</script>

<style scoped>

  /* Background panel */
  .background-panel{
    background: rgb(226,226,226);
    background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 100%); 
    height: 100%;
    width: 100vh;
    border: 1px solid #ddd;
  }

  /* Bloque de videos */
  .wrapper1{
    display: flex;
    overflow-x: auto;
  }
  /* Bloque foros */
  .wrapper2{
    display: flex;
    overflow-x: auto;
  }

/* Bloque de articulos */
  .wrapper3{
    display: flex;
    overflow-x: auto;
  }


  /* Cada casilla del tópico */
  .wrapper1 .item{
    min-width: 250px;
    text-align: center;
    background-color: white;
    margin-right: 1px; 
  }

  .wrapper2 .item{
    min-width: 250px;
    text-align: center;
    background-color: white;
    margin-right: 1px; 
  }

  .wrapper3 .item{
    min-width: 250px;
    text-align: center;
    background-color: white;
    margin-right: 1px; 
  }
  /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
  
  /* Eliminando scroll de cada bloque */
  ::-webkit-scrollbar {
    -ms-overflow-style: auto; /* for Internet Explorer, Edge */
    display: auto; /* for Chrome, Safari, and Opera */
  }

  /* Quitando scroll en Mozilla (acá poner estilos para mozilla) */
  *{
    scrollbar-width: auto;
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
  .button-icon{
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 30px;
    border-color: transparent;
    background-color: #ddd;
    display: flex;
    
  }

  /*Centrar botones */
  .vertical-align{
    display: flex;
    align-items: center;
  }

  /* Iconos */
  .icon-chevron{
    color:#2D2E40;
    min-height: 100%;
  }
  
  
  
</style>