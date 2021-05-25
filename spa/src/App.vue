<template>
  <div id="App"> pepito: {{ greeting }}
    <Nav></Nav>
    <SectionHome v-bind:socialMedia="socialMedia"/>
    <SectionBlog/>
    <SectionSkill/>
    <SectionYape/>
    <SectionBank/>
    <Footer/>
  </div>
</template>
<script>
import Nav from './components/Nav';
import SectionHome from './components/SectionHome';
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
    SectionBlog,
    SectionSkill,
    SectionYape,
    SectionBank,
    Footer
  },
  data: function(){
    return {
      socialMedia: [],
      greeting: 'Linux Fan - Software Engineer - Maker / Tester'
    }
  },
  methods: {
    hola: function(){
      return 'hola';
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
    ]
  }
}
</script>