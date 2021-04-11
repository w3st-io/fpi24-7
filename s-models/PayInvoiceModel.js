// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'CommentLike',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		paid: {
			type: Boolean,
			required: false,
			default: false,
		},

		invoiceNumber: {
			type: String,
			required: [true, 'This is required'],
			maxlength: 24,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)