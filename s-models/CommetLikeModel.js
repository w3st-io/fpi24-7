// [REQUIRE] //
const mongoose = require('mongoose')


// [EXPORT] //
module.exports = mongoose.model(
	'CommentLike',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},

		comment: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
			required: true,
		},

		commentUser: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	})
)