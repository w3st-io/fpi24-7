// [REQUIRE] Personal //
const companyInfo = require('../companyInfo') 


// [INIT] //
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
								img: require('../../assets/images/pages/index/industry.jpg'),
							},
							{
								textHtml: textHtml,
								img: require('../../assets/images/pages/index/building.jpg'),
							},
							{
								textHtml: textHtml,
								img: require('../../assets/images/pages/index/inspection.jpg'),
							},
						],
					}
				},
	
				// Residential, Commercial, & Industrial Details //
				r2: {
					cx: [
						{
							title: 'Residential',
							image: require('../../assets/images/pages/index/residential.webp'),
							description: 'Small, medium or large we offer professionally designed and installed wet and dry fire sprinkler systems.',
						},
						{
							title: 'Commercial',
							image: require('../../assets/images/pages/index/commercial.webp'),
							description: 'We provide quality design and installation for retail, office, store front, gyms, hospitals, schools and more.',
						},
						{
							title: 'Industrial',
							image: require('../../assets/images/pages/index/industrial.webp'),
							description: 'Whatever your storage needs, we can offer ESFR warehouse storage, control mode and density design fire protection.',
						}
					]
				},
	
				// Our Mission + Our Service //
				r3: {
					c1: { titleHTML: 'Our Mission' },
					c2: { image: require('../../assets/images/our-mission.webp'), },
					c3: {
						description: 'At 24/7 Fire Protection Inc., it is our mission to create a competetive edge within the fire protection industry by offering quality design and installation services for your fire sprinkler needs. We begin by building relationships that secure the trust of customers within the common understanding that we are only successful if our customers are successful.',
					},
					c4: { titleHTML: 'Our Service 24/7! <i>No Exceptions!</>' },
					c5: {
						description: 'Located in Belleville, NJ we are centrally located to offer all of New Jersey quality fire sprinkler design and installation services. Please call us today for your Fire Protection needs.',
					},
					c6: { image: require('../../assets/images/pages/index/welcome.webp'), },
				},
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
					require('../../assets/images/affiliates/affiliation-osha.png'),
				],
			},
		},
	},
}