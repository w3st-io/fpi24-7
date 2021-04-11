<template>
	<BContainer class="nav-spacer my-3">
		<BCard bg-variant="none" class="shadow">
			<h1 class="text-center text-primary">Pay Your Invoice</h1>

			<label for="card_number" class="h3 text-primary">Card Number</label>
			<input
				v-model="card.number"
				name="card_number"
				type="text"
				class="form-control mb-3"
			>

			<BButton variant="primary" class="w-100">Pay Invoice</BButton>
		</BCard>
	</BContainer>
</template>

<script>
	//import PayInvoiceService from ''

	export default {
		data() {
			return {
				card: {
					number: '',
					exp_month: '',
					exp_year: '',
					cvc: '',
				},
			}
		},

		created() {
			
		},

		methods: {},	
	}
</script>