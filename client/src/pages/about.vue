<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 10 }" class="my-4">
				<!-- [R1] About -->
				<BRow>
					<BCol data-aos="fade-up" cols="12" md="6">
						<h1 class="text-primary">{{ defaultData.r1.c1.title }}</h1>
						<p>{{ defaultData.r1.c1.description }}</p>
					</BCol>

					<BCol
						cols="12" md="6"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="2"
					><img :src="defaultData.r1.c2.image" class="w-100 shadow"></BCol>
				</BRow>

				<!-- [R2] Meet the Staff -->
				<BRow>
					<!-- [R3.C1] Title -->
					<BCol cols="12" class="mt-2">
						<h1 class="text-center text-primary">
							{{ defaultData.r2.c1.title }}
						</h1>
					</BCol>

					<!-- [R3.C2] Staff -->
					<BCol cols="12" class="mb-5">
						<Conveyor
							:images="defaultData.r2.c2.images"
							:totalOnLg="4"
							class="mb-4"
						/>

						<p>{{ defaultData.r2.c2.description }}</p>
					</BCol>

					<!-- [R3.C3] CEO -->
					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="1.5"
					>
						<!-- Text -->
						<div>
							<h3 class="text-primary">{{ defaultData.r2.c3.name }}</h3>
							<p>{{ defaultData.r2.c3.description }}</p>	
						</div>
						<!-- Image -->
						<img
							:src="defaultData.r2.c3.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
						<a :href="defaultData.r2.c3.contactEmail">
							<BButton size="sm" pill class="w-100 mb-3">
								Contact {{ defaultData.r2.c3.name }}
							</BButton>
						</a>
					</BCol>

					<!-- [R3.C4] Co-Owner -->
					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="0"
						class="mt-3"
					>
						<!-- Image -->
						<img
							:src="defaultData.r2.c4.image"
							class="w-100 mb-3 rounded-lg shadow bg-warning"
						>
						<!-- Text -->
						<div>
							<h3 class="text-primary">{{ defaultData.r2.c4.name }}</h3>
							<p>{{ defaultData.r2.c4.description }}</p>
						</div>

						<a :href="defaultData.r2.c4.contactEmail">
							<BButton size="sm" pill class="w-100 mb-3">
								Contact {{ defaultData.r2.c2.name }}
							</BButton>
						</a>
					</BCol>

					<!-- [R3.C4] the 24/7 staff -->
					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-2"
						class="mt-0"
					>
						<BCard bg-variant="primary" class="text-light shadow">
							<h2 class="mb-3 text-center">
								{{ defaultData.r2.c5.title }}
							</h2>

							<ul>
								<li
									v-for="(sm, index) in defaultData.r2.c5.staffMembers"
									:key="index"
								>
									<h6>{{ sm.name }} - {{ sm.title }}</h6>
								</li>
							</ul>
						</BCard>
					</BCol>
				</BRow>

				<div class="my-5"><hr class="my-6"></div>

				<!-- [R3] Our Mission -->
				<BRow>
					<!-- Image -->
					<BCol cols="12" md="8" class="mt-3">
						<h1 class="text-primary">{{ defaultData.r3.c1.title }}</h1>
						<p data-aos="fade-up">{{ defaultData.r3.c1.description }}</p>
					</BCol>
					
					<!-- Text -->
					<BCol
						cols="12" md="4" class="mt-5"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="2"
					><img :src="defaultData.r3.c2.image" class="w-100"></BCol>
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
	import Conveyor from '../components/display/Conveyor'


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