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
                    
                    <b-container class="container-foros">
                        <div class="py-md-3">
                            <h3>
                                Mostrando Solo Foros
                            </h3>
                        </div>
                        <b-row>
                            <b-col class="col-lg-4 col-md-6 col-12 col-sm-12 mb-md-3" v-for="(foro, index) in foros" :key="index">
                                <b-card
                                    tag="article"
                                    class="mb-2 item p-0"
                                >
                                    <a href="#" class="link-card">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
                                         alt="img"
                                         width="70%">

                                        <b-card-title
                                            :title= foro.name>
                                        </b-card-title>

                                        <b-card-text>
                                            {{foro.name}}
                                        </b-card-text>
                                    </a>

                                    <template #footer>
                                        <b-badge v-for="(tag, indice) in foro.tags" :key=indice pill variant="warning"  class="mr-2" style= "border-radius: 20px; color:black; text-decoration: none" href="/">
                                        {{tag.nombre}}
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

export default {
    data() {
        return {
            foros: [
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 2" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                    { name: "Foro 1" ,
                    tags: [
                        {nombre:"python"},
                        {nombre:"C"},
                        {nombre:"Java"},
                    ]
                    },
                
                ],
        }
    },
    name: 'SearchForos',

    components: {
        VerticalFilter,
        BarraBusqueda
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