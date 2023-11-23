<script setup>
import {reactive, onMounted} from 'vue'

defineProps({
})

let metrics = reactive({
				temp_sensor: 0,
				humidity: 0,
				motion_detected: false,
				brightness: 0,
				pressure_barometer: 0,
});

fetch(`${import.meta.env.VITE_API_HOST}/items`, {
				method: 'GET',
})
				.then(response => response.json())
				.then(data => {
								metrics.temp_sensor = data.temp_sensor;
								metrics.humidity = data.humidity;
								metrics.motion_detected = data.motion_detected ? 'Yes' : 'No'
								metrics.brightness = data.brightness;
								metrics.pressure_barometer = data.pressure_barometer;
				})

</script>

<template>
				<div class="h-full">
								<div class="h-1/5 w-full md:w-1/3 bg-red-500 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative">
												<span class="block p-4 uppercase text-xl opacity-50">Temp</span>
												<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">{{ metrics.temp_sensor }}<span class="text-4xl">°C</span></span>
								</div>
								<div class="h-1/5 w-full md:w-1/3 bg-lime-500 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative">
												<span class="block p-4 uppercase text-xl opacity-50">Humidity</span>
												<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">{{ metrics.humidity }}<span class="text-4xl">%</span></span>
								</div>
								<div class="h-1/5 w-full md:w-1/3 bg-indigo-500 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative">
												<span class="block p-4 uppercase text-xl opacity-50">Motion detected</span>
												<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">{{ metrics.motion_detected }}</span>
								</div>
								<div class="h-1/5 w-full md:w-1/3 bg-yellow-500 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative">
												<span class="block p-4 uppercase text-xl opacity-50">Brightness</span>
												<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">{{ metrics.brightness }}</span>
								</div>
								<div class="h-1/5 w-full md:w-1/3 bg-purple-500 text-opacity-90 text-white font-bold md:inline-block md:h-1/2 relative">
												<span class="block p-4 uppercase text-xl opacity-50">Pressure</span>
												<span class="absolute w-full top-[40%] text-center text-4xl md:text-7xl">{{ metrics.pressure_barometer }}</span>
								</div>
				</div>
</template>

<style scoped>
</style>
