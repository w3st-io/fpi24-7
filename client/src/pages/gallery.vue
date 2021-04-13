<template>
	<BContainer class="nav-spacer">
		<BCard bg-variant="white" class="my-3">
			<!-- [R1] -->
			<BRow class="mb-3">
				<BCol cols="12" data-aos="fade-down">
					<h1 class="m-0 text-center text-primary">
						{{ defaultData.r1.c1.title }}
					</h1>
				</BCol>
			</BRow>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }">
				<!-- [R2] data-aos="fade-up" -->
				<BRow class="mb-3">
					<BCol
						v-for="(col, i) in defaultData.r2.cx"
						:key="i"
						cols="12" sm="6" md="4" lg="3" xl="3"
						class="mb-3"
						
					>
						<img
							v-lazy="col.image"
							:src="col.image"
							alt="No Photo"
							class="w-100"
							style="height: 300px; object-fit: cover;"
						>
					
						<p class="h6 text-center mt-4">
							{{ col.description }}
							<span class="text-white">.</span>
						</p>
					</BCol>
				</BRow>
			</viewer>

			<!-- [R4] -->
			<BRow class="mb-3">
				<BCol cols="12">
					<h3 class="m-0 text-primary" data-aos="fade-right">
						{{ defaultData.r4.c1.title }}
					</h3>
				</BCol>
			</BRow>

			<BRow class="mb-3">
				<BCol
					v-for="(col, i) in defaultData.r5.cx"
					:key="i"
					cols="12" sm="6"
					class="mb-3 p-3"
					data-aos="fade-up"
				>
					<youtube
						:video-id="getIdFromURL(col.youtubeURL)"
						player-width="100%"
						style="max-width: 700px;"
					/>
				</BCol>
			</BRow>			
		</BCard>
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