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

			// [STRIPE] Create Charge //
			const charge = await stripe.charges.create({
				amount: 2000,
				currency: 'usd',
				source: token.id,
				description: 'My First Test Charge (created for API docs)',
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
			res.status(200).send({
				executed: false,
				status: false,
				message: err,
			})
		}
	}
)


// [EXPORT] //
module.exports = router