<template>
	<div class="product">
		<img :class="{ opened: modalOpen }" :src="product.data.image.url" @click="modalToggle" />
		<!-- pop-up modal for the product -->
		<div v-if="modalOpen" class="modal">
			<div class="card">
				<div class="image">
					<img :src="product.data.image.url" />
				</div>
				<div class="info">
					<div class="text">
						<div class="close" @click="modalToggle" />
						<h1>{{ $prismic.asText(product.data.name) }}</h1>
						<div class="line"></div>

						<div class="selectors">
							<div class="size">
								<h2>Size</h2>
								<v-select :options="sizes"></v-select>
							</div>
							<div class="number">
								<h2>Number</h2>
								<v-select :options="sizes"></v-select>
							</div>
							<div class="color">
								<h2>Color</h2>
								<v-select :options="sizes"></v-select>
							</div>
						</div>
						<div class="description">
							<h2>Description</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et aut eaque quis itaque numquam omnis asperiores, maxime illum ullam.</p>
						</div>
						<div class="basket_shop">
							<basket />
						</div>
						<div class="price">
							<p>2500 <span>UAH</span></p>
						</div>
						<btn link="checkout">ORDER</btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'
import basket from '~/components/basket.vue'

export default {
	components: {
		btn,
		basket,
	},
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			modalOpen: false,
			sizes: ['small', 'medium', 'large'],
		}
	},
	methods: {
		modalToggle($prismic) {
			this.modalOpen = !this.modalOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.product {
	user-select: none;
	max-width: 200px;
	margin: 10px;
	display: flex;

	img {
		cursor: pointer;
		width: 100%;
	}

	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3;

		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		.card {
			display: flex;
			width: 100%;
			max-width: 1000px;
			min-height: 632px;

			background: white;

			.image {
				flex: 1 1 500px;

				img {
					width: 100%;
					height: 100%;
				}
			}
			.info {
				display: inherit;
				flex: 1 1 500px;

				.text {
					display: flex;
					align-content: center;
					flex-wrap: wrap;

					width: 100%;
					padding: 0 28px;
					position: relative;
					h1 {
						text-transform: uppercase;
					}
					h2 {
						margin: 15px 0;
					}
					.line {
						width: 100%;
						margin: 10px 0;
						border-bottom: 2px solid #28242d;
					}
					.close {
						position: absolute;
						right: 28px;
						top: 28px;
						width: 28px;
						height: 28px;
						opacity: 0.3;
						cursor: pointer;

						transition: all 0.3s ease;
						&:hover {
							opacity: 1;
						}
						&:before,
						&:after {
							position: absolute;
							left: 15px;
							content: ' ';
							height: 33px;
							width: 2px;
							background-color: #333;
						}
						&:before {
							transform: rotate(45deg);
						}
						&:after {
							transform: rotate(-45deg);
						}
					}
					.description {
						flex-basis: 50%;
					}
					.selectors {
						display: flex;
						flex-direction: column;
						flex-basis: 50%;

						.size,
						.number,
						.color {
							.v-select {
								width: 160px;
								border-radius: 5px;
							}
						}
					}
					.basket_shop {
						flex-basis: 50%;
						display: flex;
						justify-content: flex-start;
						margin: 30px 0;
					}
					.price {
						flex-basis: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						align-content: center;

						font-size: 3em;
						span {
							font-size: 0.5em;
						}
					}
					.btn {
						width: 100%;
						margin: 20px 0;
					}
				}
			}
		}
	}
}
</style>
