<template>
	<div>
		<Parallax />
		<BContainer class="">
			<BCard bg-variant="white" class="my-4">
				<h1>About</h1>
			</BCard>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/cosmetic/Paralax'
	import defaultData from '../defaults/pages/index'
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