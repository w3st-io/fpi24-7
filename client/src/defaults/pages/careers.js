const companyInfo = require('../companyInfo')

// [EXPORT] //
module.exports = {
	parallaxImg: require('../../assets/media/pages/careers/parallax.jpg'),

	r1: {
		c1: {
			title: 'Careers',
			description: 'Our Service 24/7! No Exceptions!',
		},
		c2: { image: require('../../assets/media/pages/careers/careers.jpg'), },
	},

	r2: {
		c1: { title: 'Why work at 24?', },

		c2: { image: companyInfo.companyLogo },

		c3: {
			description1: '24/7 Fire Protection is more than just a business. it is built on values that trickle down from top management to employees. Our professionalism and belief in being the best in the industry is matched by our desire to treat every employee as a member of our Family',

			description2: 'By joining 24/7 you will not only find what you are looking for, but you will also have the ability to rise within the company ranks. We believe that every member of this group is special and deserves the opportunity to grow with us.',
		},
	},

	r3: {
		c1: {},

		cx: [
			{
				image: require('../../assets/media/pages/careers/medical.jpg'),
				text: 'Health Insurance',
			},
			{
				image: require('../../assets/media/pages/careers/life-insurance.jpg'),
				text: 'Life Insurance',
			},
			{
				image: require('../../assets/media/pages/careers/vacation-time.jpg'),
				text: 'Vacation Time',
			},
			{
				image: require('../../assets/media/pages/careers/sick-time.jpg'),
				text: 'Sick Time',
			},
		],
	},
}