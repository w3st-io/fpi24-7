<template>
	<div>
		<Parallax />
		<BContainer class="">
			<BCard bg-variant="white" class="my-4">
				<h1>About</h1>
			</BCard>

			<div class="rellax" data-rellax-speed="-3">
			I’m slow and smooth
			</div>

			<div class="rellax" data-rellax-speed="7">
			I’m super fast!!
			</div>

			<div class="rellax" data-rellax-speed="-5">
			I’m extra slow and smooth
			</div>
		</BContainer>
	</div>
</template>


<script>
	// [IMPORT] Personal //
	import Parallax from '../components/display/Parallax'
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