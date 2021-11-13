// Do I need to create severeal functions to handle the form? Like Mod 4?
var formEl = document.querySelector("#city-form");
var searchButton = document.querySelector("#button");
var cityNames = [];
var cityLat = "33.44";
var cityLon = "-94.04";
// getting the API to return lat and lon when searching city. then plug that into the API call
// use weather gio location to get lat and lon

var cityInput = function cityInput(){
    //console.log("cityInput");
   // Add a button
    var cityButton = document.querySelector("#button");
    formEl.appendChild(cityButton);
}
searchButton.addEventListener("click", cityInput);
// Save city under search bar
// Save in local storage - no need to save data. Set it up so that the saved citys are buttons that pull the data from API

function getApi() {
    //Grab information from the API
    //First I need to create a variable for the link
    //Do I break this down into arrays to get the site to be able to pull diffirent lat/long? 
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&exclude=hourly,daily&appid=e6d5269d64f289a875a5913eb4bdd57e";
     console.log(requestUrl);
    fetch(requestUrl)
      .then(function(response) {
          console.log(response);
        return response.json();
      })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            //console.log(data);
        }
      });
  }
getApi();
cityInput();

var saveCity = function() {
    localStorage.setItem("city", JSON.stringify(cityNames[i]));
}