<template>
	<div>
		<!-- Parallax Image Above -->
		<Parallax />

		<!-- Content -->
		<BContainer>
			<BCard bg-variant="white" class="my-4" v-rellax="{ speed: 5 }">
				<!-- Row 1 -->
				<BRow>
				
				</BRow>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '@/components/display/Parallax'
	import defaultData from '@/defaults/pages/contact-us'

	export default {
		components: {
			Parallax,
		},

		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>