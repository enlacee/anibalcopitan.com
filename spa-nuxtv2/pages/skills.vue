<template>
  <div>
    <Nav @sectionNameIs="seccionNameID = $event"></Nav>
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
      return {
        seccionNameID: '',
      }
    },
    watch: {
      seccionNameID() {
        this.goToScroll();
      }
    },
    mounted() {

      // artilugio para scrollto pagina interna desde HOME
      // if (Object.keys(this.$refs).length > 0) {
      //   this.goToScroll();
      // };
      console.log('print in skills.vue sectionNameIs = ', this.seccionNameID);

      this.$nextTick(function () {
        window.addEventListener("DOMContentLoaded", this.goToScroll);
      });
    },
    methods: {
      goToScroll() { console.log('ejecuto! en skills.vue');
        const sectionID = this.$route.name;
        console.log('sectionID', sectionID);

        if (sectionID && sectionID !== 'index') {
          const element = this.$refs[sectionID].$el;
          this.$utils.goToScroll(sectionID, element);

          // empty variable
          this.seccionNameID = '';
        }
      }
    }
  }
</script>

