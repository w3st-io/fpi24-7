// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req, res) => {
		res.send({
			executed: true,
			status: true,
			node_env: config.NODE_ENV,
			__dirname: __dirname
		})
	}
)


router.get(
	'/lit',
	async (req, res) => {
		const token = await stripe.tokens.create({
			card: {
				number: '4242424242424242',
				exp_month: 4,
				exp_year: 2022,
				cvc: '314',
			},
		})

		console.log(token)

		const charge = await stripe.charges.create({
			amount: 2000,
			currency: 'usd',
			source: token.id,
			description: 'My First Test Charge (created for API docs)',
		 })

		res.send({
			executed: true,
			status: true,
			charge: charge,
		})
	}
)


// [EXPORT] //
module.exports = router