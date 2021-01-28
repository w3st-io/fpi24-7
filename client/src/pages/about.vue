<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax />

		<!-- Content v-rellax="{ speed: 4, }" -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 5, }" class="my-4">
				<BRow>
					<!-- Text 1 -->
					<BCol cols="12" md="6">
						<h3 class="text-primary">{{ defaultData.r1.c1.title }}</h3>
						<p>{{ defaultData.r1.c1.description }}</p>
					</BCol>

					<!-- Image 1 -->
					<BCol
						cols="12" md="6"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1"
					>
						<img
							:src="defaultData.r1.c2.image"
							class="w-100 shadow"
						>
					</BCol>

					<!-- Image 2 -->
					<BCol
						cols="12" md="4" class="mt-3"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1"
					>
						<img
							:src="defaultData.r2.c1.image"
							class="w-100"
						>
					</BCol>

					<!-- Text 2 -->
					<BCol cols="12" md="8" class="mt-3">
						<h3 class="text-primary">{{ defaultData.r2.c2.title }}</h3>
						<p>{{ defaultData.r2.c2.description }}</p>
					</BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
	import defaultData from '../defaults/pages/about'
	import router from '../router'

	export default {
		components: {
			Parallax
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},

		methods: {
			redirect() {
				router.push({
					name: 'post',
					params: {
						sort: 1,
						limit: 5,
						page: 1,
					},
				})
			}
		},
	}
</script>