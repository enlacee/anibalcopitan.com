<template>
  <div>
    <Nav></Nav>
    <SectionHome></SectionHome>
    <SectionQR ref="qr" title="Linux Fan - Software Engineer - Maker / Tester"/>
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
        const { name } = this.$route;
        if (name && name !== 'index') {
          this.$utils.goToSection(name);
        }
      },
    },
  }
</script>

