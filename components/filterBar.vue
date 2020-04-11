<template>
	<div class="filters">
		<div class="line"></div>
		<div class="filterType">
			<checkbox name="woman" @change.native="updateFilter('woman')" />
			<checkbox name="man" @change.native="updateFilter('man')" />
		</div>
		<div class="line"></div>
		<div class="filterSize">
			<checkbox name="small" @change.native="updateFilter('small')" />
			<checkbox name="medium" @change.native="updateFilter('medium')" />
			<checkbox name="large" @change.native="updateFilter('large')" />
		</div>
		<div class="line"></div>
	</div>
</template>

<script>
import checkbox from '~/components/checkbox.vue'

export default {
	components: {
		checkbox,
	},
	methods: {
		updateFilter(filter) {
			this.$store.dispatch('updateFilter', filter)
		},
	},
}
</script>

<style lang="scss">
.filters {
	display: flex;
	height: 100vh;
	flex-direction: column;

	padding: 0 5%;
	align-items: flex-start;
	align-content: center;
	justify-content: center;

	.line {
		width: 100%;
		margin: 10px 0;
		border-bottom: 1px solid #28242d;
	}

	.filterSize,
	.filterType {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.btn {
		user-select: none;
		cursor: pointer;
		margin: 10px;
		padding: 10px;

		font-size: 2em;
		font-weight: 700;
		color: #6b6874;
		&:hover {
			color: #28242d;
		}
	}
}
</style>
