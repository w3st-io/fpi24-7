<template>
	<BContainer class="nav-spacer">
		<BCard bg-variant="light" class="my-4 text-center">
			<h1 class="text-center text-primary">404 Not Found</h1>
			<p>Strange..</p>

			<a href="/" class="m-auto text-center">
				<BButton variant="primary" class="m-auto text-center">
					Return Home
				</BButton>
			</a>

			<S/>
		</BCard>
	</BContainer>
</template>

<script>
	import S from './pay-invoice'

	export default {
		components: {
			S,
		}
	}
</script>