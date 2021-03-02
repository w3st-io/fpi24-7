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


// [MAIN-ROUTE] html-pdf-node //
router.get(
	'/generate-report',
	async (req, res) => {
		try {
			const file = { content: reports.fireSprinklerInspectionReport('x'), }
			const options = {
				format: 'A4',
				margin: {
					top: '.6in',
					right: '.6in',
					bottom: '.6in',
					left: '.6in'
				},
				printBackground: true,
				preferCSSPageSize: true,
			}
	
			// [CONVERT] //
			HTMLToPDF.generatePdf(file, options).then(pdfBuffer => {
				res.setHeader('Content-Type', 'application/pdf')
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