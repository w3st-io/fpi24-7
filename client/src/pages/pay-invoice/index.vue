<template>
	<BContainer class="nav-spacer my-4">
		<BCard bg-variant="none" class="shadow">
			<BRow>
				<BCol cols="12" md="8" class="">
					<h1 class="text-primary">Pay Your Invoice</h1>
				</BCol>

					<BCol cols="12" md="4" class="text-center text-md-right">
						<img :src="image" style="max-width: 200px;">
					</BCol>

				<!-- Invoice Number -->
				<BCol cols="12" class="mb-3">
					<label for="invoiceNumber" class="h3 text-primary">
						Invoice Number 
					</label>
					<input
						v-model="invoiceNumber"
						name="invoiceNumber"
						type="text"
						placeholder="###"
						class="form-control"
					>
				</BCol>

				<!-- Balance -->
				<BCol cols="12" class="mb-3">
					<label for="balance" class="h3 text-primary">
						Invoice Balance Amount
					</label>
					<br>
					<div class="input-group mb-2">
						<div class="input-group-prepend">
							<div class="input-group-text">$</div>
						</div>

						<input
							v-model="balance"
							name="balance"
							type="number"
							placeholder="Insert Dollar Amount (No &quot;$&quot;)"
							class="form-control"
						>
					</div>
				</BCol>

				<!-- Card Number -->
				<BCol cols="12" class="mb-3">
					<label for="card_number" class="h3 text-primary">
						Card Number
					</label>
					<input
						v-model="card.number"
						name="card_number"
						type="text"
						class="form-control"
						placeholder="No spaces or hyphens"
					>
				</BCol>

				<!-- Card Exp Month -->
				<BCol cols="12" md="5" class="mb-3">
					<label for="card_exp_month" class="h3 text-primary">
						Card Exp Month
					</label>
					<input
						v-model="card.exp_month"
						name="card_exp_month"
						type="text"
						placeholder="4"
						class="form-control"
					>
				</BCol>

				<!-- Card Exp Year -->
				<BCol cols="12" md="5" class="mb-3">
					<label for="card_exp_year" class="h3 text-primary">
						Card Exp Year
					</label>
					<input
						v-model="card.exp_year"
						name="card_exp_year"
						type="text"
						placeholder="2022"
						class="form-control"
					>
				</BCol>

				<!-- Card CVC -->
				<BCol cols="12" md="2" class="mb-3">
					<label for="card_cvc" class="h3 text-primary">
						Card CVC
					</label>
					<input
						v-model="card.cvc"
						name="card_cvc"
						type="text"
						placeholder="314"
						class="form-control"
					>
				</BCol>

				<!-- Submit -->
				<BCol cols="12" class="mb-3">
					<BButton
						:disabled="loading"
						@click="pay()"
						variant="primary"
						class="w-100 mb-3"
					>
						<span v-if="!loading">Pay Invoice</span>
						<span v-else>Please Wait..</span>
					</BButton>
				</BCol>

				<BCol cols="12" class="mb-3">
					<h6 v-if="error" class="text-danger">{{ error }}</h6>
					<h6 v-if="success" class="text-success">{{ success }}</h6>
				</BCol>
			</BRow>			
		</BCard>
	</BContainer>
</template>

<script>
	import router from '@/router'
	import PayInvoiceService from '@/services/PayInvoiceService'

	export default {
		data() {
			return {
				image: require('../../assets/media/pages/pay-invoice/accepted-payments.png'),
				invoiceNumber: '',
				balance: '',

				card: {
					number: '',
					exp_month: '',
					exp_year: '',
					cvc: '',
				},

				loading: true,
				reqData: '',
				error: '',
				success: '',
			}
		},

		created() {
			this.loading = false

			// This is for the developer
			if (localStorage.node_env == 'development') {
				this.invoiceNumber = 'Fake-Invoice-Number'
				this.balance = 20
				this.card = {
					number: '4242424242424242',
					exp_month: '4',
					exp_year: '2022',
					cvc: '314',
				}
			}
		},

		methods: {
			async pay() {
				this.loading = true

				this.reqData = await PayInvoiceService.s_({
					invoiceNumber: this.invoiceNumber,
					balance: this.balance,
					card: this.card,
				})

				if (this.reqData.status) {
					this.success = this.reqData.message

					setTimeout(() => {
						router.push({ name: 'pay-invoice_success' })
					}, 2000)
				}
				else {
					this.loading = false

					if (this.reqData.message != {}) {
						this.error = this.reqData.message
					}
					else { this.error = 'Something went wrong. Please try again.' }
				}
			}
		},	
	}
</script>