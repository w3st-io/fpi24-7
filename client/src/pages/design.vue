<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 10 }" class="my-4">
				<!-- Row 1 -->
				<BRow>
					<BCol cols="12" md="7" lg="8" >
						<h3 class="text-primary">{{ defaultData.r1.c1.title }}</h3>
						<p>{{ defaultData.r1.c1.description }}</p>
					</BCol>

					<BCol
						cols="12" md="5" lg="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="2"
					><img :src="defaultData.r1.c2.image" class="w-100 shadow"></BCol>
				</BRow>

				<!-- Row 2 -->
				<BRow>
					<BCol cols="12" md="12" class="my-4">
						<BCard no-body bg-variant="primary" class="py-2 text-light">
							<h3 class="m-0 text-center">{{ defaultData.r2.c1.title }}</h3>
						</BCard>
					</BCol>
				</BRow>

				<!-- Row 3 -->
				<BRow class="">
					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-1"
					>
						<img
							:src="defaultData.r3.c2.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
					</BCol>

					<BCol cols="12" md="8" class="mt-3">
						<h4 class="text-primary">{{ defaultData.r3.c1.title }}</h4>
						<p>{{ defaultData.r3.c1.description }}</p>

						<h6 class="text-primary">{{ defaultData.r3.c1.listTitle }}</h6>
						<ul>
							<li v-for="(li, index) in defaultData.r3.c1.list" :key="index">
								{{ li }}
							</li>
						</ul>
					</BCol>
				</BRow>

				<!-- Row 4 -->
				<BRow class="mb-5">
					<BCol cols="12" md="7" lg="8" class="mt-3">
						<h4 class="text-primary">{{ defaultData.r4.c1.title }}</h4>
						<p>{{ defaultData.r3.c1.description }}</p>

						<h6 class="text-primary">{{ defaultData.r4.c1.listTitle }}</h6>
						<ul>
							<li v-for="(li, index) in defaultData.r4.c1.list" :key="index">
								{{ li }}
							</li>
						</ul>
					</BCol>
					<BCol
						cols="12" md="5" lg="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1"
					>
						<img
							:src="defaultData.r4.c2.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
					</BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
	import defaultData from '../defaults/pages/design'
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