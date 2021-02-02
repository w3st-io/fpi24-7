<template>
	<div>
		<!-- Get a Quote -->
		<form @submit.prevent="submit">
			<h3 class="mb-3 text-center text-primary">
				Get a Quote
			</h3>
			<hr>

			<input v-model="email" type="email" placeholder="Email" class="mt-3 form-control">
			<input v-model="name" type="text" placeholder="Name" class="mt-3 form-control">
			<input v-model="subject" type="text" placeholder="Subject" class="mt-3 form-control">
			<textarea
				v-model="message"
				type="text"
				placeholder="Message"
				class="mt-3 form-control"
			></textarea>

			<!-- Submit -->
			<BButton type="submit" class="w-100 mt-3">Submit</BButton>
		</form>
	</div>
</template>

<script>
	import mailService from '../services/mailService'

	export default {
		data() {
			return {
				email: '',
				name: '',
				subject: '',
				message: '',
			}
		},

		methods: {
			async submit() {
				await mailService.s_getQuote(
					this.email,
					this.name,
					this.subject,
					this.message
				)
			}
		},
	}
</script>