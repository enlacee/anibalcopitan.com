<template>
  <div>
    <NavHome></NavHome>
    <SectionHome></SectionHome>
    <SectionYape ref="yape"/>
    <SectionBank ref="bank"/>
    <SectionEbook/>
    <SectionPortfolio/>
    <SectionSkill ref="skills"/>
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
