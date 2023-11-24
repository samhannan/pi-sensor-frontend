<script setup>
import { useSensorData } from "../composables/sensor-data.js";
import {ref, watch} from "vue";
import Metric from "./Metric.vue";

const loading = ref(true)

const { sensor } = useSensorData()

watch(sensor, () => {
				loading.value = false
				// setTimeout(() => {
				// 				loading.value = false
				// }, 500)
})
</script>

<template>
				<div class="h-full">
								<Metric heading="Temp" :value="sensor.temp_sensor" subValue="°C" color="red" :loading="loading" />
								<Metric heading="Humidity" :value="sensor.humidity" subValue="%" color="lime" :loading="loading" />
								<Metric heading="Motion detected" :value="sensor.motion_detected ? 'Yes' : 'No'" subValue="" color="indigo" :loading="loading" />
								<Metric heading="Brightness" :value="sensor.brightness" subValue="" color="yellow" :loading="loading" />
								<Metric heading="Pressure" :value="sensor.pressure_barometer" subValue="" color="purple" :loading="loading" />
				</div>
</template>

<style scoped>
</style>
