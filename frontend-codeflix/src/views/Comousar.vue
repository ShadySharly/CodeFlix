<template>
    <section class="mt-lg-5">
    <b-container class="container-general mx-auto mt-3 p-5">
       <b-row class="pt-0 pb-3 justify-content-center">
        <b-col>
            <h1>
                ¿Como usar?
            </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
            <h4>
                1. Para realizar búsquedas debes ingresar tu consulta en la caja de búsqueda de se muestra en el inicio.
            </h4>
            <h4 class="mx-5">
                  Ejemplo:
            </h4>
        </b-col>
        <b-col class="col-6 mb-4">
            <b-form-input class="mx-5" placeholder="Como crear un API usando SpringBoot" disabled ></b-form-input>
        </b-col>

        <b-col class="col-12">
            <h4>
                2. Luego debes presionar el botón buscar, para obtener resultados a tu consulta
            </h4>
        </b-col>
        <b-col class="col-3 mb-4">
            <b-button class="btn-home-buscar mx-5" >Buscar</b-button>
        </b-col>


        <b-col class="col-12">
            <h4>
                3. Si no tienes clara tu consulta puedes presionar el botón "¿No sabes que buscar?" para explorar temas o el botón "Explorar Temas" ubicado en la barra de búsqueda
            </h4>
        </b-col>
        <b-col class="col-3 mb-4">
          <b-button class="btn-home-explorar mx-5" >¿No sabes que buscar?</b-button>
          
        </b-col>
        <b-col class="col-2 mx-5">
            <b-button squared block class="btn-inicio py-3 mx-3">
                
                Explorar Temas</b-button>
        </b-col>

        <b-col class="col-12 mb-5">
            <h4>
                4. Luego de realizar tu consulta obtendrás resultados categorizados por videos (Youtube), foros (StackOverflow) y artículos y tutoriales 
                (provenientes de diversas paginas)
            </h4>
        </b-col>

         <b-col class="col-12 mb-5">
            <h4>
                5. Puedes seleccionar cualquiera de los diferentes recursos, filtrar por fecha, tipo, duración de video o lenguaje de programación, y puedes volver a realizar consultas cuantas veces quieras.
            </h4>
        </b-col>

         <b-col class="col-12">
            <h4>
                6. Para volver al inicio puedes utilizar el botón Inicio en la barra de navegación o el botón volver que aparecerá al hacer búsquedas
            </h4>
        </b-col>
        <b-col class="col-2">
            <b-button squared block class="btn-inicio py-3">
                <b-icon class="mr-2" icon="house-door-fill" style="color:white"></b-icon>
                Inicio</b-button>
        </b-col>
        <b-col class="col-2">
                    <b-button class="btn-volver">
            <b-icon icon="arrow-left" class="lead"></b-icon>
            Volver
        </b-button>
        </b-col>

      </b-row>
     
    </b-container>
  </section>
</template>

<script>
export default {
    
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


    .btn-volver{
        background-color: white;
        color: black;
        border-radius: 12px;
        width: 80%;
    }

    .btn-inicio{
    background-color: #2D2E40;
}
</style>