<template>
	<div class="w-100 bg-dark text-light">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center text-light" data-aos="fade">
					<h5>
						{{ companyInfo.companyName }} {{ new Date().getFullYear() }}
					</h5>
					<h6 v-html="companyInfo.companyCaption" class="text-primary">
					</h6>
					<hr>
				</BCol>

				<BCol cols="12" sm="3" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-light">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-light">Hours</h4>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-primary">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="3" class="text-center" data-aos="fade-up">
					<h4>Services</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/Designs">
								Design
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/installs">
								Installs
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/service">
								Service
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="3" class="text-center" data-aos="fade-up">
					<h4>Company</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/contact-us">
								Contact Us
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/about">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/gallery">
								Gallery
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="3" class="text-center" data-aos="fade-up">
					<h4>Careers</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/careers">
								Careers
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/careers/apply">
								Apply
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" class="my-3 text-center text-secondary">
					<h6>© w3st.io {{ new Date().getFullYear() }}</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo
			}
		},
	}
</script>