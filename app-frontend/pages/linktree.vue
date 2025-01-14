<template>
    <div class="profile-card">

        <img src="~/assets/img/profile-tiktok.jpg" alt="Anibal tiktok" class="profile-pic"/>

        <h1>Anibal Copitan</h1>
        <p>Te ayudo a alcanzar tus metas con software</p>
        <p>🐧 Linux - Dev - Side-Projects</p>

        <a class="button" href="https://wa.me/51970142637?text=Hola%2C%20Anibal%20tengo%20una%20consulta">
          <i class="fab fa-whatsapp"></i> ¿Tienes una consulta?
        </a>
<!--         <button>Podcast</button> -->
        <a class="button" href="https://blog.anibalcopitan.com">Blog</a>

        <div class="social-icons">
            <span>
              <a href="https://www.youtube.com/@anibal-linux">
                <i class="fab fa-youtube"></i>
              </a>
            </span>
            <span>
              <a href="https://www.tiktok.com/@anibal.linux">
                <i class="fab fa-tiktok"></i>
              </a>
            </span>
            <span>
              <a href="https://anibalcopitan.com/">
                <i class="fas fa-globe"></i>
              </a>
            </span>
        </div>
        <footer>Inspired By Buffer</footer>
        <hr/> <!-- add for load font fontawesome -->
    </div>
</template>
<script>
  export default {
    layout: 'linktree', // Asignar el layout exclusivo
    data() {
      return {
        title: "LinkTree | " + process.env.appName
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'LinkTree Anibal Copitan'
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'LinkTree Anibal Copitan'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.title
          },

        ]
      }
    },
    mounted() {

      this.$utils.redirectToHttps();

    },
    methods: {

    },
  }
</script>
<style scoped>

.profile-card {
    width: 300px;
    padding: 20px;
    text-align: center;

}

.profile-pic {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

h1 {
  text-transform: none;
  font-size: 1.4em;
  margin: 15px 0 5px 0;
}

p {
font-size: 13px;
}

a.button, button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #444;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin: 15px 0;
    font-size: 1.5em;
    column-gap: 0.5em;
}

footer {
    font-size: 12px;
    color: inherit;
    background-color: transparent;
    padding: inherit;
}


</style>


