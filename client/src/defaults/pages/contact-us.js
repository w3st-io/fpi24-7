// [REQUIRE] Personal //
const companyInfo = require('../companyInfo')

// [INIT] //
const pageTitle = 'Contact Us!'

// [EXPORT] //
module.exports = {
	parallaxImg: require('../../assets/images/pages/contact-us/parallax.png'),

	cnt1: {
		// Header //
		r1: {
			c1: { title: pageTitle, },
			c2: { image: require('../../assets/images/pages/contact-us/c.png'), }
		},
	
		r2: {
			c1: {
				// Call Us & fax Us //
				r1: {
					c1: {
						title: 'Call Us or Send Us a Fax',
	
						phoneNumber: companyInfo.phoneNumber,
						phoneNumberLink: companyInfo.phoneNumberLink,
	
						faxNumber: companyInfo.faxNumber,
						faxNumberLink: companyInfo.faxNumberLink,
					},
				},
	
				// Send Email //
				r2: {
					c1: { title: 'Send us an Email', },
				},
			},
	
			c2: {
				title: 'Our Location',
				address: companyInfo.address,
				googleMapsLink: companyInfo.googleMapsLink,
				googleMapsImage: companyInfo.googleMapsImage,
			},
		},
	
		r3: {
			c1: {
				title: '>> Give us a call, day or night, and we’ll be there for your fire protection needs<<'
			}
		},
	},
}