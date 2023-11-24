// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useSensorData() {
    const sensor = ref({
        temp_sensor: 0,
        humidity: 0,
        motion_detected: 0,
        brightness: 0,
        pressure_barometer: 0,
    })

    fetch(`${import.meta.env.VITE_API_HOST}/items`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => sensor.value = data)

    return { sensor }
}