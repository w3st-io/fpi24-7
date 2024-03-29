// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req, res) => {
		res.status(200).send({
			executed: true,
			status: true,
			node_env: config.NODE_ENV,
			__dirname: __dirname
		})
	}
)


// [EXPORT] //
module.exports = router