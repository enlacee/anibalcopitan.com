<template>
	<section id="yape" class="achide" :class="{hide: hide}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>{{ title }}</h2>
					<hr class="star-primary">
				</div>
				<div class="col-lg-12">
					<img src="~/assets/img/yape-qr-formato.png" alt="yape QR" class="img-responsive">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'SectionYape',
	data() {
		return {
			title: "Yape",
			hide: true
		}
	},
	mounted() {
    const idSection = 'yape';
    const { name, hash } = this.$route;

    // read route
    if (name === idSection || hash.substring(1) === idSection) {
      this.hide = false;
    }
	}
}
</script>
<style scoped>
	img {
		margin: 0 auto;
	}
</style>
