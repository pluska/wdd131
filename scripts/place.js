function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const chillElement = document.getElementById("wind-chill");

    if (tempElement && windElement && chillElement) {
        const temp = parseFloat(tempElement.textContent);
        const speed = parseFloat(windElement.textContent);
        if (temp <= 10 && speed > 4.8) {
            const chillValue = calculateWindChill(temp, speed);
            chillElement.textContent = `${chillValue.toFixed(1)} °C`;
        } else {
            chillElement.textContent = "N/A";
        }
    }
});
