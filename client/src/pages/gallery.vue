<template>
	<BContainer class="nav-spacer">
		<div class="my-3">
			<!-- [R1] -->
			<BRow class="mb-3">
				<BCol cols="12">
					<h1 class="m-0 text-center text-primary">
						{{ defaultData.r1.c1.title }}
					</h1>
				</BCol>
			</BRow>

			<BRow class="mb-3">
				<BCol cols="12">
					<h3 class="m-0 text-primary">
						{{ defaultData.r2.c1.title }}
					</h3>
				</BCol>
			</BRow>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }">
				<BRow>
					<BCol
						v-for="(col, index) in defaultData.r3.cx"
						:key="index"
						cols="12" sm="6" md="4" lg="3" xl="3"
						class="mb-3"
					>
						<BCard bg-variant="white" class="rounded-0 shadow">
							<img
								:src="col.image"
								alt="No Photo"
								class="w-100"
								style="height: 300px; object-fit: cover;"
							>
						
							<h6 class="text-center mt-4">
								{{ col.description }}
								<span class="text-white">.</span>
							</h6>
						</BCard>
					</BCol>
				</BRow>
			</viewer>

			<BRow class="mb-3">
				<BCol cols="12">
					<h3 class="m-0 text-primary">
						{{ defaultData.r4.c1.title }}
					</h3>
				</BCol>
			</BRow>

			<BRow class="mb-3">
				<BCol
					v-for="(col, index) in defaultData.r5.cx"
					:key="index"
					cols="12" sm="6"
					class="mb-3 p-3"
				>
					<youtube
						:video-id="getIdFromURL(col.youtubeURL)"
						player-width="100%"
						style="max-width: 700px;"
					/>
				</BCol>
			</BRow>

			
		</div>
	</BContainer>
</template>


<script>
	// [IMPORT] //
	import { getIdFromURL } from 'vue-youtube-embed'

	// [IMPORT] Personal //
	import defaultData from '@/defaults/pages/gallery'

	export default {
		data() {
			return {
				defaultData: defaultData,
			}
		},

		methods: {
			getIdFromURL(url) { return getIdFromURL(url) }
		},
	}
</script>