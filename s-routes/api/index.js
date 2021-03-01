// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const HTMLToPDF = require('html-pdf-node')
const pdf = require('html-pdf')


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
				displayHeaderFooter: true,
				footerTemplate: reports.footerDefault,
				printBackground: true,
				preferCSSPageSize: true,
			}
	
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


// [MAIN-ROUTE] html-pdf //
router.get(
	'/generate-report2',
	async (req, res) => {
		try {
			const html = reports.fireSprinklerInspectionReport('x')
			
			const options = {
				format: 'Letter',
				border: {
					top: '.6in',
					right: '.6in',
					bottom: '.6in',
					left: '.6in'
				},
			}
	
			// [CONVERT] //
			pdf.create(html, options).toBuffer(
				function (err, buffer) { res.send(buffer) }
			)
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