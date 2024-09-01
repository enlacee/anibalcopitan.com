<template>
    <section id="portfolio">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>


            <div class="row">
                <div id="owl-demox" class="owl-carousel owl-theme">
                  <div class="item">
                        <div class="img-responsive">
                          <a href="https://anibalcopitan.com/okeypay/" target="_blank">
                            <img src="~/assets/img/portfolio/okeypay.png" title="OkeyPay" alt="OkeyPay" width="400px" height="400px">
                            <div class="textoverlay">
                              <h2>OkeyPay</h2>
                              <p>Yape payment verifier</p>
                              <p>Kotlin/JS - GoogleCloudPlatform</p>
                            </div>
                          </a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-responsive">
                          <a href="https://reservatotal.anibalcopitan.com/" target="_blank">
                            <img src="~/assets/img/portfolio/rentando.png" title="Rentando" alt="Rentando" width="400px" height="400px">
                            <div class="textoverlay">
                                <h2>Reserva Total</h2>
                                <p>Renting of soccer field</p>
                                <p>Vue JS 3 - TailwindCss</p>
                            </div>
                          </a>
                        </div>
                    </div>
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
            title: "projects"
        };
    }
}
</script>
<style>
    .item {
        display: inline-block;
        background: #fff;
        padding: 0;
        margin: 0 0.3em;
        color: black;
    }
    .item div img {
        /* filter: grayscale(100%); */
    }
    div .textoverlay{
        color: #FFF;
        font-size: 12px;
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
        width: 400px;
        margin: 0 auto;
    }
    div .textoverlay p{
        margin: 0;
    }
    @media (max-width: 768px) {
        .item div img {
            width: 250px;
            height: 250px;
        }
        div .textoverlay{
            width: 250px;
        }
    }
</style>
