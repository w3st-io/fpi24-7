// ORDER: to, subject, type, user_id, clientEmail, name, message, html, attachments
// [REQUIRE] //
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../s-config') 


// [INIT] //
const service = config.EMAIL_SERVICE
const email = config.EMAIL
const emailPassword = config.EMAIL_PASSWORD
const baseURL = config.CLIENT_BASE_URL
const auth = {
	user: email,
	pass: emailPassword
}


function fpiToEmail(type) {
	if (type == 'billings') { return toEmail = config.BILLINGS_EMAIL }
	if (type == 'careers') { return toEmail = config.CAREERS_EMAIL }
	if (type == 'designs') { return toEmail = config.DESIGNS_EMAIL }
	if (type == 'installs') { return toEmail = config.INSTALLS_EMAIL }
	if (type == 'report') { return toEmail = config.ADMIN_EMAIL }
	if (type == 'sales') { return toEmail = config.SALES_EMAIL }
	if (type == 'scheduling') { return toEmail = config.SCHEDULING_EMAIL }
	if (type == 'services') { return toEmail = config.SERVICES_EMAIL }
}

function fpiTemplate(type, clientEmail, name, message) {
	return `
		<h1>Customer Quote Request</h1>
		<h3 style="margin: 0;">Type: ${type}</h3>
		<h3 style="margin: 0;">Email: ${clientEmail}</h3>
		<h3 style="margin: 0;">Name: ${name}</h3>
		
		<h3 style="margin: 0; margin-top: 20px;">Message:</h3>
		<p>${message}</p>
	`
} 


// [DEFAULT] //
async function sendMail(to, subject, html, attachments) {
	try {
		// [VALIDATE] to //
		if (!validator.isEmail(to)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid email',
			}
		}

		// [VALIDATE] subject //
		if (!validator.isAscii(subject)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid subject',
			}
		}

		// [VALIDATE] html //
		if (!html) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid html',
			}
		}

		// [VALIDATE] html xss //
		if (html.includes('<script') || html.includes('</script>')) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid html (XSS)',
			}
		}

		// [VALIDATE] html xss //
		if (attachments) {
			if (!Array.isArray(attachments)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Attachments must be an array',
				}
			}
		}

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		await transporter.sendMail({
			from: email,
			to: to,
			subject: subject,
			html: html,
			attachments: attachments,
		})

		return {
			executed: true,
			status: true,
			send: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [GET-QUOTE] //
async function sendFpiEmail(subject, type, clientEmail, name, message, attachments) {
	try {
		// [VALIDATE] subject //
		if (!validator.isAscii(subject)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid subject',
			}
		}

		// [VALIDATE] html xss //
		if (attachments) {
			if (!Array.isArray(attachments)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Attachments must be an array',
				}
			}
		}

		// [INIT] //
		const to = fpiToEmail(type)
		const subject2 = `Get Quote - Customer Subject: ${subject}`
		const html = fpiTemplate(type, clientEmail, name, message)

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		await transporter.sendMail({
			from: email,
			to: to,
			subject: subject2,
			html: html,
			attachments: attachments,
		})

		return {
			executed: true,
			status: true,
			send: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [VERIFICATION] //
async function sendVerificationMail(to, user_id, VCode) {
	try {
		// [VALIDATE] //
		if (
			!validator.isEmail(to) ||
			!mongoose.isValidObjectId(user_id) ||
			!validator.isAscii(VCode)
		) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid params'
			}
		}

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		const sentEmail = await transporter.sendMail({
			from: email,
			to: to,
			subject: 'Verify Your BlockBased.io Account',
			html: `
				<h1>Thank you creating an account! Verify & Join us!<h1/>
				<a href="${baseURL}/user/verify/${user_id}/${VCode}">
					<button>Click to Verify</button>
				</a>
			`
		})

		return {
			executed: true,
			status: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [PASSWORD-RESET] //
async function sendPasswordResetEmail(to, user_id, VCode) {
	try {
		// [VALIDATE] //
		if (
			!validator.isEmail(to) ||
			!mongoose.isValidObjectId(user_id) ||
			!validator.isAscii(VCode)
		) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid params'
			}
		}

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		const sentEmail = await transporter.sendMail({
			from: email,
			to: to,
			subject: 'Reset Password For Your BlockBased.io Account',
			html: `
				<h1>Click the Link Below to Reset Your Password<h1/>
				<h4>If you did not request to change your password ignore this email</h4>
				<a href="${baseURL}/user/password/reset/${user_id}/${VCode}">
					<button>Click to Reset Password</button>
				</a>
			`
		})

		return {
			executed: true,
			status: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	sendMail,
	sendFpiEmail,
	sendVerificationMail,
	sendPasswordResetEmail,
}