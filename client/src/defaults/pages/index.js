const companyInfo = require('../companyInfo') 


const textHtml = `
	<div class="d-none d-md-block mb-2 badge badge-dark shadow">
		<h1 class="m-0" style="text-shadow: none;">
			${companyInfo.companyName}
		</h1>
		<h4 class="m-0" style="text-shadow: none;">
			${companyInfo.companyCaption}
		</h4>
	</div>
	<br>
	<a href="/company-info">
		<button class="btn btn-lg btn-dark shadow">
			Our Services
		</button>
	</a>
`


// [EXPORT] //
module.exports = {
	caraousel: [
		{
			textHtml: textHtml,
			img: require('../../assets/images/pages/index/industry.jpg'),
		},
		{
			textHtml: textHtml,
			img: require('../../assets/images/pages/index/firetruck.jpg'),
		},
	],

	content: {
		r1: {
			c1: {
				image: require('../../assets/images/pages/index/service247.webp'),
				imageText: 'Our Service 24/7<i>No Exception!</i>',
				companyName: companyInfo.companyName,
				caption2: companyInfo.companyCaption,
				address: companyInfo.address,
				googleMapsLink: companyInfo.googleMapsLink,

				r1: {
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

				r2: {
					c1: {},
					c2: {},
				}
			},
		
			c2: {
				getQuoteTitle: 'Get a Quote',
				operationsTitle: 'Hours & Location',
				address: companyInfo.address,
				hours: companyInfo.hours,
				googleMapsLink: companyInfo.googleMapsLink,
				phoneNumber: companyInfo.phoneNumber,
				phoneNumberLink: companyInfo.phoneNumberLink,
				faxNumber: companyInfo.faxNumber,
				faxNumberLink: companyInfo.faxNumberLink,
			},
		},
	},
}