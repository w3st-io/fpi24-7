// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.post(
	'/get-quote',
	async (req, res) => {
		console.log(req.body)

		res.status(200).send({
			executed: true,
			status: true,
			message: 'Email sent',
		})
	}
)


// [EXPORT] //
module.exports = router