const companyInfo = require('../companyInfo') 


const textHtml = `
	<div class="d-none d-md-block mb-2 badge badge-dark shadow">
		<h1 class="m-0 text-primary" style="text-shadow: none;">
			${companyInfo.companyName}
		</h1>
		<h4 class="m-0" style="text-shadow: none;">
			${companyInfo.companyCaption}
		</h4>
	</div>
	<br>
	<a href="/company-info">
		<button class="btn btn-lg btn-primary shadow">
			Our Services
		</button>
	</a>
`


// [EXPORT] //
module.exports = {
	parallaxImg: require('../../assets/images/pages/index/parallax.jpg'),

	cnt1: {
		r1: {
			// Main Column //
			c1: {
				// Caraousel //
				r1: {
					c1: {
						caraousel: [
							{
								textHtml: textHtml,
								img: require('../../assets/images/pages/index/inspection.jpg'),
							},
							{
								textHtml: textHtml,
								img: require('../../assets/images/pages/index/industry.jpg'),
							},
						],
					}
				},
	
				// Residential, Commercial, & Industrial Details //
				r2: {
					columns: [
						{
							image: require('../../assets/images/pages/index/residential.webp'),
							title: 'Residential',
							description: 'Small, medium or large we offer professionally designed and installed wet and dry fire sprinkler systems.',
							link: '',
						},
						{
							image: require('../../assets/images/pages/index/commercial.webp'),
							title: 'Commercial',
							description: 'We provide quality design and installation for retail, office, store front, gyms, hospitals, schools and more.',
							link: '',
						},
						{
							image: require('../../assets/images/pages/index/industrial.webp'),
							title: 'Industrial',
							description: 'Whatever your storage needs, we can offer ESFR warehouse storage, control mode and density design fire protection.',
							link: '',
						}
					]
				},
	
				// Our Service 24/7! No Exceptions //
				r3: {
					c1: {},
					c2: { image: require('../../assets/images/pages/index/welcome.webp'), },
					c3: {
						description: 'Located in Belleville, NJ we are centrally located to offer all of New Jersey quality fire sprinkler design and installation services. Please call us today for your Fire Protection needs.',
					},
				}
			},
		
			// Side Column //
			c2: {
				hours: companyInfo.hours,
				
				address: companyInfo.address,
				googleMapsLink: companyInfo.googleMapsLink,

				phoneNumber: companyInfo.phoneNumber,
				phoneNumberLink: companyInfo.phoneNumberLink,

				faxNumber: companyInfo.faxNumber,
				faxNumberLink: companyInfo.faxNumberLink,
			},
		},
	},

	cnt2: {
		// Conveyor //
		r1: {
			c1: {
				images: [
					require('../../assets/images/affiliates/affiliation-afsa.png'),
					require('../../assets/images/affiliates/affiliation-fssa.png'),
					require('../../assets/images/affiliates/affiliation-icc.png'),
					require('../../assets/images/affiliates/affiliation-nfpa.png'),
					require('../../assets/images/affiliates/affiliation-nicet.png'),
					require('../../assets/images/affiliates/affiliation-njbia.png'),
				],
			},
		},

		// Social Media //
		r2: { c1: {}, },
	},
}