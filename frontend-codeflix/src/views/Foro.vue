<template>
    <b-container class="container-general my-3 mx-auto px-3 py-2">
        <b-row>
            <b-col class="col-12">
                <b-card class="card-foro">
                <div class="d-flex justify-content-between">
                    <b-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" style="width:20%"></b-img>
                    <b-button pill style="background-color:darkorange;color:black;" class="my-1">
                        Ir al sitio web
                        <b-icon icon="arrow-up-right"></b-icon>
                    </b-button>
                </div>
                <b-row>
                    <b-col class="col-lg-1 col-1" align-self="center">
                        <div class="d-flex flex-column align-items-center">
                            <div>
                                <h4>
                                    <b-icon icon="triangle-fill" style="color:lightgrey"></b-icon>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    <span class="mx-2">43</span>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    <b-icon icon="hand-thumbs-up"></b-icon>
                                </h4>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-11 col-11">
                        <b-card>
                            <b-card-title style="font-weight:bold">
                                Titulo de la Pregunta
                            </b-card-title>
                            <div class="my-2">
                                <span class="mr-2" style="font-size:14px; color:grey">Preguntado:</span>
                                <span style="font-size:14px; color:black">18/02/1998</span>
                            </div>
                            <b-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam consequuntur vitae facere rem nobis eos. Neque, eligendi officia nostrum aperiam numquam totam quia, iure facere quae debitis, amet similique.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quas consequuntur repellat aut magnam incidunt accusamus, ea sequi voluptas impedit optio dolorem eos a mollitia ut atque, enim suscipit corrupti.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel, quidem nihil sit commodi explicabo, animi repellat ipsa doloribus fuga repellendus ad beatae, voluptatum vero. Dolor illo ipsa quod labore!

                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col class="col-lg-1 col-1" align-self="center">
                        <div class="d-flex flex-column align-items-center">
                            <div>
                                <h4>
                                    <b-icon icon="triangle-fill" style="color:lightgrey"></b-icon>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    <span class="mx-2">43</span>
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    <b-icon icon="hand-thumbs-up"></b-icon>
                                </h4>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-lg-11 col-11">
                        <b-card>
                            <b-card-title style="font-weight: bold">
                                Respuestas
                            </b-card-title>
                            <div class="my-2">
                                <span class="mr-2" style="font-size:14px; color:grey">Respondido:</span>
                                <span style="font-size:14px; color:black">11/12/2005</span>
                            </div>
                            <b-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam consequuntur vitae facere rem nobis eos. Neque, eligendi officia nostrum aperiam numquam totam quia, iure facere quae debitis, amet similique.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quas consequuntur repellat aut magnam incidunt accusamus, ea sequi voluptas impedit optio dolorem eos a mollitia ut atque, enim suscipit corrupti.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel, quidem nihil sit commodi explicabo, animi repellat ipsa doloribus fuga repellendus ad beatae, voluptatum vero. Dolor illo ipsa quod labore!

                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>

            </b-card>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col class="col-12 col-lg-6">
                <h4>Videos</h4>
                <b-card no-body class="p-0">
                <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></b-embed>
                <b-card-body>
                    <b-card-title>
                        REO Speedwagon - Can't Fight This Feeling (Official HD Video)
                    </b-card-title>
                    <div class="d-flex justify-content-start align-items-center">
                        <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
                        <span class="mr-auto">Super Kitty</span>
                        <div class="flex-grow-1 mx-2">
                            <b-badge v-for="i in 10" :key="i" pill variant="success" class="mx-1 tag">tag_1</b-badge>
                        </div>
                    </div>
                    <div>

                    </div>
                    <hr>
                    <div class="px-2">
                        <b-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ex aperiam omnis officiis inventore magnam eius nisi nulla fugit in quaerat est quasi aliquid impedit asperiores doloremque accusantium blanditiis nobis!
                        </b-card-text>
                    </div>
                </b-card-body>

            </b-card>
            </b-col>

          <b-col class="col-12 col-lg-6">
              <h4>Artículos y Tutoriales</h4>
            <b-card>
                <div class="mb-2">
                    <b-img src="https://openexpoeurope.com/wp-content/uploads/2016/12/logo-openwebinars.png" style="width:70%"></b-img>
                </div>
                <div class="mb-3">
                    <b-card-title style="font-weight:800">Titulo del Artículo</b-card-title>
                    <b-card-sub-title>subtitulo del articulo</b-card-sub-title>
                </div>
                <b-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate alias, repellendus quidem praesentium perspiciatis eum mollitia explicabo amet nisi voluptatem, nulla consequuntur! Similique animi deserunt doloremque, optio sit qui possimus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quis quas! Soluta nihil modi reiciendis amet nemo. Quos, ipsam accusamus illum, hic quidem ea enim, mollitia eveniet inventore est porro.
                </b-card-text>

                <h5 style="font-weight: bold">Keywords</h5>
                <div>
                    <b-badge class="tag mx-1 my-1" v-for="i in 10" :key="i" variant="warning">tag_articulo</b-badge>
                </div>
                <template #footer>
                    <div class="d-flex my-1 justify-content-end">
                        <b-button pill variant="success" dark>
                            Ir al sitio web
                            <b-icon icon="arrow-up-right"></b-icon>
                        </b-button>
                    </div>
                </template>
            </b-card>
          </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    name: 'Foros'
}
</script>

<style scoped>
.container-general {
    background: rgb(226, 226, 226);
    background: linear-gradient(180deg, rgba(226, 226, 226, 1) 0%, rgba(255, 255, 255, 1) 100%);
    width: 100%;
}

.tag {
    border-radius: 13px;
    color: black;
}

.card-foro {
    background: rgb(255, 196, 99);
    background: linear-gradient(180deg, rgba(255, 196, 99, 0.7245098723082983) 0%, rgba(255, 233, 198, 0.7329132336528361) 100%);
}
</style>