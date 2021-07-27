<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar'
	}
</script>

<style>
	#tab-bar{
		display: flex;
		height: 49px;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f6f6f6;
		box-shadow: 0px -2px 5px rgba(0, 0, 0, .1);
	}
</style>
