<template>
  <section>
    <b-container class="container-general mx-auto mt-3 p-5">
       <b-row align-h="center" class="pt-0 pb-3">
        <b-col class="col-md-3 col-7 pt-0" >
          <b-img :src="require('../assets/codeflix-icon.gif')" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col class="col-6 col-md-3" align-self="end">
          <div class="d-flex">
            <h1>
            CodeFlix
          </h1>
          <h6>
            Search
          </h6>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-input placeholder="¿Qué estas buscando?"></b-form-input>
        </b-col>
      </b-row>
      <b-row align-h="center py-4 mt-2">
        <b-col class="col-6 col-md-3" >
          <b-button class="btn-home-buscar" :to="{name:'Search'}">Buscar</b-button>
        </b-col>
        <b-col class="col-6 col-md-3">
          <b-button class="btn-home-explorar">¿No sabes que buscar?</b-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style scoped>
.section-home{
  background-color: cornflowerblue;
}

.btn-home-buscar{
  background-color: coral;
  border-color: coral;
  width: 100%;
  border-radius: 55px;
}

.btn-home-explorar{
  background-color: #FFC463;
  border-color: #FFC463;
  width: 100%;
  color: #2D2E40;
  border-radius: 55px;
}

.container-general{
  background: rgb(226,226,226);
  background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 100%); 
}
</style>
