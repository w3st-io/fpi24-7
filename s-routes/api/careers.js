// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer = require('multer')


// [REQUIRE] Personal //
const config = require('../../s-config')
const mailerUtil = require('../../s-utils/mailerUtil')


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


router.post(
	'/apply',
	upload.single('file'),
	async (req, res) => {
		try {
			// [SEND-MAIL] //
			/*
			const mailObj = await mailerUtil.sendMail(
				config.CAREERS_EMAIL,
				'Subject',
				'<h1>HTML</h1>',
				[ { path: req.file.path } ]
			)
			*/

			console.log(req.file, 'TO:', req.body.to,);
			
			// [DELETE] //
			fs.unlink(req.file.path, async (err) => {
				if (!err) {
					res.status(200).send({
						executed: true,
						status: true,
						//message: mailObj.message,
					})
				}
				else {
					res.status(200).send({
						executed: true,
						status: true,
						location: '/api/careers/apply',
						message: `Caught Error: --> ${err}`,
					})
				}
			})
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/api/careers/apply',
				message: `Caught Error: --> ${err}`,
			})
		}
	}
)


// [EXPORT] //
module.exports = router 