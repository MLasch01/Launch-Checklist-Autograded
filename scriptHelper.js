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
                 <img src="${imageUrl}">`;

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
}
 
 function validateInput(testInput) {
    if (testInput == "") {
        return("Empty");
    }
    else if (isNaN(testInput)) {
        return("Not a Number");
    }
    else  {
        return("Is a Number");
    }
}
 
// function placeholder(){
//     window.addEventListener("load", function() {
//         let form = document.querySelector("launchForm");
//         form.addEventListener("submit", function(event) {
//         let pilotName = document.querySelector("input[name=pilotName]");
//         let copilotName = document.querySelector("input[name=copilotName]");
//         let fuelLevel = document.querySelector("input[name=fuelLevel]");
//         let cargoMass = document.querySelector("input[name=cargoMass");
//             if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
//                 alert("All fields are required!");
//             }
//             else if (pilotName.value != "text") {
//                 alert("Empty");
//             }
//             else if (copilotName.value != "text") {
//                 alert("Empty");
//             }
//             else if (isNaN(fuelLevel.value)=true) {
//                 alert("Not a Number");
//             }
//             else if (isNaN(cargoMass.value)=true) {
//                 alert("Not a Number");
//             }
//         // stop the form submission
//             event.preventDefault();
//         });
//     });
// }



 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // form.getElementById("formSubmit").addEventListener("submit", validateInput);
    //document.addEventListener("load", function(event) {
    
    // Load in data
        let values = document.getElementById("faultyItems");
        let fuelUpdate = document.getElementById("fuelStatus");
        let cargoUpdate = document.getElementById("cargoStatus");

    // Perform the update on the data
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        
        if(fuelLevel < 10000) {
        // Update status of fuelStatus, grabbed by fuelUpdate
        values.setAttribute('style', "visibility: visible");
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.setAttribute('style', "color:red");
            console.log(fuelLevel + ": There is not enough fuel for the journey.");
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML = `Fuel level too low for launch`;
        } else {
            let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

        if(cargoLevel > 10000) {
            values.setAttribute('style', "visibility: visible");
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.setAttribute('style', "color:red");
            console.log(cargoLevel + ": There is too much mass for the shuttle to take off.");
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        }else {
            let cargoStatus = document.getElementById("cargoStatus");
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }

        if (fuelLevel >= 10000 & cargoLevel <= 10000) {
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.setAttribute('style', "color:green");
        }
    //});
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