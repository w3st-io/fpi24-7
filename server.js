// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const socketIO = require('socket.io')
require('dotenv').config()


// [REQUIRE] Personal // Other // API // Pages //
const s_socket = require('./s-socket')
const config = require('./s-config')
const rateLimiter = require('./s-rate-limiters')

const a_ = require('./s-routes/api')

// [INIT] Const //
const port = config.PORT


// [EXPRESS + SERVER] //
const app = express()
const server = http.createServer(app)


// [SOCKET.IO] //
const io = socketIO.listen(server)
s_socket.start(io)
app.io = io


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.MONG_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(__dirname + '/s-static'))
app.use(rateLimiter.limiter)


// [USE] Personal // API // Pages //
app.use('/api', a_)
//app.use('/api/admin/comment-reports', a_admin_commentReports)
//app.use('/api/admins', a_admins)
//app.use('/api/comments', a_comments)
//app.use('/api/users', a_users)
//
//app.use('/pages', p_)
//app.use('/pages/about', p_about)
//app.use('/pages/admin/function/comment-reports', p_admin_function_commentReports)
//app.use('/pages/comment/edit', p_comment_edit)
//app.use('/pages/post', p_post)


// [HEROKU] Set Static Folder for Heroku //
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [LISTEN]
server.listen(port, () => { console.log(`server started on port: ${port}`) })