<template>
	<div class="w-100 bg-secondary text-light" style="height: 500px;">
		<BContainer>
			<BRow>
				<BCol cols="12" class="my-3 text-center">
					<small>© 2021</small>
				</BCol>

				<BCol cols="4">
					<h5>Features</h5>
					<ul class="list-unstyled text-small">
						<li><a class="text-muted" href="#">Cool stuff</a></li>
					</ul>
				</BCol>

				<BCol cols="4">
					<h5>Resources</h5>
					<ul class="list-unstyled text-small">
						<li><a class="text-muted" href="#">Resource</a></li>
					</ul>
				</BCol>

				<BCol cols="4">
					<h5>About</h5>
					<ul class="list-unstyled text-small">
						<li><a class="text-muted" href="#">Team</a></li>
					</ul>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			caption1: 'Album example is © Bootstrap, but please download and customize it for yourself!'
		}
	}
}
</script>