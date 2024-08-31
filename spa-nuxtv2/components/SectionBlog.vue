<template>
    <section id="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div id="blogger-content" class="row">
                <ul>
                    <li v-for="i in posts" :key="i.id.$t">
                        <a :href="'' + i.link[i.link.length - 1].href">
                            <h3>{{ i.title.$t }}</h3>
                            <p>{{ setFormatLocalTime(i.published.$t) }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'SectionBlog',
    data() {
      return {
        title: "Read My Latest Blog Posts",
        posts: [],
        vueAppUrlBlog: process.env.appUrlBlog
      }
    },
    mounted() {
        this.getAllPosts();
    },
    methods: {
        getAllPosts() {

            window.getPosts = (data) => {
                this.posts = data.feed.entry.slice(0,5);
            };

            const script = document.createElement("script");
            script.setAttribute(
                "src",
                this.vueAppUrlBlog + "/feeds/posts/default?alt=json-in-script&callback=getPosts"
            );

            document.head.appendChild(script);
        },
        setFormatLocalTime: (stringDate) => {
            const dateStr = new Date(stringDate);
            return dateStr.toLocaleDateString("es-PE");
        },
    }
}
</script>
<style scoped>
#blogger-content ul{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
#blogger-content li{
    border-bottom-style: dotted;
    border-bottom-width: 1px;
    list-style-type: none;
    width: 350px;
    background: black;
    height: 220px;
    padding: 0;
    margin: 0;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
}
@media (max-width: 420px) {
    #blogger-content li{
        width: 95%;
        padding: 0 0.3em;
    }
}
@media (max-width: 768px) {
    #blogger-content li{
        margin-right: 0;
    }
}
#blogger-content li:last-child{
    padding: 0;
    border-bottom: none;
}
#blogger-content li p {
    margin: 0;
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    text-align: right;
    padding: 8px;
}
#blogger-content li a {
    color: white;
}
#blogger-content h2 {
    color: black;
}
#blogger-content h3 {
    text-transform: initial;
    text-align: center;
}
</style>
