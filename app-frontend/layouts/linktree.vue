<template>
  <div class="layout-linktree">
    <Nuxt />
  </div>
</template>
<style scoped>
.layout-linktree{
/*
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
*/
  background-color: #eaeaea;
  z-index: -1; /* Asegura que el fondo esté detrás de main-layout */
  height: 100vh;
}
</style>
