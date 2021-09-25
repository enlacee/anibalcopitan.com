<template>
    <section id="developer" class="achide" :class="{hide: hide}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Developer Accounts</h2>
                    <hr class="star-primary">
                </div>
                <div class="col-lg-12 text-center">
                    <ul>
                        <li>
                            <h4></h4>
                            <div>
                                <p>GitHub</p>
                                <code>User:</code> <code>https://github.com/enlacee</code><br/>
                                <code>Email:</code> <code>contact@anibalcopitan.com</code>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            hide: true
        }

    },
    mounted() {
    const idSection = 'developer';
    const { name, hash } = this.$route;

    // read route
    if (name === idSection || hash.substring(1) === idSection) {
      this.hide = false;
    }
	}
}
</script>
<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }
    ul li {
        width: 400px;
        min-height: 350px;
        float: left;
        margin: 0 0.4em;
        border: 1px solid #eee;
        padding: 5px;
        list-style: none;
    }
    ul li h4 {
        font-size: 1.9em;
        border-bottom: 1px solid #eee;
        line-height: 1.5em;
    }
</style>
