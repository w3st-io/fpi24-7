<template>
	<div class="nav-spacer">
		<BContainer class="my-5">
			<form @submit.prevent="sendFile" enctype="multipart/form-data">
				<input type="text">

				<input
					type="file"
					ref="file"
					@change="selectFile"
				>

				<button type="submit">submit</button>
			</form>
		</BContainer>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				file: '',
				reqData: {},
			}
		},

		methods: {
			selectFile() {
				this.file = this.$refs.file.files[0]
			},

			async sendFile() {
				try {
					const formData = new FormData()
					formData.append('file', this.file)
					formData.append('to', 'test')

					this.reqData = await axios.post(
						'/api/careers/apply',
						formData,
					)

					console.log('reqData', this.reqData.data)
				}
				catch (error) {
					console.log('s', error)
				}
			},
		},
	}
</script>