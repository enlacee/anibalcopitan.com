<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                @click="openMenuMobile()">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <h1 class="h1-header">
                  <a class="navbar-brand" href="#page-top">Anibal Copitan</a>
              </h1>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li class="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                    <!-- <a href="#" @click="scrollTo('#blog', $event)">Blog</a> -->
                    <NuxtLink to="/blog"  @click.native="scrollTo('#blog', $event)"><i class="fas fa-code"></i>Blog</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/skills"  @click.native="scrollTo('#skills', $event)">Skills</NuxtLink>
                  </li>

                  <!--
                  <li class="achide" :class="{hide: hideYape}">
                      <a href="#" @click="scrollTo('#yape')">Yape</a>
                  </li>
                  <li class="achide" :class="{hide: hideBank}">
                      <a href="#" @click="scrollTo('#bank')">Bank Accounts</a>
                  </li>
                  -->
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      hide: true,
      hideYape: true,
      hideBank: true
    }
  },
  methods: {
    scrollTo(hashtag, event) {

      if (event) {
          event.preventDefault();
      }

      /**
       * EMIT EVENT receptor is into **index.vue** (main file)
       *
       * Change value: to variable *sectionNameIs*
       * EACH link
      **/
      this.$emit('sectionNameIs', hashtag.substring(1));
      console.log('CLIC IN nav.vue. sectionNameIs = ', hashtag.substring(1));
    },
    openMenuMobile() {
        document.getElementById('bs-example-navbar-collapse-1').classList.toggle('collapse');
    }
  }
}
</script>
