// Write your JavaScript code here!

const { formSubmission, validateInput, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
        // form.getElementById("formSubmit").addEventListener("submit", validateInput);
        let form = document.querySelector("form");
        alert("Form loaded");
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
        });
        let RandomPlanet = pickPlanet(listedPlanetsResponse);
        let name = RandomPlanet["name"];
        let diameter = RandomPlanet["diameter"];
        let star = RandomPlanet["star"];
        let distance = RandomPlanet["distance"];
        let moons = RandomPlanet["moons"];
        let imageUrl = RandomPlanet["imageUrl"];
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)

         // Below this comment call the appropriate helper functions to pick a planet from the list of planets 
         // and add that information to your destination.
 
        form.addEventListener("submit", function(event){
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass");

            let fuelLevelValid = validateInput(fuelLevel);
            let cargoLevelValid = validateInput(cargoLevel);

            if(validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" ||
                fuelLevelValid == "Empty" || cargoLevelValid == "Empty"){
                alert("All fields are required!");
            event.preventDefault();
            } else if (fuelLevelValid == "Not a number" || cargoLevelValid == "Not a number"){
            alert("Fuel level and cargo level must be numbers")
            event.preventDefault();
            }

            formSubmission(document, listedPlanetsResponse, pilotName, copilotName, fuelLevel, cargoMass);
            console.log("PilotName: " + pilotName);

        });
        
    });
    

    
       
 
        


 
