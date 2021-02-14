// [EXPORT] //
module.exports = {
	parallaxImg: require('../../assets/images/pages/about/parallax.png'),

	// About //
	r1: {
		c1: {
			title: 'About 24/7 Fire Protection Inc.',
			description: 'We provide quality design, installation, maintenance and repair services for your fire protection projects. We offer competitive pricing, superior quality workmanship and courteous service. You receive code compliant fire sprinkler systems that benefit your bottom line. We hope to secure your business as a return customer.',
		},
		c2: {
			image: require('../../assets/images/pages/about/team.webp'),
		},
	},

	// Meet the Team //
	r2: {
		// Title //
		c1: { title: 'Meet the Team', },

		// Staff //
		c2: {
			images: [
				require('../../assets/images/pages/about/team.webp'),
				require('../../assets/images/pages/about/jason.webp'),
				require('../../assets/images/pages/about/team.webp'),
				require('../../assets/images/pages/about/harry.webp'),
				require('../../assets/images/pages/about/team.webp'),
				require('../../assets/images/pages/about/jason.webp'),
			],

			description: 'Our headquarters is located in Belleville New Jersey, a place we call home. We serve all areas in New Jersey focusing on locations like Newark, Jersey City, Hackensack, and more. We aim to please our customers by installing systems that help prevent fires, protect assets, and most importantly save lives! We hope you love our services just as much as we love serving you New Jersey! You can see above our great team that we have that work hard everyday to make sure that your assets are prepared for anything life throws at it. 24/7!'
		},

		// CEO //
		c3: {
			image: require('../../assets/images/pages/about/jason.webp'),
			name: 'Jason Tielve',
			title: 'Co-Owner & CEO',
			description: 'Co-Owner and CEO of 24/7, Jason brings his military service, 15 years of fire protection knowledge and business skills to build a team of qualified installers and personnel intent on providing quality driven, fire protection installation and service, adding value to your project\'s bottom line.',
			comtactEmail: 'mailto:jason@24-7fireprotection.com?subject=Sales/Service Question',
		},

		// Co-Owner //
		c4: {
			image: require('../../assets/images/pages/about/harry.webp'),
			name: 'Harry San Martin',
			title: 'Co-Owner & President',
			description: 'Co-Owner and President of 24/7, Harry manages all projects from installation to final inspection. With over 20 years within the industry Harry also trains and mentors all foremen and mechanics to insure all aspects of your projects are managed and completed in a timely fashion.',
			contactEmail: 'mailto:harry@24-7fireprotection.com?subject=Service/Install%20Question',
		},
		c5: {
			title: 'The 24/7 Staff',
			staffMembers: [
				{
					name: 'Jose C.',
					title: 'Office Manager',
				},
				{
					name: 'Giselle G.',
					title: 'Service Coordinator',
				},
				{
					name: 'Andrew & Yandri',
					title: 'Design Project Manager',
				},
			]
		}
	},

	// Our Mission //
	r3: {
		c1: { title: 'Our Mission', },

		c2: {
			description: 'At 24/7 Fire Protection Inc., it is our mission to create a competetive edge within the fire protection industry by offering quality design and installation services for your fire sprinkler needs. We begin by building relationships that secure the trust of customers within the common understanding that we are only successful if our customers are successful.',
		},

		c3: { image: require('../../assets/images/our-mission.webp'), },
	},
}