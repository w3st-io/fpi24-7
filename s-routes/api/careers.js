// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const multer = require('multer')
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MULTER] //
const upload = multer({ dest: './s-uploads/' })


router.post(
	'/apply',
	upload.single('file'),
	async (req, res) => {
		console.log('req.file', req.file)

		console.log(`${config.SERVER_BASE_URL}/${req.file.path}`)



		res.sendFile(`./${req.file.path}`)
	}
)


// [EXPORT] //
module.exports = router 