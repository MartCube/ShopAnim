<template>
	<a class="btn" @click="$router.push(link)">
		<slot> <h1>btn slot</h1> </slot>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
.btn {
	cursor: pointer;
	user-select: none;
	text-decoration: none;

	background-color: #28242d;
	color: white;
	border: 2px solid transparent;
	border-radius: 5px;
	padding: 10px 20px;

	font-size: 1em;
	text-align: center;
	letter-spacing: 2px;

	transition: all 0.3s ease;
	&:hover {
		border: 2px solid #28242d;
		background-color: white;
		color: #28242d;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	}
	&:active {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
	}
}
</style>
