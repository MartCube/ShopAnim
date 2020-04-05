export const state = () => ({
	products: [],
	filteredProducts: [],
	filters: [
		{
			name: 'S',
			value: false,
		},
		{
			name: 'M',
			value: false,
		},
		{
			name: 'L',
			value: false,
		},
	],
})

// Functions that return back data contained in the state.
export const getters = {
	products(state) {
		if (state.filteredProducts.length == 0) return state.products
		else {
			return state.filteredProducts
		}
	},
}

// Functions that directly mutate the state.
export const mutations = {
	bindProducts(state, products) {
		state.products = products
	},
	updateFilter(state, filter) {
		// find and update filter value
		var filterItem = state.filters.filter((item) => {
			if (item.name === filter) {
				item.value = !item.value
				return item
			}
		})

		// filtered array of products
		var filteredProducts = state.products.filter((product) => product.data.size === filter)
		var restProducts = state.filteredProducts.filter((product) => product.data.size !== filter)

		if (filterItem[0].value) {
			console.log('add')
			// adding the filtered array
			filteredProducts.forEach((item) => {
				state.filteredProducts.push(item)
			})
		} else {
			console.log('remove')
			// removing the filtered array
			state.filteredProducts = restProducts
		}

		// if state.filteredProducts is empty, return all products
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	bindProducts(context, products) {
		context.commit('bindProducts', products)
	},
	updateFilter(context, filter) {
		context.commit('updateFilter', filter)
	},
}
