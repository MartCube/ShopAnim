<template>
	<div class="container">
		<filterBar />

		<div class="grid">
			<product v-for="product in products" :key="product.id" :product="product" />
		</div>
	</div>
</template>

<script>
import product from '~/components/product.vue'
import filterBar from '~/components/filterBar.vue'
export default {
	components: {
		product,
		filterBar,
	},
	async asyncData({ $prismic, error, store }) {
		const products = await $prismic.api.query($prismic.predicates.at('document.type', 'product'))

		// products.results
		if (products) {
			store.dispatch('bindProducts', products.results)
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	data() {
		return {
			value: false,
		}
	},
	computed: {
		products() {
			return this.$store.getters.products
		},
	},
}
</script>

<style lang="scss" scoped>
.grid {
	width: 80%;
	max-width: 900px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
}

@media (max-width: 825px) {
	.grid {
		justify-content: center;
	}
}
</style>
