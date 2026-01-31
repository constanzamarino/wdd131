
//Wind chill calculation (weather section)

const temperature = 6;
const windSpeed = 10;

function calculateWindChill (temperature, windSpeed){
    let windChill = 13.12 + (0.61215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    if(temperature <= 10 && windSpeed > 4.8){
        return windChill.toFixed(2);
    } else{
        return `${"N/A"}`
    }

}

const windChillElement = document.getElementById("windChillValue");
if (windChillElement) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
}


//Current date and time (footer)

const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

const now = new Date();
currentYearElement.textContent = now.getFullYear();

lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString("en-US");

const currentTime = document.getElementById("currentTime");
setInterval(function(){
    const time = new Date();
    const hours= time.getHours().toString();
    const minutes= time.getMinutes().toString().padStart(2,'0');
    const seconds= time.getSeconds().toString().padStart(2, '0');

    currentTime.textContent= ` ${hours}:${minutes}:${seconds}`;
}, 1000);