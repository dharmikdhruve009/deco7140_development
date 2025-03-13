function fetchTemperature() {
    // Get the temperature value element from the DOM
    const temperatureValue = document.getElementById("temperature-value");

    // This checks if the temperature widget is in the DOM
    if (!temperatureValue) {
        console.error("Temperature widget not found in the DOM.");
        return;
    }

    // This is the information for our location (Brisbane, Australia)
    const latitude = -27.4705;
    const longitude = 153.026;

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Convert the response to JSON - an object
        })
        .then((data) => {
            console.log(data);
            const temperature = data.current.temperature_2m;
            temperatureValue.textContent = temperature; // Update UI
        })
        .catch((error) => {
            console.error("Error fetching temperature:", error);
            temperatureValue.textContent = "N/A"; // Handle errors gracefully
        });
}

export { fetchTemperature };
