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
<!-- 
                    <div class="flex w-full flex-col items-center">
                        <form class="group w-full rounded-wt bg-transparent" action="/create" method="post">
                            <div class="flex flex-col"><div style="background-color:#F9FAFB;border:2px solid black" class="flex w-full flex-col items-center sm:flex-row overflow-hidden rounded-lg"><div class="flex w-full items-center" style="background-color:#F9FAFB"><div class="pl-2" style="color:black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                                </div><input type="email" autocomplete="email" required="" style="color:#111827" class="wt-button-font z-10 w-full border-none bg-transparent placeholder-shown:text-ellipsis text-lg focus:text-lg active:text-lg sm:text-lg" placeholder="Enter Your Email" name="email"></div><input type="submit" 
                                style="background-color:black;color:#FFFCFC;" 
                                class="cursor-pointer px-5 py-3 font-semibold w-full sm:w-auto text-lg focus:text-lg active:text-lg sm:text-lg rounded-lg rounded-none sm:rounded-lg-r" 
                                value="Subscribe"></div>
                            </div>
                        </form>
                    </div> -->
                    <div class="form-container">
                        <form class="subscription-form" action="https://anibalcopitan.us22.list-manage.com/subscribe/post?u=e9c62af441ddf5ac2469a4cf0&amp;id=f6003e68eb&amp;f_id=00fdd7e1f0" method="POST">
                            <p class="form-description">¡Descarga tu eBook de <b>Linux</b> y suscríbete a nuestras novedades!</p>
                            <div class="input-group">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="icon-svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                </svg>
                            </div>
                            <input type="email" autocomplete="email" required placeholder="Tu correo electrónico" name="EMAIL" class="email-input">
                            <input type="submit" value="¡Descarga y suscríbete!" class="submit-btn">
                            </div>
                            <p class="form-note" style="font-size: 12px; padding-top: 0.5em;">¡Gracias por suscribirte! Revisa tu correo para descargar tu libro. Puedes darte de baja cuando quieras.</p>
                        </form>
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
			                <li>
                                <a target="_blank" href="https://github.com/enlacee?tab=repositories" class="btn-social btn-outline"><i class="fab fa-github-alt"></i></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/9703b1149/" class="btn-social btn-outline"><i class="fab fa-linkedin-in"></i></a>
                            </li>

                            <li>
                                <a href="#store" class="btn-social btn-outline cta">
                                    <span>ver proyectos 🚀</span>
                                </a>
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

/* CSS FORMULARIO SUSCRIPCION */
.form-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.subscription-form {
  width: 100%;
  max-width: 600px;
}

.input-group {
  display: flex;

  /* align-items: center; */
  background-color: #F9FAFB;
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;
}

.icon {
  padding: 10px;
  color: black;
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.email-input {
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #111827;
  background-color: transparent;
  outline: none;
}

.email-input::placeholder {
  color: #6B7280;
}

.submit-btn {
  padding: 10px 20px;
  background-color: black;
  color: #FFF;
  border: none;
  font-weight: bold;
  cursor: pointer;
}


.submit-btn:focus {
  outline: none;
}

.cta {
    /* color: #0056b3;  Color azul */
    text-decoration: none;
    width: auto;
    padding: 0 2px;
}
.cta:hover {
    text-decoration: underline; /* Subrayado al pasar el mouse */
}

/* Media Query para móviles */
@media (max-width: 600px) {
  .input-group {
    flex-direction: column; /* En móviles, apila los elementos verticalmente */
  }

  /* .subscription-form {
        flex-wrap: wrap;
        align-items: center;
    } */
    .icon {
        display: none;
    }

    #profile-picture {
        margin-top: auto;
    }

    #profile-picture img {
        width: 90px;
        height: 90px;
    }
}
</style>
