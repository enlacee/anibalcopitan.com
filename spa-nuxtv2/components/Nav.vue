<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle"
                @click="openMenuMobile()">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <h1 class="h1-header">
                  <a class="navbar-brand" href="#top" @click.prevent="$utils.goTop(0)">Anibal Copitan</a>
              </h1>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="navbar-collapse" :class="{collapse: toggleNav}">
              <ul class="nav navbar-nav navbar-right">
                  <li class="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                    <NuxtLink to="/blog"><i class="fas fa-code"></i>Blog</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/skills">Skills</NuxtLink>
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
      hideBank: true,
      toggleNav: true,
    }
  },
  methods: {
    openMenuMobile() {
      this.toggleNav = !this.toggleNav;
    }
  }
}
</script>
