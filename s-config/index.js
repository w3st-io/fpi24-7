// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [URL + PORT] //
	BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SOCKET_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',
	PORT: process.env.PORT || 5000,
	
	// [MONGODB] //
	MONG_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/starter-code',
	
	// [EMAIL] //
	EMAIL_SERVICE: process.env.EMAIL_SERVICE || '',
	EMAIL: process.env.EMAIL || '',
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',

	// [EMAIL-RECIEVERS] //
	ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
	SERVICES_EMAIL: process.env.SERVICES_EMAIL || '',
	INSTALLS_EMAIL: process.env.INSTALLS_EMAIL || '',
	DESIGNS_EMAIL: process.env.DESIGNS_EMAIL || '',
	
	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',
}