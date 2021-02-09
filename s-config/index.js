// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [FUNCTIONALITY] //
	ADMIN_USER_SYSTEM: process.env.ADMIN_USER_SYSTEM || true,
	PAYMENT_SYSTEM: process.env.PAYMENT_SYSTEM || true,

	// [URL] //
	CLIENT_BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SERVER_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [PORT] //
	PORT: process.env.PORT || 5000,
	
	// [MONGODB] //
	MONG_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/starter-code',
	
	// [EMAIL] //
	EMAIL_SERVICE: process.env.EMAIL_SERVICE || '',
	EMAIL: process.env.EMAIL || '',
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',

	// [EMAIL-RECIEVERS] //
	ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
	BILLINGS_EMAIL: process.env.BILLINGS_EMAIL || '',
	DESIGNS_EMAIL: process.env.DESIGNS_EMAIL || '',
	INSTALLS_EMAIL: process.env.INSTALLS_EMAIL || '',
	SALES_EMAIL: process.env.SALES_EMAIL || '',
	SCHEDULING_EMAIL: process.env.SCHEDULING_EMAIL || '',
	SERVICES_EMAIL: process.env.SERVICES_EMAIL || '',
	
	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',
}