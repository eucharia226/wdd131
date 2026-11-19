document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;


const temperature = 28
const windspeed = 12

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16)

}

if (temperature <= 10 && windspeed > 4.8) {
    const result = calculateWindChill(temperature, windspeed)
    document.getElementById("windchill").textContent = result
} else {
    document.getElementById("windchill").textContent = "N/A"
}
