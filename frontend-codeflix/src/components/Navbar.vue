<template>
<div>
  <b-navbar class="mynavbar py-lg-0 py-sm-4 py-4" toggleable="lg" type="dark" variant="">
    <b-navbar-brand href="/" class="ml-4">
        <b-icon class="mr-2" icon="house-door-fill" style="color:white"></b-icon>    
        Inicio
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
            <b-button squared class="navbar-btn py-lg-4">¿Como usar?</b-button>
        </b-nav-item>
        <b-nav-item href="#" >
            <b-button squared class="navbar-btn py-lg-4">Exlorar Temas</b-button>
        </b-nav-item>
        <b-nav-item href="#" >
            <b-button squared class="navbar-btn py-lg-4">Conacto</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
.mynavbar{
    background-color: #2D2E40;
}

.navbar-btn{
    background-color: #2D2E40;
    border:none;
}

</style>