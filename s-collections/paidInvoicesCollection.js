// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const PaidInvoiceModel = require('../s-models/PaidInvoiceModel')


/******************* [CRUD] *******************/
// [CREATE] //
const c_create = async ({ invoiceNumber, stripe_charge_id }) => {
	try {
		
	
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