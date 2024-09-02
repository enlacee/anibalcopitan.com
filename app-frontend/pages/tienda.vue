<template>
    <div>
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle"
                        onclick="">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <h1 class="h1-header">
                        <a class="navbar-brand" href="#top" @click.prevent="$utils.goTop(0)">ANIBAL COPITAN - Store</a>
                    </h1>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="navbar-collapse" :class="{collapse: toggleNav}">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>

        <StoreView></StoreView>
        <!-- <SectionHome></SectionHome> -->
        <Footer></Footer>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          title: "Tienda | " + process.env.appName
        }
      },
      head() {
        return {
          title: this.title,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Tienda "scripts", "proyectos para desarrolladores", "herramientas para programadores'
            },
            {
              hid: 'og:description',
              name: 'og:description',
              content: 'Tienda "scripts", "proyectos para desarrolladores", "herramientas para programadores'
            },
            {
              hid: 'og:title',
              name: 'og:title',
              content: this.title
            }
          ]
        }
      },
      mounted() {
        // work only in production
        this.$utils.redirectToHttps();

      },
      methods: {

      },
    }
  </script>
<style scoped>

  .navbar-fixed-top,
  .navbar-fixed-bottom {
    position: relative;
  }


</style>
  
  