<template>
    <section>
        <div class="container" style="padding-top: 50vh;">
            <div class="row">
                <div class="col-lg-12">
                    <div id="head-svg-man" style="">
                        <h2>{{ title }}</h2>
                    </div>
                    <div class="intro-text" id="list-conctact" style="display: block;">
                        <ul class="list-inline" id="list-inline">
                            <li><a href="tel:+0051978412711" target="_blank" class="btn-social btn-outline"><i class="fas fa-phone"></i></a></li>
                            <li><a target="_blank" href="https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D51978412711%26text%3DHola%20te%20contacto%20desde%20http%3A%2F%2Fanibalcopitan.com" class="btn-social btn-outline"><i class="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionQR',
    props: {
        title: String
    },
    data(){
        return {

        }
    },
}
</script>
<style scoped>
section{
    display: none;
    min-height: 100vh;
    text-align: center;
    color: #fff;
    background: #18bc9c;
}
</style>