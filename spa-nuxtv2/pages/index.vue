<template>
  <div class="pepitoApp">

    <Nav></Nav>
    <SectionHome :rrss="datarrss"></SectionHome>
    <SectionQR ref="qr" title="Linux Fan - Software Engineer - Maker / Tester"/>
    <SectionYape ref="yape"/>
    <SectionBank ref="bank"/>
    <SectionBlog ref="blog"/>
    <SectionSkill ref="skills"/>
    <Footer/>
  </div>
</template>

<script>
export default {}
</script>
<script>
  export default {
    data: () => ({
      seccionNameID: '',
      datarrss: [
        {id: 1, name: "blogger", url: "https://blog.anibalcopitan.com"},
        {id: 2, name: "whatsapp", url: "https://wa.link/s7q46e"},
        {id: 3, name: "twitter", url: "https://twitter.com/enlacee"},
        {id: 4, name: "email", url: "mailto:acopitan@gmail.com"},
        {id: 5, name: "github", url: "https://github.com/enlacee?tab=repositories"},
        {id: 6, name: "linkedin", url: "https://www.linkedin.com/in/9703b1149/"}
      ],
    }),
    created: () => {

    }
  }
</script>