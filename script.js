// Write your JavaScript code here!

// const { formSubmission, validateInput, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {


        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);

        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, 
            selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
        });  


        let form = document.getElementById("launchForm");
        let list = document.getElementById("faultyItems");

         // Below this comment call the appropriate helper functions to pick a planet from the list of planets 
         // and add that information to your destination.
 
        form.addEventListener("submit", function(event){
            
            event.preventDefault();

            let pilotName = document.querySelector("input[name=pilotName]");
            let pilot = pilotName.value;
            let copilotName = document.querySelector("input[name=copilotName]");
            let copilot = copilotName.value;
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let fuel = fuelLevel.value;
            let cargoMass = document.querySelector("input[name=cargoMass");
            let cargoLevel = cargoMass.value;
            formSubmission(document, list, pilot, copilot, fuel, cargoLevel);
        });
    });