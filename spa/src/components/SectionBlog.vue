<template>
    <section id="last-posts">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row" id="blogger-content">
            </div>
        </div>
    </section>
</template>
<script>

// import get from './library/CallbackBlogger.js'
export default {
    name: 'SectionBlog',
    data: function(){
        return {
            title: "Last Articles"
        };
    },
    mounted() {
        let script = document.createElement('script')
        script.setAttribute('src', 'https://blog.anibalcopitan.com/feeds/posts/default?alt=json-in-script')
        // script.onload = callback;
        document.head.appendChild(script);
        // console.log(this.$el.querySelectorAll('h2'));
    }
}
</script>