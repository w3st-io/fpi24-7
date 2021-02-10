<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" :parallaxNumber="0" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 4 }">
				<!-- [R1] -->
				<BRow class="mb-3">
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
					><img :src="defaultData.r1.c2.image" class="w-100 shadow rounded"></BCol>
				</BRow>

				<!-- [R2] -->
				<BRow class="mb-3">
					<BCol cols="12">
						<h1 class="text-center text-primary">
							{{ defaultData.r2.c1.title }}
						</h1>
					</BCol>

					<BCol cols="12" md="4" lg="3" class="d-none d-md-block">
						<img :src="defaultData.r2.c2.image" class="w-100">
					</BCol>

					<BCol cols="12" md="8" lg="9">
						<h6>{{ defaultData.r2.c3.description }}</h6>
					</BCol>
				</BRow>

				<!-- [R2] -->
				<BRow class="mb-3">
					<BCol cols="12">
						<h1 class="text-center text-primary">
							Benefits
						</h1>
					</BCol>

					<BCol
						v-for="(col, index) in defaultData.r3.cx"
						:key="index"
						cols="12" sm="6" md="4" lg="3"
					>
						<img :src="col.image" alt="No Image" class="w-100 px-5">
						<h4 class="text-center text-primary">{{ col.text }}</h4>
					</BCol>
				</BRow>

				<!-- [R4] -->
				<BRow>
					<BCol cols="12">
						<div class="text-center">
							<RouterLink to="/">
								<BButton variant="primary" size="lg">
									Apply Now
								</BButton>
							</RouterLink>
						</div>
					</BCol>
				</BRow>
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