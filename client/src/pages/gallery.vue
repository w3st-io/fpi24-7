<template>
	<BContainer class="nav-spacer">
		<div class="my-3">
			<!-- [R1] -->
			<BRow>
				<BCol cols="12" class="mb-3">
					<h1 class="text-center text-primary">
						{{ defaultData.r1.c1.title }}
					</h1>
				</BCol>
			</BRow>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }">
				<BRow>
					<BCol
						v-for="(col, index) in defaultData.r2.cx"
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
		</div>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import defaultData from '@/defaults/pages/gallery'

	export default {
		components: {
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>