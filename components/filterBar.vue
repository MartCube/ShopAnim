<template>
	<div class="filters">
		<div class="btn" @click="updateFilter('S')">
			S
		</div>
		<div class="btn" @click="updateFilter('M')">
			M
		</div>
		<div class="btn" @click="updateFilter('L')">
			L
		</div>
	</div>
</template>

<script>
export default {
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
	.btn {
		user-select: none;
		cursor: pointer;
		margin: 10px;
		padding: 10px;

		font-size: 2em;
		color: #6b6874;
		&:hover {
			color: #28242d;
		}
	}
}
</style>
