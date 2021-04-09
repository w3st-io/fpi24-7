<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax :imgURL="defaultData.parallaxImg" />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 3 }">
				<!-- [R1] About -->
				<BRow>
					<BCol data-aos="fade-up" cols="12" md="6">
						<h1 class="text-primary">{{ defaultData.r1.c1.title }}</h1>
						<p class="h4">{{ defaultData.r1.c1.description }}</p>
					</BCol>

					<BCol
						cols="12" md="6"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1"
					><img :src="defaultData.r1.c2.image" class="w-100 shadow"></BCol>
				</BRow>

				<!-- [R2] Meet the Staff -->
				<BRow>
					<BCol cols="12" md="12" class="my-4">
						<BCard no-body bg-variant="primary" class="py-2 text-light">
							<h2 class="m-0 text-center">{{ defaultData.r2.c1.title }}</h2>
						</BCard>
					</BCol>

					<!-- [R3.C2] Staff -->
					<BCol cols="12" class="mb-3">
						<Conveyor
							:images="defaultData.r2.c2.images"
							:totalOnLg="4"
							class="mb-4"
						/>

						<p class="h4">{{ defaultData.r2.c2.description }}</p>
					</BCol>

					<!-- [R3.CX] Bosses -->
					<BCol
						v-for="(col, index) in defaultData.r2.cx"
						:key="index"
						cols="12" md="4"
						data-aos="fade"
					>
						<!-- Text -->
						<div v-if="isOdd(index)">
							<!-- Image -->
							<img
								:src="col.image"
								class="w-100 mb-3 rounded-lg shadow"
							>

							<h3 class="text-primary">{{ col.name }}</h3>
							<p class="h5 mb-3">{{ col.description }}</p>	
						</div>

						<!-- Text -->
						<div v-else>
							<h3 class="text-primary">{{ col.name }}</h3>
							<p class="h5 mb-3">{{ col.description }}</p>	

							<!-- Image -->
							<img
								:src="col.image"
								class="w-100 mb-3 rounded-lg shadow"
							>
						</div>

						<a :href="col.contactEmail">
							<BButton size="sm" pill class="w-100 mb-3">
								Contact {{ col.name }}
							</BButton>
						</a>
					</BCol>

					<!-- [R3.C4] the 24/7 staff -->
					<BCol
						cols="12" md="4"
						class="mt-0"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-1"
						data-aos="fade"
					>
						<BCard bg-variant="primary" class="text-light shadow">
							<h2 class="mb-3 text-center">
								{{ defaultData.r2.c4.title }}
							</h2>

							<ul>
								<li
									v-for="(sm, i) in defaultData.r2.c4.staffMembers"
									:key="i"
								><h6>{{ sm.name }} - {{ sm.title }}</h6></li>
							</ul>
						</BCard>
					</BCol>
				</BRow>

				<!-- [R3] Our Mission -->
				<BRow>
					<!-- Title -->
					<BCol cols="12" md="12" class="my-4">
						<BCard no-body bg-variant="primary" class="py-2 text-light">
							<h2 class="m-0 text-center">
								{{ defaultData.r3.c1.title }}
							</h2>
						</BCard>
					</BCol>

					<!-- Text -->
					<BCol cols="12" md="8" class="mt-3">
						<p class="h4">{{ defaultData.r3.c2.description }}</p>
					</BCol>
					
					<!-- Image -->
					<BCol
						cols="12" md="4" class="mt-5"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed=".5"
						data-aos="fade-up"
					><img :src="defaultData.r3.c3.image" class="w-100"></BCol>
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Conveyor from '@/components/display/Conveyor'
	import Parallax from '@/components/display/Parallax'
	import defaultData from '@/defaults/pages/about'
	import router from '@/router'


	export default {
		components: {
			Parallax,
			Conveyor,
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},

		methods: {
			isOdd(num) { return num % 2 },

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