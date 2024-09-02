<template>
    <section id="store">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">

                <div class="product-grid">
                    <!-- Producto 1 -->
                    <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="gratis">Gratis</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 1">
                            <h2>Tareas aleatoreas</h2>
                            <p>JS</p>
                        </div>
                    </a>
                
                    <!-- Producto 2 -->
                    <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="de-pago">De Pago</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 2">
                            <h2>Simple youtube</h2>
                            <p>Php - Js - Apache</p>
                        </div>
                    </a>

                    <!-- Producto 3 -->
                    <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="sass">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 3">
                            <h2>OkeyPay</h2>
                            <p>Agrega funcionalidades Yape</p>
                        </div>
                    </a>

                    <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="sass">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 3">
                            <h2>ReservaTotal</h2>
                            <p>Reserva y paga con Yape</p>
                        </div>
                    </a>

                    <!-- <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="sass">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 3">
                            <h2>ReservaTotal</h2>
                            <p>Reserva y paga con Yape</p>
                        </div>
                    </a> -->
                </div>
            </div>

            <div class="row">
                <a href="/store" class="cta-button">Ir a la tienda</a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    // name: 'SectionSkill',
    data() {
        return {
            title: "Tienda"
        };
    }
}
</script>
<style scoped>
  a:hover, a:focus{
    text-decoration: none;
  }




.product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
.product-card {
    position: relative;
    background: #fff;

    /* border-radius: 8px; */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    text-align: center;
    padding: 20px;
    transition: transform 0.3s ease;
}
.product-card:hover {
    transform: scale(1.05);
}
.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
}
.product-card h2 {
    font-size: 20px;
    margin: 10px 0;
}
.product-card p {
    color: #888;
}
.product-card .badges {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 5px;
}
.product-card .badge {
    background: #007bff; /* Color predeterminado */
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
}
.product-card .badge[data-type="gratis"] {
    background: #28a745; /* Verde para gratis */
}
.product-card .badge[data-type="de-pago"] {
    background: #dc3545; /* Rojo para de pago */
}
.product-card .badge[data-type="sass"] {
    background: #17a2b8; /* Cyan para Sass */
}
.cta-button {
    display: block;
    width: 200px;
    margin: 40px auto;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s ease;
}
.cta-button:hover {
    background-color: #0056b3;
}

</style>
