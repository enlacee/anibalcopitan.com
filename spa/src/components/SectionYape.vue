<template>
    <section id="yape" class="achide hide_">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
                <div class="col-lg-12 text-center">
                    <img src="img/yape-qr-formato.png" alt="yape QR">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionYape',
    data(){
        return {
            title: "Yape"
        }
    }
}
</script>