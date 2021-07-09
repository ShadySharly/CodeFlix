<template>
<div>

    <b-row class="titulo">
        <h4 class="text-light font-weight-blod d-flex flex-row justify-content-center alig-items-center p-3">Filtrar por </h4>
    </b-row>

    <b-row class="container-filtro">
        <div class="menu">
            <div v-if="typeFilter">

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
                        <b-form-input id="range-2" v-model="value" type="range" :min="duracionMin" :max="duracionMax" step="1"></b-form-input>
                        <div class="mt-2">Tiempo: {{ value }} Minutos</div>
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
                        <b-form-checkbox-group v-model="selectedLenguaje" :options="optionsLenguje" :aria-describedby="ariaDescribedby" name="flavour-2a" stacked></b-form-checkbox-group>
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
                    <b-input-group class="mb-3">
                        <b-form-input id="example-input" v-model="valueDateDesde" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker v-model="valueDateDesde" button-only right locale="en-US" aria-controls="example-input" @context="onContext"></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                </div>
                
                <div>
                    <label for="example-input">Hasta</label>
                    <b-input-group class="mb-3">
                        <b-form-input id="example-input" v-model="valueDateHasta" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker v-model="valueDateHasta" button-only right locale="en-US" aria-controls="example-input" @context="onContext"></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </b-collapse>

        </div>
    </b-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            typeFilter: true,
            // Data del Boton Formato
            formats: [{
                    type: 'Videos',
                    number: 0,
                    url: "/"
                },
                {
                    type: 'Foros',
                    number: 0,
                    url: "/"
                },
                {
                    type: 'Tutoriales',
                    number: 0,
                    url: "/"
                },
            ],

            // Data del boton duracion
            duracionMin: '1',
            duracionMax: '60',
            
            // Data del botón Lenguaje
            selectedLenguaje: [], // Must be an array reference!
            optionsLenguje: [{
                    text: 'Python',
                    value: 'python'
                },
                {
                    text: 'C',
                    value: 'c'
                },
                {
                    text: 'Java',
                    value: 'java'
                }
            ],

            // Data del boton Fecha 
            valueDateDesde: '',
            valueDateHasta: '',
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
