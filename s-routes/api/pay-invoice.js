// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/',
	async (req, res) => {
		try {
			// [STRIPE] Create Token //
			const token = await stripe.tokens.create({ card: req.body.card })

			// [STRIPE] Retrieve Price //
			const price = await stripe.prices.retrieve(
				config.STRIPE_INVOICE_CHARGE_PRICE_ID
			)

			// [STRIPE] Create Charge //
			const charge = await stripe.charges.create({
				amount: price.unit_amount,
				currency: price.currency,
				source: token.id,
				description:`Invoice Payment - Number: ${req.body.invoiceNumber}`,
			})

			// [VERIFY] Paid //
			if (charge.paid) {
				res.status(200).send({
					executed: true,
					status: true,
					message: 'Payment Successful'
				})
			}
			else {
				res.status(200).send({
					executed: true,
					status: true,
					message: 'Payment Failed'
				})
			}
		}
		catch (err) {
			console.log(err)
			res.status(200).send({
				executed: false,
				status: false,
				message: `Error --> ${err}`,
			})
		}
	}
)


// [EXPORT] //
module.exports = router