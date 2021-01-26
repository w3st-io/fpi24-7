const companyInfo = require('../companyInfo') 


const textHtml = `
	<div class="mb-2 badge badge-dark shadow">
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
		r2: {
			c1: {
			},
		},
	},
}