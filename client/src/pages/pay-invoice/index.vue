<template>
	<BContainer class="nav-spacer my-3">
		<BCard bg-variant="none" class="shadow">
			<BRow>
				<BCol cols="12" class="mb-3">
					<h1 class="text-center text-primary">Pay Your Invoice</h1>
				</BCol>

				<BCol cols="12" class="mb-3">
					<label for="card_number" class="h3 text-primary">
						Card Number
					</label>
					<input
						v-model="card.number"
						name="card_number"
						type="text"
						class="form-control"
					>
				</BCol>

				<BCol cols="12" md="5" class="mb-3">
					<label for="card_exp_month" class="h3 text-primary">
						Card Exp Month
					</label>
					<input
						v-model="card.exp_month"
						name="card_exp_month"
						type="text"
						class="form-control"
					>
				</BCol>

				<BCol cols="12" md="5" class="mb-3">
					<label for="card_exp_year" class="h3 text-primary">
						Card Exp Year
					</label>
					<input
						v-model="card.exp_year"
						name="card_exp_year"
						type="text"
						class="form-control"
					>
				</BCol>

				<BCol cols="12" md="2" class="mb-3">
					<label for="card_cvc" class="h3 text-primary">
						Card CVC
					</label>
					<input
						v-model="card.cvc"
						name="card_cvc"
						type="text"
						class="form-control"
					>
				</BCol>

				<BCol cols="12" class="mb-3">
					<BButton
						@click="pay()"
						variant="primary"
						class="w-100 mb-3"
					>Pay Invoice</BButton>
				</BCol>

				<BCol cols="12" class="mb-3">
					<h6 v-if="error" class="text-danger">{{ error }}</h6>
					<h6 class="text-success">{{ reqData }}</h6>
				</BCol>
			</BRow>			
		</BCard>
	</BContainer>
</template>

<script>
	import PayInvoiceService from '@/services/PayInvoiceService'

	export default {
		data() {
			return {
				card: {
					number: '4242424242424242',
					exp_month: '4',
					exp_year: '2022',
					cvc: '314',
				},

				reqData: '',
				error: '',
			}
		},

		methods: {
			async pay() {
				this.reqData = await PayInvoiceService.s_({ card: this.card })

				if (this.reqData.status) { console.log('Success') }
				else { this.error = 'Something went wrong. Please try again.' }
			}
		},	
	}
</script>