// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const HTMLToPDF = require('html-pdf-node')


// [REQUIRE] Personal //
const config = require('../../s-config')
const reports = require('../../s-reports')

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


// [MAIN-ROUTE] //
router.get(
	'/generate-report',
	async (req, res) => {
		try {
			const options = { format: 'A4' }
			const file = { content: reports.standardReport }
	
			// [CONVERT] //
			HTMLToPDF.generatePdf(file, options).then(pdfBuffer => {
				res.send(pdfBuffer)
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `Error --> ${err}`
			})
		}
	}
)

// [EXPORT] //
module.exports = router