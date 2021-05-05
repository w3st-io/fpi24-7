<template>
	<div class="bg-white">
		<BRow class="m-0">
			<BCol cols="12" lg="6" class="">
				<div class="text-center">
					<img :src="companyInfo.companyBigLogo" class="w-100 my-2">

					<h2 class="my-5 font-weight-bold text-dark">
						{{ companyInfo.companyName }}
					</h2>
					
					<a :href="companyInfo.googleMapsLink">
						<h3 class="my-3 text-primary">{{ companyInfo.address }}</h3>
					</a>

					<a :href="companyInfo.phoneNumberLink">
						<BButton
							variant="primary"
							size="lg"
							class="my-5"
						><h1 class="m-0">Give Us a Call!</h1></BButton>
					</a>
				</div>
			</BCol>

			<BCol cols="12" lg="6" class="p-0">
				<div class="size">
					<iframe
						:src="companyInfo.googleMapsEmbed"
						width="100%"
						height="100%"
						style="border: 0;"
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</div>
			</BCol>
		</BRow>
	</div>
</template>

<script>
	import companyInfo from '../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
			}
		},

		created() {
			this.$emit('noNav')
		},
	}
</script>

<style lang="scss" scoped>
	.size {
		height: 100vh;
	}
</style>