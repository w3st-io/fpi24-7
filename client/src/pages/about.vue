<template>
	<BContainer class="mb-4" style="margin-top: 240px;">
		<BCard bg-variant="light">
			<h1>About</h1>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import defaultData from '../defaults/pages/index'
	import router from '../router'

	export default {
		components: {
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