const companyInfo = require('../companyInfo')

// [EXPORT] //
module.exports = {
	parallaxImg: require('../../assets/images/pages/contact-us/parallax.png'),

	r1: {
		c1: { title: 'Contact Us!', },
		c2: { image: require('../../assets/images/pages/contact-us/c.png'), }
	},

	r2: {
		c1: {
			title: 'Call Us or Send Us a Fax',
			phoneNumber: companyInfo.phoneNumber,
			phoneNumberLink: companyInfo.phoneNumberLink,

			faxNumber: companyInfo.faxNumber,
			faxNumberLink: companyInfo.faxNumberLink,

			r1: {
				c1: { title: 'Send us an Email', },
				columns: [
					{
						title: 'Click for Sales',
						link: 'mailto:chrisc@24-7fireprotection.com?subject=Sales/Service Question',
					},
					{
						title: 'Click for Scheduling',
						link: 'mailto:harry@24-7fireprotection.com?subject=Service/Install%20Question',
					},
					{
						title: 'Click for Design',
						link: 'mailto:yandri@24-7fireprotection.com?subject=Design/Engineering%20Question',
					},
					{
						title: 'Click for Billing',
						link: 'mailto:lissette@24-7fireprotection.com?subject=Billing/Admin%20Question'
					}
				],
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
		c1: { Title: 'Plase Fill Out this Form to Contact Us', }
	},

	r5: {
		c1: {
			title: '>> Give us a call, day or night, and we’ll be there for your fire protection needs<<'
		}
	},
}