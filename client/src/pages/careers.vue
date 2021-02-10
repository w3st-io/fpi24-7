<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 4 }">
				<!-- Row 1 -->
				<BRow>
					<BCol cols="12" md="7" lg="8">
						<h1 class="text-center text-primary">
							{{ defaultData.r1.c1.title }}
						</h1>
						<h4 class="text-center text-secondary">
							{{ defaultData.r1.c1.description }}
						</h4>
					</BCol>

					<BCol
						cols="12" md="5" lg="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1"
					><img :src="defaultData.r1.c2.image" class="w-100"></BCol>
				</BRow>

				<!-- Row 2 -->
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '@/components/display/Parallax'
	import defaultData from '@/defaults/pages/careers'

	export default {
		components: {
			Parallax,
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>