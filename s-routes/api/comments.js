// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const rateLimiter = require('../../s-rate-limiters')
const commentsCollection = require('../../s-collections/commentsCollection')
const commentLikesCollection = require('../../s-collections/commentLikesCollection')
const commentReportsCollection = require('../../s-collections/commentReportsCollection')
const Auth = require('../../s-middleware/Auth')


const router = express.Router().use(cors())


/******************* [CRUD] *******************/
// [CREATE] Auth Required //
router.post(
	'/create',
	Auth.userToken(),
	rateLimiter.commentLimiter,
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (req.body.cleanJSON) {
				// [CREATE] Comment //
				const cObj = await commentsCollection.c_create(
					req.decoded.user_id,
					req.body.cleanJSON,
				)

				if (cObj.status) {
					res.status(200).send({
						executed: true,
						status: true,
						comment: cObj.comment,
					})
				}
				else { res.status(200).send(cObj) }
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/create: Invalid Params'
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/create: Error --> ${err}`,
			})
		}
	}
)


// [UPDATE] Auth Required //
router.post(
	'/update',
	Auth.userToken(),
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (validator.isAscii(req.body.comment_id) && req.body.cleanJSON) {
				// [OWNERSHIP] //
				const ownership = await commentsCollection.c_ownership(
					req.body.comment_id,
					req.decoded.user_id
				)

				if (ownership.status && ownership.ownership) {
					// [UPDATE] //
					const updatedComment = await commentsCollection.c_update(
						req.body.comment_id,
						req.decoded.user_id,
						req.body.cleanJSON,
					)
					
					res.status(200).send(updatedComment)
				}
				else {
					res.status(200).send({
						executed: true,
						status: false,
						message: ownership.message,
					})
				}
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/update: Invalid params'
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/update: Error --> ${err}`,
			})
		}
	},
)


// [DELETE] Auth Required //
router.delete(
	'/delete/:comment_id',
	Auth.userToken(),
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (mongoose.isValidObjectId(req.params.comment_id)) {
				// [DELETE] //
				console.log('asdasd');
				const comment = await commentsCollection.c_deleteByIdAndUser(
					req.params.comment_id,
					req.decoded.user_id,
				)

				console.log(comment);
					
				if (comment.status) {
					// [DELETE] CommentLike //
					const commentLikes = await commentLikesCollection.c_deleteByComment(
						req.params.comment_id
					)

					res.status(200).send({
						executed: true,
						status: true,
						deleted: [comment, commentLikes],
					})
				}
				else { res.status(200).send(comment) }
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/delete: Invalid comment_id'
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/delete: Error --> ${err}`,
			})
		}
	},
)


/******************* [LIKE-SYSTEM] *******************/
// [LIKE] Auth Required //
router.post(
	'/like',
	Auth.userToken(),
	rateLimiter.likeLimiter,
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (
				validator.isAscii(req.body.comment_id) &&
				validator.isAscii(req.body.commentUser_id)
			) {
				// [EXISTANCE] commentLike //
				const existance = await commentLikesCollection.c_existance(
					req.decoded.user_id,
					req.body.comment_id,
				)

				if (!existance.existance) {
					// [CREATE] CommentLike //
					const commentLike = await commentLikesCollection.c_create(
						req.decoded.user_id,
						req.body.comment_id,
						req.body.commentUser_id
					)

					res.status(200).send(commentLike)
				}
				else {
					res.status(200).send({
						executed: true,
						status: false,
						message: existance.message
					})
				}
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/like: Invalid params'
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/like: Error --> ${err}`,
			})
		}
	},
)


// [UNLIKE] Auth Required //
router.post(
	'/unlike',
	Auth.userToken(),
	rateLimiter.likeLimiter,
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (validator.isAscii(req.body.comment_id)) {
				// [DELETE] CommentLike //
				const commentLike = await commentLikesCollection.c_deleteByUserAndComment(
					req.decoded.user_id,
					req.body.comment_id,
				)
				
				res.status(200).send(commentLike)
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/unlike: Invalid comment _id'
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/unlike: Error --> ${err}`,
			})
		}
	},
)


/******************* [REPORTS] *******************/
// [CREATE] Report //
router.post(
	'/report',
	Auth.userToken(),
	rateLimiter.reportLimiter,
	async (req, res) => {
		try {
			// [VALIDATE] //
			if (
				validator.isAscii(req.body.comment_id) &&
				validator.isAscii(req.body.reportType)
			) {
				// [FORMAT] //
				req.body.reportType = req.body.reportType.toLowerCase()

				// [READ] comment //
				const commentObj = await commentsCollection.c_read(
					req.decoded.user_id,
					req.body.comment_id
				)

				if (commentObj.status && commentObj.comment) {
					// [EXISTANCE] Do not double save //
					const existance = await commentReportsCollection.c_existanceByUserAndComment(
						req.decoded.user_id,
						commentObj.comment._id
					)

					if (existance.status && !existance.existance) {
						// [CREATE] commentReport //
						const commentReport = await commentReportsCollection.c_create(
							req.decoded.user_id,
							commentObj.comment,
							req.body.reportType
						)

						res.status(200).send(commentReport)
					}
					else {
						res.status(200).send({
							executed: true,
							status: false,
							message: existance.message,
							existance: existance.existance,
						})
					}
				}
				else {
					res.status(200).send({
						executed: true,
						status: false,
						message: '/api/comments/report: Comment doesnt exist.'
					})
				}
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					message: '/api/comments/report: Invalid params',
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				message: `/api/comments/report: Error --> ${err}`,
			})
		}
	},
)


module.exports = router