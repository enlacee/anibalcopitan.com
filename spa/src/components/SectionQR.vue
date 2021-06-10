<template>
    <header :class="{hide: hide}">
        <div class="container" style="xpadding-top: 50vh;">
            <div class="row">
                <div class="col-lg-12">
                    <div id="head-svg-man" class="head">
                        <h2>{{ title }}</h2>
                    </div>
                    <div class="intro-text" id="list-conctact">
                        <ul class="list-inline" id="list-inline">
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
    name: 'SectionQR',
    props: {
        title: String
    },
    data: function() {
        return {
            hide: true
        }
    },
	mounted: function(){
		//read route
		if (this.$route.name === 'qr') {
			this.hide = false;
		}
	}
}
</script>