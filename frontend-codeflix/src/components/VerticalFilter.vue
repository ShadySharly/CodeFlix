<template>
<div>

    <b-row class="titulo">
        <h4 class="text-light font-weight-blod d-flex flex-row justify-content-center alig-items-center p-3">Filtrar por </h4>
    </b-row>

    <b-row class="container-filtro">
        <div class="menu">
            <div v-if="this.getTypeFilter()">

                <!-- boton de formato -->
                <a v-b-toggle href="#my-format" class="d-block text-light v-b-toggle" @click.prevent>
                    <div class="d-flex ">
                        <div class="py-3 px-1 ">
                            <b-icon icon="search" class="mr-2 lead"></b-icon>
                        </div>
                        <div class="py-3 ">
                            <span class="ml-auto">Formato</span>
                        </div>
                        <div class="py-3 px-1 ms-auto">
                            <b-icon icon="chevron-compact-down" class="lead"></b-icon>
                        </div>
                    </div>
                </a>

                <b-collapse id="my-format">
                    <b-row class="ml-4" v-for="format in formats" v-bind:title="format.type" :key="format.id">
                        <b-link class="b-link" @click="filtrar(format.url, format.type)">{{format.type}} [{{format.number}}]</b-link>
                    </b-row>
                </b-collapse>
            </div>

            <div v-else>
                <!-- Botón Duración de los videos -->
                <a v-b-toggle href="#my-duration" class="d-block text-light v-b-toggle" @click.prevent>
                    <div class="d-flex ">
                        <div class="py-3 px-1 ">
                            <b-icon icon="alarm" class="mr-2 lead"></b-icon>
                        </div>
                        <div class="py-3 ">
                            <span class="ml-auto">Duración</span>
                        </div>
                        <div class="py-3 px-1 ms-auto">
                            <b-icon icon="chevron-compact-down" class="lead"></b-icon>
                        </div>
                    </div>
                </a>
                <!-- Desplegable duración videos -->
                <b-collapse id="my-duration" class="p-3">
                    <div>
                        <b-form-input id="range-2" v-model="valueDuracion" type="range" :min="duracionMin" :max="duracionMax" step="1"  @change="filterDuration" ></b-form-input>
                        <div class="mt-2">Tiempo: {{ valueDuracion }} Minutos</div>
                    </div>
                </b-collapse>
            </div>

            <hr>

            <!-- Botón Tipo de lenguaje -->
            <a v-b-toggle href="#my-lenguaje" class="d-block text-light v-b-toggle" @click.prevent>
                <div class="d-flex ">
                    <div class="py-3 px-1 ">
                        <b-icon icon="code-square" class="mr-2 lead"></b-icon>
                    </div>
                    <div class="py-3 ">
                        <span class="ml-auto">Lenguaje</span>
                    </div>
                    <div class="py-3 px-1 ms-auto">
                        <b-icon icon="chevron-compact-down" class="lead"></b-icon>
                    </div>
                </div>
            </a>

            <b-collapse id="my-lenguaje" class="ml-4 ">
                <div>
                    <b-form-group label="" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group v-model="selectedLenguaje" :options="optionsLenguje" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked @change="filterLanguage($event)"></b-form-checkbox-group>
                    </b-form-group>
                </div>
            </b-collapse>
            <hr>

            <!-- Botón fecha búsqueda -->
            <a v-b-toggle href="#my-date" class="d-block text-light v-b-toggle" @click.prevent>
                <div class="d-flex ">
                    <div class="py-3 px-1 ">
                        <b-icon icon="calendar-date" class="mr-2 lead"></b-icon>
                    </div>
                    <div class="py-3 ">
                        <span class="ml-auto">Fecha</span>
                    </div>
                    <div class="py-3 px-1 ms-auto">
                        <b-icon icon="chevron-compact-down" class="lead"></b-icon>
                    </div>
                </div>
            </a>

            <!-- Desplegable fecha búsqueda -->
            <b-collapse id="my-date" class="ml-3 p-1">
                <div>
                    <label for="example-input">Desde</label>
                    <b-input-group class="mb-3" >
                        <b-form-input id="example-input" v-model="valueDateDesde" type="text" placeholder="YYYY-MM-DD" autocomplete="off" @input="filterDate"></b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker v-model="valueDateDesde" button-only right locale="en-US" aria-controls="example-input" @context="onContextDatePicker1" @input="filterDate"></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                </div>

                <div>
                    <label for="example-input">Hasta</label>
                    <b-input-group class="mb-3" >
                        <b-form-input id="example-input" v-model="valueDateHasta" type="text" placeholder="YYYY-MM-DD" autocomplete="off" @input="filterDate"></b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker v-model="valueDateHasta" button-only right locale="en-US" aria-controls="example-input" @context="onContextDatePicker2" @input="filterDate"></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                    <b-button v-if="desactivarBotonFecha" disabled>Aplicar Fecha</b-button>
                    <b-button v-else @click="aplicarDateFilter">Aplicar Fecha</b-button>
                    
                </div>
                <div class="my-3">
                    <b-button v-if="resetFilterButton" @click="quitarDateFilter">Resetear Filtro</b-button>
                </div>
            </b-collapse>

        </div>
    </b-row>
