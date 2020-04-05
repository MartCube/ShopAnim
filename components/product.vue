<template>
	<div class="product">
		<img :src="product.data.image.url" :name="$prismic.asText(product.data.name)" />
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.product {
	max-width: 200px;
	margin: 10px;
	display: flex;

	img {
		width: 100%;
	}
}
</style>
