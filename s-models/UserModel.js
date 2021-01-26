// [REQUIRE] //
const mongoose = require('mongoose')
const mongooseFuzzySearching = require('mongoose-fuzzy-searching')


// [EXPORT] //
module.exports = mongoose.model(
	'User',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
		email: {	
			type: String,	
			required: [true, 'This is required'],	
			maxlength: 50,	
		},

		username: {
			type: String,
			required: [true, 'This is required'],
			maxlength: 24,
		},
		
		password: {
			type: String,
			required: [true, 'This is required'],
		},

		bio: {
			type: String,
			default: '',
			maxlength: 600,
		},

		verified: {
			type: Boolean,
			default: false,
		},

		created_at: {
			type: Date,
			default: Date.now,
			maxlength: 50
		},
	}).plugin(
		mongooseFuzzySearching,
		{
			fields: [
				{
					name: 'username',
					minSize: 4,
					weight: 5,
				},
			]
		}
	)
)