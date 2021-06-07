<template>
	<section id="yape" class="achide" :class="{hide: hide}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>{{ title }}</h2>
					<hr class="star-primary">
				</div>
				<div class="col-lg-12">
					<img src="img/yape-qr-formato.png" alt="yape QR" class="img-responsive">
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
			title: "Yape",
			hide: true
		}
	},
	mounted: function(){
		//read route
		if (this.$route.name === 'yape') {
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