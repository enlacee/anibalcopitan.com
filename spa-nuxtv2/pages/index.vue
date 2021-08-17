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

      // this.$nextTick(function () {
      //   window.addEventListener("DOMContentLoaded", this.goToScroll);
      // });
    },
  }
</script>
