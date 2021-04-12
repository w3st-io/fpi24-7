// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const PaidInvoiceModel = require('../s-models/PaidInvoiceModel')


/******************* [CRUD] *******************/
// [CREATE] //
const c_create = async ({ invoiceNumber, stripe_charge_id }) => {
	try {
		// [VALIDATE] invoiceNumber //
		if (!validator.isAscii(invoiceNumber)) {
			return {
				executed: true,
				status: false,
				message: `paidInvoicesCollection: Invalid invoiceNumber`,
			}
		}

		// [VALIDATE] invoiceNumber //
		if (!validator.isAscii(stripe_charge_id)) {
			return {
				executed: true,
				status: false,
				message: `paidInvoicesCollection: Invalid stripe_charge_id`,
			}
		}

		// [SAVE] //
		const PaidInvoice = await new PaidInvoiceModel({
			_id: mongoose.Types.ObjectId(),
			invoiceNumber: invoiceNumber,
			stripe_charge_id: stripe_charge_id,
		}).save()

		return {
			executed: true,
			status: true,
			PaidInvoice: PaidInvoice,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `paidInvoicesCollection: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	c_create,
}