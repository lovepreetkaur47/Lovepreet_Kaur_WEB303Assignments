/*
    Assignment #4
    {Your name here}
*/

$(function () {
    // your code here
    // Check if geolocation is available and has been allowed by the user
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // Display the current location
            var locationHere = document.getElementById("locationhere");
            locationHere.innerHTML = `Your Current Location: Latitude ${latitude}, Longitude ${longitude}`;

            // Check if there's a location value in local storage
            var storedLocation = localStorage.getItem("lastLocation");

            if (storedLocation) {
                // Parse the stored location string to an object
                var storedLocationObj = JSON.parse(storedLocation);

                // Calculate the distance between current and stored location
                var distance = calcDistanceBetweenPoints(
                    latitude,
                    longitude,
                    storedLocationObj.latitude,
                    storedLocationObj.longitude
                ).toFixed(2);

                // Display a welcome message and the distance traveled
                var welcomeMessage = document.createElement("h2");
                welcomeMessage.innerHTML = "Welcome back!";
                var traveledMessage = document.createElement("p");
                traveledMessage.innerHTML = `You traveled ${distance} km since your last visit.`;

                // Display accuracy information
                var accuracyMessage = document.createElement("p");
                accuracyMessage.innerHTML = `Accuracy: ${position.coords.accuracy.toFixed(2)} meters`;

                // Append messages to the content section
                var content = document.getElementById("content");
                content.appendChild(welcomeMessage);
                content.appendChild(traveledMessage);
                content.appendChild(accuracyMessage);
            } else {
                // Display a welcome message for first-time visitors
                var welcomeMessage = document.createElement("h2");
                welcomeMessage.innerHTML = "Welcome to the page for the first time!";
                content.appendChild(welcomeMessage);
            }

            // Store the current location in local storage
            var currentLocation = {
                latitude: latitude,
                longitude: longitude
            };
            localStorage.setItem("lastLocation", JSON.stringify(currentLocation));
        }, function (error) {
            // Handle geolocation error here
            var errorMessage = "Error: Geolocation is blocked. Please enable it to use the application.";
            var locationHere = document.getElementById("locationhere");
            locationHere.innerHTML = errorMessage;
        });
    } else {
        // Handle the case where geolocation is not supported by the browser
        var errorMessage = "Error: Geolocation is not supported by your browser.";
        var locationHere = document.getElementById("locationhere");
        locationHere.innerHTML = errorMessage;
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
    
    
});