</div>
</template>

<script>
import {
    mapMutations, mapGetters
} from 'vuex'


export default {
    data() {
        return {
            typeFilter: true,
            // Data del Boton Formato
            formats: [{
                    type: 'Videos',
                    number: 0,
                    url: "SearchVideos"
                },
                {
                    type: 'Foros',
                    number: 0,
                    url: "SearchForos"
                },
                {
                    type: 'Articulos',
                    number: 0,
                    url: "SearchArticulos"
                },
            ],

            // Data del boton duracion
            duracionMin: '1',
            duracionMax: '60',
            valueDuracion: '60',

            // Data del botón Lenguaje
            selectedLenguaje: [], // Must be an array reference!
            optionsLenguje: [{
                    text: 'Python',
                    value: 'Python'
                },
                {
                    text: 'C',
                    value: 'C'
                },
                {
                    text: 'Java',
                    value: 'Java'
                }
            ],

            // Data del boton Fecha 
            valueDateDesde: '',
            valueDateHasta: '',
            formattedDesde: '',
            formattedHasta: '',
            selectedDesde: '',
            selectedHasta: '',
            desactivarBotonFecha: true,
            resetFilterButton: false,
            fechaFiltro: '',

        }
    },
    computed: {
        ...mapGetters(['getVideos', 'getForos', 'getArticulos'])
    },

    mounted() {
        this.formats[0].number = (this.getVideos).length;
        this.formats[1].number = (this.getForos).length;
        this.formats[2].number = (this.getArticulos).length;
    },

    methods: {
        ...mapMutations(['setRutaRegreso', 'changeTypeFilter', 'setDurationValueFilter', 'setLanguageFilter', 'setDateFilter', 'resetDateFilter']),
        ...mapGetters(['getTypeFilter']),

        onContextDatePicker1(ctx) {
            // The date formatted in the locale, or the `label-no-date-selected` string
            this.formattedDesde = ctx.selectedFormatted
            // The following will be an empty string until a valid date is entered
            this.selectedDesde = ctx.selectedYMD
        },

        onContextDatePicker2(ctx) {
            // The date formatted in the locale, or the `label-no-date-selected` string
            this.formattedHasta = ctx.selectedFormatted
            // The following will be an empty string until a valid date is entered
            this.selectedHasta = ctx.selectedYMD
        },

        filtrar(url, type) {
            this.changeTypeFilter(type);
            this.setRutaRegreso('Search');
            this.$router.replace({
                name: url
            });

        },

        filterDuration(){
            console.log(this.valueDuracion);
            this.setDurationValueFilter(this.valueDuracion)
        },

        filterLanguage(event){
            console.log(this.selectedLenguaje)
            this.setLanguageFilter(this.selectedLenguaje)
        },

        filterDate(){
            console.log(this.valueDateDesde)
            console.log(this.valueDateHasta)
            if(this.valueDateDesde != '' && this.valueDateHasta != '' && this.valueDateDesde <= this.valueDateHasta){
                this.desactivarBotonFecha = false;
                this.fechaFiltro = {'desde': this.valueDateDesde, 'hasta': this.valueDateHasta}
            }
            else{
                this.desactivarBotonFecha = true;
            }
            
        },

        aplicarDateFilter(){
            this.resetFilterButton = true
            this.setDateFilter(this.fechaFiltro)
        },

        quitarDateFilter(){
            this.resetFilterButton = false;
            this.selectedLenguaje = []
            this.resetDateFilter()
        }
    }
}
</script>

<style scoped>
.container-filtro {
    height: 87vh;
    background-color: #2D2E40;
    color: white;
    align-self: stretch;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
}

.titulo {
    background-color: #F26E50;
    height: 60px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    font-family: B612;
}

.btn-toggle {
    background-color: #2D2E40;
    border-color: white;
}

a:hover {
    text-decoration: none;
}

.b-link {
    color: white;
    text-decoration: none;
}

.v-b-toggle {
    text-decoration: none;
}
</style>
