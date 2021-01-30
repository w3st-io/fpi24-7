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
			salesButtonTitle: 'Click for Sales',
			salesLink: 'mailto:chrisc@24-7fireprotection.com?subject=Sales/Service Question',
			
			salesButtonScheduling: 'Click for Scheduling',
			schedulingLink: 'mailto:harry@24-7fireprotection.com?subject=Service/Install%20Question',
			
			designButtonTitle: 'Click for Design',
			designLink: 'mailto:yandri@24-7fireprotection.com?subject=Design/Engineering%20Question',
			
			billingButtonTitle: 'Click for Billing',
			billingLink: 'mailto:lissette@24-7fireprotection.com?subject=Billing/Admin%20Question'
		},
	},

	r4: {
		c1: { Title: 'Plase Fill Out this Form to Contact Us', }
	},

	r5: {
		c1: {
			title: '>> Give us a call, day or night, and we’ll be there for your fire protection needs<<'
		}
	},
}