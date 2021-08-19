<template>
    <header :class="{hide: hide}">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div id="head-svg-man" class="head">
                        <h2>{{ title }}</h2>
                    </div>
                    <div class="intro-text">
                        <ul class="list-inline">
                            <li>
                                <a href="tel:+0051978412711" target="_blank" class="btn-social btn-outline">
                                <i class="fas fa-phone"></i></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://wa.link/s7q46e"
                                class="btn-social btn-outline"><i class="fab fa-whatsapp"></i></a>
                            </li>
                        </ul>
                        <hr class="star-light">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            hide: true
        }
    },
    mounted() {
    const idSection = 'qr';
    const { name, hash } = this.$route;

    // read route
    if (name === idSection || hash.substring(1) === idSection) {
      this.hide = false;
    }
	}
}
</script>
