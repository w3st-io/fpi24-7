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


// [EXPORT] //
module.exports = router