

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 10;
const windSpeed = 5;

const calculateWindChill = (t, s) => 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);

const displayWindChill = () => {
    const windChillElement = document.querySelector("#wind-chill-value");
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${result.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
};

window.addEventListener("load", displayWindChill);