<template>
	<div class="container">
		<checkoutProduct />
	</div>
</template>

<script>
import checkoutProduct from '~/components/checkoutProduct.vue'

export default {
	components: {
		checkoutProduct,
	},
	computed: {
		products() {
			return this.$store.getters.products
		},
	},
}
</script>
