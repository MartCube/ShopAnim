export const state = () => ({
	products: [],
	filteredProducts: [],
	filters: [
		{
			name: 'small',
			category: 'size',
			value: false,
		},
		{
			name: 'medium',
			category: 'size',
			value: false,
		},
		{
			name: 'large',
			category: 'size',
			value: false,
		},
		{
			name: 'man',
			category: 'type',
			value: false,
		},
		{
			name: 'woman',
			category: 'type',
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
		state.filters.forEach((item) => {
			if (item.name === filter) item.value = !item.value
		})

		// array of all filters selected
		var filterArray = state.filters.filter((filter) => filter.value === true)

		state.filteredProducts = []
		// get all filtred arrays then merge them
		filterArray.forEach((i) => {
			if (i.category === 'size') {
				var add = state.products.filter((product) => product.data.size === i.name)
				add.forEach((item) => {
					state.filteredProducts.push(item)
				})
			}
			if (i.category === 'type') {
				var add = state.products.filter((product) => product.data.type === i.name)
				add.forEach((item) => {
					state.filteredProducts.push(item)
				})
			}
		})

		// get only the duplicates
		if (filterArray.length > 1) {
			var pom = state.filteredProducts.filter((item, index) => state.filteredProducts.indexOf(item) !== index)
			if (pom.length !== 0) state.filteredProducts = pom
		}
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
