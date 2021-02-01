<template>
	<div>
		<Parallax :imgURL="defaultData.parallaxImg" />
		
		<section v-rellax="{ speed: 5 }" class="pt-3">
			<!-- Company Details -->
			<BContainer>
				<BRow>
					<!-- Main -->
					<BCol cols="12" lg="8">
						<!-- Caraousel -->
						<BCaraousel :slideObjs="defaultData.con1.r1.c1.caraousel" class="mb-4" />

						<!-- Row 1 -->
						<BRow class="mb-3">
							<BCol
								v-for="(col, index) in defaultData.con1.r1.c1.r1.columns"
								:key="index"
								cols="12" sm="6" md="6" lg="6" xl="4"
								class="mb-3"
							>
								<BCard class="shadow">
									<div class="text-center">
										<h4 class="text-primary">{{ col.title }}</h4>
										<img :src="col.image" alt="Card Image" class="rounded">
									</div>

									<p class="text-dark">{{ col.description }}</p>

									<a href="/about">
										<BButton pill variant="outline-primary" class="w-100">
											Read More
										</BButton>
									</a>
								</BCard>
							</BCol>
						</BRow>

						<!-- Row 2 -->
						<BRow class="mb-4">
							<BCol>
								<BCard class="shadow">
									<BRow>
										<!-- Title -->
										<BCol cols="12">
											<p
												v-html="defaultData.con1.r1.c1.r2.c1.text"
												data-aos="zoom-in"
												class="mb-4 h2 text-center text-primary"
											></p>
										</BCol>

										<!-- Image -->
										<BCol cols="12" md="7">
											<div class="mb-3 text-center">
												<img
													:src="defaultData.con1.r1.c1.r2.c2.image"
													alt="Card Image"
													class="w-100 rounded"
												>
											</div>
										</BCol>

										<!-- Description -->
										<BCol cols="12" md="5">
											<p class="h5 mb-3">
												{{ defaultData.con1.r1.c1.r2.c3.description }}
											</p>
										</BCol>
									</BRow>
								</BCard>
							</BCol>
						</BRow>
					</BCol>

					<!-- Side -->
					<BCol cols="12" lg="4" class="mb-3">
						<form action="" class="mb-4 card card-body shadow">
							<!-- Quote title -->
							<h3 class="mb-3 text-center text-primary">
								{{ defaultData.con1.r1.c2.title }}
							</h3>
							<hr>

							<input type="text" placeholder="Email" class="mt-3 form-control">
							<input type="text" placeholder="Name" class="mt-3 form-control">
							<input type="text" placeholder="Subject" class="mt-3 form-control">
							<textarea
								type="text" placeholder="Message" class="mt-3 form-control"
							></textarea>

							<!-- Submit -->
							<BButton class="w-100 mt-3">Submit</BButton>
						</form>

						<BCard bg-variant="dark" class="text-light">
							<!-- OperationsTitle -->
							<h3 class="mb-3 text-center text-primary">
								{{ defaultData.con1.r1.c2.operationsTitle }}
							</h3>
							<hr class="border-light">

							<!-- Hours -->
							<p class="mt-3 h4 text-primary">Hours</p>
							<BListGroup>
								<BListGroupItem class="p-1 bg-dark font-weight-bold">
									{{ defaultData.con1.r1.c2.hours[0].days }}
								</BListGroupItem>

								<BListGroupItem class="p-1 bg-dark">
									{{ defaultData.con1.r1.c2.hours[0].hours }}
								</BListGroupItem>

								<BListGroupItem class="p-1 bg-dark font-weight-bold">
									{{ defaultData.con1.r1.c2.hours[1].days }}
								</BListGroupItem>

								<BListGroupItem class="p-1 bg-dark">
									{{ defaultData.con1.r1.c2.hours[0].hours }}
								</BListGroupItem>
							</BListGroup>

							<!-- Location -->
							<p class="mt-3 h4 text-primary">Location</p>
							<a
								:href="defaultData.con1.r1.c2.googleMapsLink"
								class="mt-3 text-light"
							>{{ defaultData.con1.r1.c2.address }}</a>

							<!-- Phone # -->
							<p class="h4 mt-3 text-primary">Phone Number</p>
							<a
								:href="defaultData.con1.r1.c2.phoneNumberLink"
								class="text-light"
							>{{ defaultData.con1.r1.c2.phoneNumber }}</a>

							<!-- Fax # -->
							<p class="h4 mt-3 text-primary">Fax Number:</p>
							<a
								:href="defaultData.con1.r1.c2.faxNumberLink"
								class="text-light"
							>{{ defaultData.con1.r1.c2.faxNumber }}</a>
						</BCard>
					</BCol>
				</BRow>
			</BContainer>

			<BContainer fluid>
				<BRow>
					<!-- Conveyor -->
					<BCol cols="12" class="">
						<h1 class="my-1 text-center text-primary">
							{{ defaultData.con2.r1.c1.title }}
						</h1>
			
						<Conveyor
							:images="defaultData.con2.r1.c1.images"
							class="mb-4"
						/>
					</BCol>
					
					<!-- Social Media -->
					<BCol cols="12" class="py-3 text-center text-light bg-primary">
						<h1 class="mb-3">
							{{ defaultData.con2.r1.c2.title }}
						</h1>

						<SocialMediaPlug size="46" />
					</BCol>
				</BRow>
			</BContainer>
		</section>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import BCaraousel from '../components/display/BCarousel'
	import Conveyor from '../components/display/Conveyor'
	import Parallax from '../components/display/Parallax'
	import SocialMediaPlug from '../components/SocialMediaPlug'
	import defaultData from '../defaults/pages'
	import router from '../router'

	export default {
		components: {
			BCaraousel,
			Conveyor,
			Parallax,
			SocialMediaPlug,
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