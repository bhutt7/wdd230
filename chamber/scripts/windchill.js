// Pull temp and wind speed from page, and declare variable for wind chill
let temp = parseFloat(document.getElementById('temp').textContent);
let speed = parseFloat(document.getElementById('speed').textContent);
let chill;

// Check if wind chill needs to be calculated
if (temp <= 50) {
    if (speed > 3) {
    // Calculate wind chill
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
    } else {
        chill = 'N/A';
    }
} else {
    chill = 'N/A';
}

// Push wind chill value to span in document
document.getElementById('chill').textContent = chill;