<script setup>
import Loader from "./Loader.vue";

defineProps({
				color: String,
				heading: String,
				value: [String, Number],
				subValue: String,
				loading: Boolean
})
</script>

<template>
				<div
								class="h-1/5 w-full md:w-1/3 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative"
								:class="`bg-${color}-500`"
				>
								<span class="block p-4 uppercase text-xl opacity-50">{{ heading }}</span>
								<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">
												<Loader v-if="loading"/>
												<span v-if="!loading">
																{{ value }}
																<span class="text-4xl">{{ subValue }}</span>
												</span>
								</span>
				</div>
</template>

<style scoped>
</style>
