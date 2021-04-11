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
			const token = await stripe.tokens.create({
				card: {
					number: '4242424242424242',
					exp_month: 4,
					exp_year: 2022,
					cvc: '314',
				},
			})

			// [STRIPE] Create Charge //
			const charge = await stripee.charges.create({
				amount: 2000,
				currency: 'usd',
				source: token.id,
				description: 'My First Test Charge (created for API docs)',
			})

			res.status(200).send({
				executed: true,
				status: true,
				charge: charge,
				message: 'Success!'
			})
		}
		catch (err) {
			console.log('err', err)

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