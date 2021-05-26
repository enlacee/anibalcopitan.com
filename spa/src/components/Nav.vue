<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                  <li class="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                      <a href="#habilidades">Skills</a>
                  </li>
                  <li>
                      <a href="#blog">
                          <i class="fas fa-code"></i>Blog
                      </a>
                  </li>
                  <li class="achide hide_">
                      <a href="#yape">Yape</a>
                  </li>
                  <li class="achide hide_">
                      <a href="#bank">Bank Accounts</a>
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
//   props: {
//     msg: String
//   }
}
</script>