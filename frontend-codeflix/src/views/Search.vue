<template>
<div class="search mt-5">
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
                <result></result>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import VerticalFilter from '../components/VerticalFilter.vue'
import Result from '../components/Result.vue'
import BarraBusqueda from '../components/BarraBusqueda.vue'
import {mapMutations} from 'vuex'

export default {
    name: 'Search',

    components: {
        VerticalFilter,
        Result,
        BarraBusqueda,
    },

    methods:{
        ...mapMutations(['setRutaRegreso']),

    }
}
</script>

