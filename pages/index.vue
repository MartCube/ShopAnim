<template>
	<div class="container">
		<filterBar />

		<transition-group name="products" mode="out-in" tag="div" class="grid">
			<product v-for="product in products" :key="product.id" :product="product" />
		</transition-group>
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
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	align-content: flex-start;

	.grid {
		width: 80%;
		max-width: 900px;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: flex-start;
		flex-wrap: wrap;
	}
}

@media (max-width: 825px) {
	.container {
		flex-direction: column;
		.grid {
			width: 100%;
			justify-content: center;
		}
		.filters {
			width: 100%;
		}
	}
}
</style>
