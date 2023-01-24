<template>
  <div>
    <Nav></Nav>
    <SectionHome></SectionHome>
    <SectionYape ref="yape"/>
    <SectionBank ref="bank"/>
    <SectionSkill ref="skills"/>
    <SectionBlog ref="blog"/>
    <Footer/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: "Blog | " + process.env.appName
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Anibal Copitan Blog espacio y contenido del día a día con herramientas de desarrollo en Linux – ubuntu – terminal – shell – bash – software'
          }
        ]
      }
    },
    mounted() {

      this.$utils.redirectToHttps();
      setTimeout(() => {
        this.goToScroll();
      }, 500);
    },
    methods: {
      goToScroll() {
        const { name } = this.$route;
        if (name && name !== 'index') {
          this.$utils.goToSection(name);
        }
      },
    },
  }
</script>

