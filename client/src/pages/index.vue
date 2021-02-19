<template>
	<div>
		<Parallax :imgURL="PageData.parallaxImg" />
		
		<div class="pt-3" v-rellax="{ speed: 7 }">
			<!-- [CNT1] Company Details -->
			<BContainer>
				<!-- [R1] -->
				<BRow>
					<!-- [R1.C1] Main Column -->
					<BCol cols="12" lg="8">
						<!-- [R1.C1.R1] Caraousel -->
						<BRow>
							<BCol cols="12">
								<BCaraousel
									:slideObjs="PageData.cnt1.r1.c1.r1.c1.caraousel"
									class="mb-4"
								/>
							</BCol>
						</BRow>

						<!-- [R1.C1.R2] Residential, Commercial, & Industrial Details -->
						<BRow class="mb-3">
							<BCol
								v-for="(col, index) in PageData.cnt1.r1.c1.r2.cx"
								:key="index"
								cols="12" sm="6" md="6" lg="6" xl="4"
								class="mb-3"
							>
								<BCard class="shadow">
									<div class="text-center mb-3">
										<h4 class="text-primary">{{ col.title }}</h4>
										<img :src="col.image" alt="Card Image" class="rounded">
									</div>

									<p class="h5 text-dark">{{ col.description }}</p>

									<RouterLink to="/about">
										<BButton
											pill
											variant="primary"
											class="w-100"
										>Read More</BButton>
									</RouterLink>
								</BCard>
							</BCol>
						</BRow>

						<!-- [R1.C1.R3] Our Mission + Our Service -->
						<BRow class="mb-4">
							<BCol>
								<BCard class="shadow">
									<BRow>
										<!-- [R1.C1.R3.C1] Our Mission Title -->
										<BCol cols="12">
											<h1 class="mb-4 text-center text-primary">
												{{ PageData.cnt1.r1.c1.r3.c1.titleHTML }}
											</h1>
										</BCol>

										<!-- [R1.C1.R3.C2] Our Mission Image -->
										<BCol
											cols="12" md="4"
											data-aos="zoom-in"
											v-rellax
											data-rellax-xs-speed="0"
											data-rellax-mobile-speed="0"
											data-rellax-tablet-speed="0"
											data-rellax-desktop-speed="0.5"
										>
											<div class="mb-3 text-center">
												<img
													:src="PageData.cnt1.r1.c1.r3.c2.image"
													alt="Card Image"
													class="w-100 rounded"
												>
											</div>
										</BCol>

										<!-- [R1.C1.R3.C3] Our Mission Description -->
										<BCol cols="12" md="8">
											<p  class="h4 mb-3">
												{{ PageData.cnt1.r1.c1.r3.c3.description }}
											</p>
										</BCol>

										<!-- [R1.C1.R3.C4] Our Service Title -->
										<BCol cols="12">
											<p
												v-html="PageData.cnt1.r1.c1.r3.c4.titleHTML"
												ata-aos="zoom-in"
												class="mb-4 h2 text-center text-primary"
											></p>
										</BCol>

										<!-- [R1.C1.R3.C6] Our Service Description -->
										<BCol cols="12" md="7">
											<p class="h4 mb-3">
												{{ PageData.cnt1.r1.c1.r3.c5.description }}
											</p>
										</BCol>

										<!-- [R1.C1.R3.C5] Our Service Image -->
										<BCol cols="12" md="5">
											<div class="mb-3 text-center">
												<img
													:src="PageData.cnt1.r1.c1.r3.c6.image"
													alt="Card Image"
													class="w-100 rounded"
												>
											</div>
										</BCol>
									</BRow>
								</BCard>
							</BCol>
						</BRow>
					</BCol>

					<!-- [R1.C2] Side Column -->
					<BCol cols="12" lg="4" class="mb-3">
						<!-- Get Quote -->
						<BRow>
							<BCol cols="12">
								<BCard bg-variant="white" class="mb-4">
									<GetQuote />
								</BCard>
							</BCol>
						</BRow>

						<!-- Operations -->
						<BRow>
							<BCol cols="12">
								<HoursAndContact />
							</BCol>
						</BRow>
					</BCol>
				</BRow>
			</BContainer>

			<!-- [CNT2] -->
			<BContainer fluid>
				<!-- [R1] Conveyor -->
				<BRow>
					<!-- [R1.C1] -->
					<BCol cols="12" class="">
						<h1 class="my-1 text-center text-primary">
							Our Affiliates
						</h1>
			
						<Conveyor
							:images="PageData.cnt2.r1.c1.images"
							:totalOnLg="4"
							class="mb-4"
						/>
					</BCol>
				</BRow>

				<!-- [R2] Social Media -->
				<BRow>
					<!-- [R21.C1] -->
					<BCol cols="12" class="py-3 text-center text-light bg-primary">
						<h1 class="mb-3">Follow Us on Social Media</h1>

						<SocialMediaPlug size="46" />
					</BCol>
				</BRow>
			</BContainer>
		</div>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import HoursAndContact from '@/components/company/HoursAndContact'
	import GetQuote from '@/components/company/GetQuote'
	import BCaraousel from '@/components/display/BCarousel'
	import Conveyor from '@/components/display/Conveyor'
	import Parallax from '@/components/display/Parallax'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import PageData from '@/defaults/pages'

	export default {
		components: {
			BCaraousel,
			Conveyor,
			Parallax,
			GetQuote,
			SocialMediaPlug,
			HoursAndContact,
		},

		data() {
			return {
				PageData: PageData,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/bootstrap-override.scss';

	.btn:hover {
		@extend .btn-secondary, .shadow;
	}
</style>