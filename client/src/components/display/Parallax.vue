<template>
	<div class="parallax" :style="`background-image: url(${imgURL});`" v-rellax="{ speed: 2 }">
		<div class="text-center" style="padding-top: 270px;"></div>
	</div>
</template>

<script>
export default {
	props: {
		imgURL: {
			default: require('../../assets/images/default-parallax.jpg')
		}
	},
}
</script>

<style lang="scss" scoped>
	.parallax {
		/* Set a specific height */
		min-height: 500px; 

		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
	@media only screen and (max-device-width: 320px) {
		.parallax { background-attachment: scroll; }
	}
</style>