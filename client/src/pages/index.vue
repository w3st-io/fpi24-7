<template>
	<div>
		<Parallax />

		<BContainer class="my-5" v-rellax="{ speed: 10 }">
			<BRow>
				<!-- Main -->
				<BCol cols="12" lg="8">
					<!-- Caraousel -->
					<BCaraousel :slideObjs="defaultData.content.r1.c1.caraousel" />

					<p v-html="defaultData.content.r1.c1.imageText" class="my-3 h2 text-center"></p>

					<BRow class="mb-3">
						<BCol
							v-for="(col, index) in defaultData.content.r1.c1.r1.columns"
							:key="index"
							cols="12" sm="6" md="6" lg="6" xl="4"
							class="mb-3"
						>
							<BCard class="shadow">
								<div class="text-center">
									<img :src="col.image" alt="Card Image" class="rounded">
									<h4 class="text-primary">{{ col.title }}</h4>
								</div>

								<p class="text-dark">{{ col.description }}</p>

								<BButton pill variant="primary" class="w-100">
									Read More
								</BButton>
							</BCard>
						</BCol>
					</BRow>

					<BRow class="mb-3">
						<BCol cols="12" md="7">
							<div class="mb-3 text-center">
								<img
									:src="defaultData.content.r1.c1.r2.c1.image"
									alt="Card Image"
									class="w-100 rounded"
								>
							</div>
						</BCol>

						<BCol cols="12" md="5">
							<p class="h5 mb-3">
								{{ defaultData.content.r1.c1.r2.c2.description }}
							</p>
						</BCol>
					</BRow>
				</BCol>

				<!-- Side -->
				<BCol cols="12" lg="4">
					<form action="" class="mb-4 card card-body shadow">
						<!-- Quote title -->
						<h3 class="mb-3 text-center">
							{{ defaultData.content.r1.c2.getQuoteTitle }}
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
							{{ defaultData.content.r1.c2.operationsTitle }}
						</h3>
						<hr class="border-light">

						<!-- Hours -->
						<p class="mt-3 h4 text-primary">Hours</p>
						<BListGroup>
							<BListGroupItem class="p-1 bg-dark font-weight-bold">
								{{ defaultData.content.r1.c2.hours[0].days }}
							</BListGroupItem>

							<BListGroupItem class="p-1 bg-dark">
								{{ defaultData.content.r1.c2.hours[0].hours }}
							</BListGroupItem>

							<BListGroupItem class="p-1 bg-dark font-weight-bold">
								{{ defaultData.content.r1.c2.hours[1].days }}
							</BListGroupItem>

							<BListGroupItem class="p-1 bg-dark">
								{{ defaultData.content.r1.c2.hours[0].hours }}
							</BListGroupItem>
						</BListGroup>

						<!-- Location -->
						<p class="mt-3 h4 text-primary">Location</p>
						<a
							:href="defaultData.content.r1.c2.googleMapsLink"
							class="mt-3 text-light"
						>{{ defaultData.content.r1.c2.address }}</a>

						<!-- Phone # -->
						<p class="h4 mt-3 text-primary">Phone Number</p>
						<a
							:href="defaultData.content.r1.c2.phoneNumberLink"
							class="text-light"
						>{{ defaultData.content.r1.c2.phoneNumber }}</a>

						<!-- Fax # -->
						<p class="h4 mt-3 text-primary">Fax Number:</p>
						<a
							:href="defaultData.content.r1.c2.faxNumberLink"
							class="text-light"
						>{{ defaultData.content.r1.c2.faxNumber }}</a>
					</BCard>
				</BCol>
			</BRow>

			<BRow>
				<BCol cols="12">
					
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import BCaraousel from '../components/display/BCarousel'
	import Parallax from '../components/display/Parallax'
	import defaultData from '../defaults/pages'
	import router from '../router'

	export default {
		components: {
			Parallax,
			BCaraousel,
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