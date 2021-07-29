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
                      <a href="#" @click="goTodetail('blog', $event)"><i class="fas fa-code"></i>Blog</a>
                  </li>
                  <li>
                      <a href="#" @click="goTodetail('skills', $event)">Skills</a> 
                  </li>
                  <li class="achide" :class="{hide: hideYape}">
                      <a href="#" @click="goTodetail('yape', $event)">Yape</a>
                  </li>
                  <li class="achide" :class="{hide: hideBank}">
                      <a href="#" @click="goTodetail('bank', $event)">Bank Accounts</a>
                  </li>
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
  mounted() {

    // read route
    // if (this.$route.name === 'yape') {
    //   this.hideYape = false;
    // } else if (this.$route.name === 'bank') {
    //   this.hideBank = false;
    // }
  },
  methods: {
    goTodetail(strURLRouteName, event) {

        // if (event) {
        //     event.preventDefault();
        // }

        // if (this.$route.name !== strURLRouteName) {
        //     this.$router.push({name: strURLRouteName}); // error to overwrite same value 'name'
        // }
        // this.$emit('sectionNameIs', strURLRouteName);
    },
    openMenuMobile() {
        document.getElementById('bs-example-navbar-collapse-1').classList.toggle('collapse');
    }
  }
}
</script>