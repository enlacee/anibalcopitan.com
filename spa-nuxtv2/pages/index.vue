<template>
  <div>
    <NavHome></NavHome>
    <SectionHome></SectionHome>
    <SectionQR ref="qr" title="Linux Fan - Software Engineer - Maker / Tester"/>
    <SectionYape ref="yape"/>
    <SectionBank ref="bank"/>
    <SectionSkill ref="skills"/>
    <SectionDeveloper/>
    <SectionBlog ref="blog"/>
    <Footer/>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {

      this.$utils.redirectToHttps();
      setTimeout(() => {
        this.goToScroll();
      }, 500);
    },
    methods: {
      goToScroll() {
        const { hash } = this.$route;
        if ( hash ) {
          this.$utils.goToSection(hash.substring(1));
        }
      },
    }
  }
</script>
