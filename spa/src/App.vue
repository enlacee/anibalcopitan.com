<template>
  <div id="App">
    <Nav @sectionNameIs="seccionNameID = $event"></Nav> 
    <SectionHome v-bind:socialMedia="socialMedia"/>
    <SectionQR ref="qr" title="Linux Fan - Software Engineer - Maker / Tester"/>
    <SectionYape ref="yape"/>
    <SectionBank ref="bank"/>
    <SectionBlog ref="blog"/>
    <SectionSkill ref="skills"/>
    <Footer/>
  </div>
</template>
<script>
// css
import "./assets/css/bootstrap.min.css";
import "./assets/css/freelancer.css";
import "./assets/fontawesome-free-5.15.1/css/all.min.css";

import Nav from './components/Nav';
import SectionHome from './components/SectionHome';
import SectionQR from './components/SectionQR';
import SectionBlog from './components/SectionBlog';
import SectionSkill from './components/SectionSkill';
import SectionYape from './components/SectionYape';
import SectionBank from './components/SectionBank';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    SectionHome,
    SectionQR,
    SectionBlog,
    SectionSkill,
    SectionYape,
    SectionBank,
    Footer
  },
  data: function(){
    return {
      seccionNameID: '',
      socialMedia: [],
    }
  },
  methods: {
    goToScroll: function(){
      console.log('route', this.$route, 'seccionNameID', this.seccionNameID);
      if (this.$route.name) {

        // SET SEO
        const WEB_NAME_PREFIX = process.env.VUE_APP_NAME + ' - '
        let str = this.$route.name;
        let strTitle = str.charAt(0).toUpperCase() + str.slice(1);
        document.title = WEB_NAME_PREFIX + strTitle;

        // SET SECTION
        if (this.$refs[this.$route.name]) {
          var element = this.$refs[this.$route.name].$el;
          var top = element.offsetTop;
          window.scrollTo(0, top-60);
        }
      }
    }
  },
  created: function(){
    this.socialMedia = [
      {id: 1, name: "blogger", url: "https://blog.anibalcopitan.com"},
      {id: 2, name: "whatsapp", url: "https://wa.link/s7q46e"},
      {id: 3, name: "twitter", url: "https://twitter.com/enlacee"},
      {id: 4, name: "email", url: "mailto:acopitan@gmail.com"},
      {id: 5, name: "github", url: "https://github.com/enlacee?tab=repositories"},
      {id: 6, name: "linkedin", url: "https://www.linkedin.com/in/9703b1149/"}
    ];
  },
  mounted: function(){
    this.$nextTick(function () {
        window.addEventListener("load", this.goToScroll);
    });
  },
  watch: {
    seccionNameID: function() {
      this.goToScroll();
    }
  }
}
</script>