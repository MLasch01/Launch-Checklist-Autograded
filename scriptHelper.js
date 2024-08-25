// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=" ${imageUrl}">
                 `;
}

    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

 
 function validateInput(testInput) {
    if (testInput === "") {
        return("Empty");
    }
    else if (isNaN(testInput)) {
        return("Not a Number");
    }
    else  if(!isNaN(testInput)) {
        return("Is a Number");
    }
}


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus")
    // Load in data
        let values = document.getElementById("faultyItems");
        let fuelUpdate = document.getElementById("fuelStatus");
        let cargoUpdate = document.getElementById("cargoStatus");


        if (validateInput(pilot) == "Empty" ||
        validateInput(copilot) == "Empty" ||
        validateInput(fuelLevel) == "Empty" ||
        validateInput(cargoLevel) == "Empty") {
      
        alert("all fields are required");
    }

    if (validateInput(pilot) == "Is a Number" ||
        validateInput(copilot) == "Is a Number" ||
        validateInput(fuelLevel) == "Not a Number" ||
        validateInput(cargoLevel) == "Not a Number") {
     
        alert("please enter valid information for each field");
    }

    // Perform the update on the data
        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        
        if(validateInput(fuelLevel) != "Empty" && fuelLevel < 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.setAttribute('style', "color:red");
            fuelStatus.innerHTML = "Fuel level too low for launch"
        } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

        if(validateInput(cargoLevel) != "Empty" && cargoLevel > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.setAttribute('style', "color:red");
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"            
        }else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
        
        if (fuelLevel >= 10000 && cargoLevel <= 10000 && validateInput(pilot) ==  "Not a Number" 
                && validateInput(copilot) == "Not a Number" && 
                validateInput(fuelLevel) != "Empty" && validateInput(cargoLevel) != "Empty") {
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.setAttribute('style', "color:green");
        }
};
 
 async function myFetch() {
 
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return(response.json());
    });        
    return planetsReturned;
};
 
 function pickPlanet(planetList) {
    let randomPlanetIndex = Math.floor(Math.random()*planetList.length);
    return(planetList[randomPlanetIndex]);
 }

 
  module.exports.addDestinationInfo = addDestinationInfo;
  module.exports.validateInput = validateInput;
  module.exports.formSubmission = formSubmission;
  module.exports.pickPlanet = pickPlanet; 
  module.exports.myFetch = myFetch;