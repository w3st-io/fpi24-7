<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" v-rellax="{ speed: 10 }" class="my-4">
				<!-- Row 1 -->
				<BRow>
					<BCol data-aos="fade-right" cols="12" md="6">
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

				<!-- Row 2 -->
				<BRow>
					<!-- Image 2 -->
					<BCol
						cols="12" md="4" class="mt-5"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="3"
					><img :src="defaultData.r2.c1.image" class="w-100"></BCol>

					<!-- Text 2 -->
					<BCol data-aos="fade-left" cols="12" md="8" class="mt-3">
						<h1 class="text-primary">{{ defaultData.r2.c2.title }}</h1>
						<p>{{ defaultData.r2.c2.description }}</p>
					</BCol>
				</BRow>

				<!-- Row 3 -->
				<BRow class="mt-4">
					<BCol
						cols="12" md="4"
						data-aos="fade-right"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-1"
						class="mt-3"
					>
						<h3 class="text-primary">{{ defaultData.r3.c1.name }}</h3>
						<p>{{ defaultData.r3.c1.description }}</p>
						<img
							:src="defaultData.r3.c1.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
						<a :href="defaultData.r3.c1.contactEmail">
							<BButton size="sm" pill class="w-100 mb-3">
								Contact {{ defaultData.r3.c1.name }}
							</BButton>
						</a>
					</BCol>

					<BCol
						cols="12" md="4"
						data-aos="fade-up"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="3"
						class="mt-5"
					>
						<img
							:src="defaultData.r3.c2.image"
							class="w-100 mb-3 rounded-lg shadow"
						>
						<h3 class="text-primary">{{ defaultData.r3.c2.name }}</h3>
						<p>{{ defaultData.r3.c2.description }}</p>

						<a :href="defaultData.r3.c2.contactEmail">
							<BButton size="sm" pill class="w-100 mb-3">
								Contact {{ defaultData.r3.c2.name }}
							</BButton>
						</a>
					</BCol>

					<BCol
						cols="12" md="4"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						data-rellax-desktop-speed="-4"
						class="mt-0"
					>
						<BCard bg-variant="primary" class="text-light shadow">
							<h2 class="mb-3 text-center">
								{{ defaultData.r3.c3.title }}
							</h2>

							<ul>
								<li
									v-for="(sm, index) in defaultData.r3.c3.staffMembers"
									:key="index"
								>
									<h6>{{ sm.name }} - {{ sm.title }}</h6>
								</li>
							</ul>
						</BCard>
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