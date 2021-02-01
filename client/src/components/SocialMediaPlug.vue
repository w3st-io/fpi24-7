<template>
	<div class="text-center">
		<a :href="defaultData.facebookLink" class="text-light">
			<FacebookIcon :size="size" class="mr-3" />
		</a>

		<a :href="defaultData.instagramLink" class="text-light">
			<InstagramIcon :size="size" class="ml-3" />
		</a>
	</div>
</template>

<script>
	import defaultData from '../defaults/companyInfo'
	import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'

	export default {
		props: {
			size: {
				type: String,
				default: "24",
			}
		},

		components: {
			FacebookIcon,
			InstagramIcon,
		},
		
		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>