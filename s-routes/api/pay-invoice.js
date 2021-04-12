// [REQUIRE] //
const e = require('cors')
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../../s-config')
const paidInvoicesCollection = require('../../s-collections/paidInvoicesCollection')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/',
	async (req, res) => {
		try {
			if (
				validator.isAscii(req.body.invoiceNumber) &&
				validator.isInt(req.body.card.number) &&
				validator.isInt(req.body.card.exp_month) &&
				validator.isInt(req.body.card.exp_year) &&
				validator.isInt(req.body.card.cvc)
			) {
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
					description:`Invoice Number: ${req.body.invoiceNumber}`,
				})
	
				// [VERIFY] Paid //
				if (charge.paid) {
					const paidInvoice = await paidInvoicesCollection.c_create({
						invoiceNumber: req.body.invoiceNumber,
						stripe_charge_id: charge.id,
					})

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
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: 'Invalid Input'
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