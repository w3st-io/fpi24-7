<template>
	<div>
	</div>
</template>

<script>
	// [IMPORT] //
	import io from 'socket.io-client'

	// [EXPORT] //
	export default {
		data() {
			return {
				socket: this.socket = io(),
				decoded: {},
				reqData: {},
			}
		},

		async created() {
			if (localStorage.node_env == 'development') {
				this.socket = io('http://localhost:5000')
			}
		},
	}
</script>