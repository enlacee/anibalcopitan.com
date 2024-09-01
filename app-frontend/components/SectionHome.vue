<template>
    <header :class="{hide: hide}">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div id="head-svg-man">
                        <!-- Contenedor para la foto de perfil -->
                        <div id="profile-picture">
                            <img src="~/assets/img/1689288186265.jpg" alt="Aníbal Copitan">
                        </div>
                        <h2>{{ title }}</h2>
                    </div>
                    <div id="list-conctact" class="intro-text">
                        <ul id="list-inline" class="list-inline">
                            <li>
                                <a target="_blank" :href="vueAppUrlBlog" class="btn-social btn-outline">
                                    <i class="fab fa-blogger-b"></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://wa.link/s7q46e"
                                class="btn-social btn-outline"><i class="fab fa-whatsapp"></i></a>
                            </li>
                            <!--
                            <li class="hidden-xs">
                                <a target="_blank" href="https://twitter.com/enlacee" class="btn-social btn-outline">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
	                        <li class="hidden-xs">
                                <a href="mailto:contact@anibalcopitan.com" class="btn-social btn-outline"><i class="fas fa-envelope"></i></a>
                            </li>
                            -->
			                <li class="hidden-xs">
                                <a target="_blank" href="https://github.com/enlacee?tab=repositories" class="btn-social btn-outline"><i class="fab fa-github-alt"></i></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/9703b1149/" class="btn-social btn-outline"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                        <hr class="star-light">
                        <p class="skills">
                            <!--
                            <strong>Anibal</strong> Desarrollador web en LINUX y windows con mas de 3 años de experiencia en <strong>desarrollo de aplicaciones</strong> poderosas y eficientes conocimientos en Back-End y Front-End
                             -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'SectionHome',
    props: [],
    data() {
        return {
            title: process.env.appSubTitle,
            hide: false,
            vueAppUrlBlog: process.env.appUrlBlog
        }
    },
    mounted() {
      const idSection = 'qr';
      const { name, hash } = this.$route;

      // read route
      if (name === idSection || hash.substring(1) === idSection) {
        this.hide = true;
      }
    }
}
</script>
<style scoped>
#profile-picture {
    text-align: center;
    margin-top: 20px;
}

#profile-picture img {
    border-radius: 50%;
    width: 120px; /* Ajusta el tamaño según tu diseño */
    height: 120px;
    object-fit: cover;
    border: 2px solid #ddd; /* Borde sutil para destacar la imagen */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera para un efecto profesional */
}
</style>
