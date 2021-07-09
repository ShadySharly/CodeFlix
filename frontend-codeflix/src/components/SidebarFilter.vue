<template>
  <div>
    <b-button v-b-toggle.sidebar-variant class="button-toggle">Filtrar por</b-button>
    <b-sidebar id="sidebar-variant" title="" bg-variant="dark" text-variant="light" shadow>
             <b-row class="titulo">
            <h4 class="text-light font-weight-blod d-flex flex-row justify-content-center alig-items-center p-3">Filtrar por </h4>
       </b-row>

        <b-row class="container-filtro">
            <div class="menu">
                
                <div v-if="typeFilter">
                    <a v-b-toggle href="#my-format" class="d-block text-light p-3 v-b-toggle" @click.prevent>
                        <b-icon icon="search" class="mr-2 lead"></b-icon> 
                        Formato
                        <b-icon icon="chevron-compact-down" class=" lead offset-md-5"></b-icon> 
                    </a>

                    <b-collapse id="my-format" >
                          <b-row class="ml-5" v-for="format in formats" v-bind:title="format.type" :key="format.id">
                              <b-link class="b-link" :href="format.url">{{format.type}} [{{format.number}}]</b-link>
                          </b-row>   
                    </b-collapse>
                </div>

                <div v-else>
                    <!-- Botón Duración de los videos -->
                    <a v-b-toggle href="#my-duration" class="d-block text-light p-3 v-b-toggle" @click.prevent>
                        <b-icon icon="alarm" class="mr-2 lead"></b-icon> 
                        Duración
                        <b-icon icon="chevron-compact-down" class="mr-2 lead offset-md-6"></b-icon> 
                    </a>
                    <!-- Desplegable duración videos -->
                    <b-collapse id="my-duration" class="p-3">
                        <div>
                            <label for="range-1">Duración:</label>
                            <b-form-input id="range-2" v-model="value" type="range" :min="min" :max="max" step="1"></b-form-input>
                            <div class="mt-2">Tiempo: {{ value }} Minutos</div>
                        </div>
                    </b-collapse>
                </div>
                
                <hr>

                <!-- Botón Tipo de lenguaje -->
                <a v-b-toggle href="#my-lenguaje" class="d-block text-light p-3 v-b-toggle" @click.prevent>
                    <b-icon icon="code-square" class="mr-2 lead"></b-icon> 
                    Lenguaje
                    <b-icon icon="chevron-compact-down" class="mr-2 lead offset-md-6"></b-icon> 
                </a>
                <b-collapse id="my-lenguaje" class="ml-5 ">
                    <div>
                        <b-form-group
                        label=""
                        v-slot="{ ariaDescribedby }"
                        >
                        <b-form-checkbox-group
                            v-model="selectedLenguaje"
                            :options="optionsLenguje"
                            :aria-describedby="ariaDescribedby"
                            name="flavour-2a"
                            stacked
                        ></b-form-checkbox-group>
                        </b-form-group>
                    </div>
                </b-collapse>
                <hr>

                <!-- Botón fecha búsqueda -->
                <a v-b-toggle href="#my-date" class="d-block text-light p-3 v-b-toggle" @click.prevent>
                    <b-icon icon="calendar-date" class="mr-2 lead"></b-icon> 
                    Fecha
                    <b-icon icon="chevron-compact-down" class="mr-2 lead offset-md-7"></b-icon> 
                </a>
                <!-- Desplegable fecha búsqueda -->
                <b-collapse id="my-date" class="ml-3 p-1">
                    <b-calendar
                    v-model="selectedDate" 
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    locale="en"
                    ></b-calendar>
                </b-collapse>

            </div>     
         </b-row> 
    </b-sidebar>
  </div>
</template>

<script>
export default {
    data() {
      return {
        typeFilter: true,
        value: '0',
        min: '1',
        max: '60',
        formats: [
            {type:'Videos', number: 0, url:"/"},
            {type:'Foros', number: 0, url:"/"},
            {type:'Tutoriales', number: 0, url:"/"},
        ],  
        selectedLenguaje: [], // Must be an array reference!
        optionsLenguje: [
          { text: 'Python', value: 'python' },
          { text: 'C', value: 'c' },
          { text: 'Java', value: 'java' }
        ],
        selectedDate: '',

      }
    }
}
</script>

<style scoped>
    .container-filtro{
        height: 87vh;
        background-color: #2D2E40;
        color: white;
        align-self: stretch;
        border-bottom-left-radius: 11px;
        border-bottom-right-radius: 11px;
    }
    .titulo{
        background-color: #F26E50;
        height: 60px;
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;
        font-family: B612;
    }
    .btn-toggle{
        background-color: #2D2E40;
        border-color: white;
    }

    a:hover{
        text-decoration: none;
    }

    .b-link{
        color: white;
        text-decoration: none;
    }

    .v-b-toggle{
        text-decoration: none;
    }

    .button-toggle{
      border-radius: 12px;
      width: 80%;
      background-color: #2D2E40;
    }


</style>