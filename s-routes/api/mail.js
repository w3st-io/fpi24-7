// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer = require('multer')
const validator = require('validator')


// [REQUIRE] Personal //
const mailerUtil = require('../../s-utils/mailerUtil')
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MULTER] //
const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, callBack) {
			callBack(null, './s-uploads')
		},
	
		filename: function (req, file, callBack) {
			callBack(
				null,
				`${new Date().toISOString()}-${file.originalname}`
			)
		}
	})
})


// [MAIN-ROUTE] //
router.post(
	'/get-quote',
	async (req, res) => {
		try {
			if (
				validator.isAscii(req.body.subject) &&
				validator.isAscii(req.body.type) &&
				(
					req.body.type == 'billings' ||
					req.body.type == 'designs' ||
					req.body.type == 'installs' ||
					req.body.type == 'report' ||
					req.body.type == 'sales' ||
					req.body.type == 'scheduling' ||
					req.body.type == 'services'
				) &&
				validator.isAscii(req.body.clientEmail) &&
				validator.isAscii(req.body.name) &&
				req.body.message
			) {
				// [MAIL-UTIL] //
				const mObj = await mailerUtil.sendFpiEmail(
					req.body.subject,
					req.body.type,
					req.body.clientEmail,
					req.body.name,
					req.body.message,
				)
		
				if (mObj.status) {
					res.status(200).send({
						executed: true,
						status: true,
						message: 'Email sent',
					})
				}
				else { res.status(200).send(mObj) }
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: `/api/mail/get-quote: Invalid params`
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/admins/get-quote: Error --> ${err}`
			})
		}
	}
)


router.post(
	'/careers',
	upload.single('file'),
	async (req, res) => {
		try {
			// [MAIL-UTIL] //
			const mObj = await mailerUtil.sendFpiEmail(
				req.body.subject,
				'careers',
				req.body.clientEmail,
				req.body.name,
				req.body.message,
				[ { path: req.file.path } ]
			)

			console.log(mObj);
			
			// [DELETE] //
			fs.unlink(req.file.path, async (err) => {
				if (!err) {
					res.status(200).send({
						executed: true,
						status: true,
						message: mObj.message,
					})
				}
				else {
					res.status(200).send({
						executed: true,
						status: true,
						location: '/api/mail/careers',
						message: `Caught Error: --> ${err}`,
					})
				}
			})
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/api/mail/careers',
				message: `Caught Error: --> ${err}`,
			})
		}
	}
)


// [EXPORT] //
module.exports = router 