<template>
	<mdui-button-icon variant="tonal">
		<svg t="1700531461008" class="icon rotate-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3676" width="32" height="32"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" p-id="3677"></path></svg>
	</mdui-button-icon>
</template>

<script lang="ts" setup>
	
</script>

<style scoped>
	.rotate-icon {
	  transition: transform 0.3s ease-in-out;
	}
	
	.rotate-icon:hover {
	  animation: rotate 0.5s linear forwards;
	}
	
	@keyframes rotate {
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>