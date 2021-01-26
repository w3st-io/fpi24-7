// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const commentsCollection = require('../../../s-collections/commentsCollection')
const Auth = require('../../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/:sort/:limit/:page',
	Auth.userTokenNotRequired(),
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (
				Number.isInteger(parseInt(req.params.limit)) &&
				Number.isInteger(parseInt(req.params.page))
			) {
				// [INIT] //
				const user_id = (req.decoded) ? req.decoded.user_id : undefined
				const sort = parseInt(req.params.sort)
				const limit = parseInt(req.params.limit)
				const pageIndex = parseInt(req.params.page) - 1
				const skip = pageIndex * limit

				//// [READ-ALL][COMMENTS] ////
				const commentsObj = await commentsCollection.c_readSorted(
					user_id,
					sort,
					limit,
					skip
				)

				if (commentsObj.status) {
					// [COUNT] Comments //
					commentsObj.commentsCount = (
						await commentsCollection.c_count()
					).count

					// [COUNT] Calculate Total Pages //
					commentsObj.totalPages = Math.ceil(
						commentsObj.commentsCount / limit
					)
				}
			
				res.status(200).send({
					executed: true,
					status: true,
					commentsObj: commentsObj,
				})
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/pages/post: Invalid params',
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/pages/post: Error --> ${err}`
			})
		}
	}
)


// [EXPORT] //
module.exports = router