// let userinput = document.getElementById("petrol").value;
// let userinput2= document.getElementById("diesel").value;
// let ans =  parseFloat(userinput) + parseFloat(userinput2);
// let result = document.getElementById("result");
// result.innerHTML="ans";
document.addEventListener("DOMContentLoaded", function() {
    // Get input elements
    let petrolInput = document.getElementById("petrol");
    let dieselInput = document.getElementById("diesel");
    let refrigerantR22Input = document.getElementById("refrigerantR22");
    let refrigerantR23Input = document.getElementById("refrigerantR23");
    let refrigerantR404AInput = document.getElementById("refrigerantR404A");
    let refrigerantR134AInput = document.getElementById("refrigerantR134A");
    let lpgInput = document.getElementById("lpg");
    let pngInput = document.getElementById("png");

    // Calculate total emissions
    function calculateTotalEmissions() {
        // Get values from input fields and convert to numbers
        let petrolConsumption = parseFloat(petrolInput.value);
        let dieselConsumption = parseFloat(dieselInput.value);
        let refrigerantR22Consumption = parseFloat(refrigerantR22Input.value);
        let refrigerantR23Consumption = parseFloat(refrigerantR23Input.value);
        let refrigerantR404AConsumption = parseFloat(refrigerantR404AInput.value);
        let refrigerantR134AConsumption = parseFloat(refrigerantR134AInput.value);
        let lpgConsumption = parseFloat(lpgInput.value);
        let pngConsumption = parseFloat(pngInput.value);

        // Perform calculations here based on your emissions formula

        // For demonstration, let's just calculate the total of all inputs
        let totalEmissions = petrolConsumption + dieselConsumption + refrigerantR22Consumption + refrigerantR23Consumption + refrigerantR404AConsumption + refrigerantR134AConsumption + lpgConsumption + pngConsumption;

        return totalEmissions;
    }

    // Update the total emissions whenever any input changes
    function updateTotalEmissions() {
        let totalEmissions = calculateTotalEmissions();
        // Display or use the total emissions value as needed
        console.log("Total emissions:", totalEmissions);
    }

    // Listen for changes in input fields
    petrolInput.addEventListener("input", updateTotalEmissions);
    dieselInput.addEventListener("input", updateTotalEmissions);
    refrigerantR22Input.addEventListener("input", updateTotalEmissions);
    refrigerantR23Input.addEventListener("input", updateTotalEmissions);
    refrigerantR404AInput.addEventListener("input", updateTotalEmissions);
    refrigerantR134AInput.addEventListener("input", updateTotalEmissions);
    lpgInput.addEventListener("input", updateTotalEmissions);
    pngInput.addEventListener("input", updateTotalEmissions);
});
