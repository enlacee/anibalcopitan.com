<template>
    <section id="habilidades">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div id="owl-demo" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="img-responsive">
                            <img src="img/skills/python.png" title="Python" alt="Python">
                            <div class="textoverlay">
                                <h2>Python</h2>
                                <p>La navaja suiza</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-responsive">
                            <img src="img/skills/javascript.png" title="Javascript" alt="Javascript">
                            <div class="textoverlay">
                                <h2>Javascript</h2>
                                <p>Multiplataforma</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-responsive">
                            <img src="img/skills/php.png" title="PHP" alt="PHP">
                            <div class="textoverlay">
                                <h2>PHP</h2>
                                <p>Zend-Framework, Laravel</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-responsive">
                            <img src="img/skills/linux.png" title="LINUX" alt="LINUX">
                            <div class="textoverlay">
                                <h2>LINUX</h2>
                                <p>El todo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>
export default {
    name: 'SectionSkill',
    data(){
        return {
            title: "Skills"
        };
    }
}
</script>
<style scoped>
    #habilidades{
        background-color: #eee;
    }
    .item {
        display: inline-block;
        background: #fff;
        padding: 0;
        margin: 0 0.3em;
        color: black;
    }
    .item div img {
        /*height: 70px;*/
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
    @media(max-width:768px) {
        section h2 {
            font-size: 1.8em;
        }
        .item div img {
            width: 250px;
        }
        div .textoverlay{
            width: 250px;
        }
    }
</style>