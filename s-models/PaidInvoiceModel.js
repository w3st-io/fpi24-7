// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'PaidInvoice',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		invoiceNumber: {
			type: String,
			required: [true, 'This is required'],
			maxlength: 24,
		},
		
		stripe_charge_id: {
			type: String,
			required: false,

		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)