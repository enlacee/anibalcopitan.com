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

            <div class="row reviews-section">
                <h3>Reseñas de Amazon</h3>
                <div class="review-card">
                    <img src="~/assets/img/ebook/como-migrar-a-linux-review.png" alt="como migrar a linux review">
                </div>
                <div class="review-card">
                    <img src="~/assets/img/ebook/como-migrar-a-linux-review-comment-1.png" alt="como migrar a linux review comment 1">
                </div>

                <a href="https://a.co/d/2wmoHbw" target="_blank" class="btn-buy">Adquirir mi ebook ahora</a>
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
<style scoped>
.reviews-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.reviews-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.review-card {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.btn-buy {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f90;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.btn-buy:hover {
  background-color: #e67e00;
}
</style>
