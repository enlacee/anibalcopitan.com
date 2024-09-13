<template>
    <section id="ebook">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
              <div>
                <!-- <h2>Como Migrar de Windows a Linux</h2> -->
                <p>Guía rápida para migrar a Linux. Disponible en <a href="https://a.co/d/esLdfKR" target="_blank">Amazon</a> o gratis al suscribirte.</p>
                <iframe type="text/html" sandbox="allow-scripts allow-same-origin allow-popups" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" src="https://read.amazon.com/kp/card?asin=B00YR69BZI&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_GJA1270MKT2T65YZXWY3" ></iframe>
              </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    // name: 'SectionSkill',
    data() {
        return {
            title: "Empieza con Linux Hoy"
        };
    }
}
</script>
