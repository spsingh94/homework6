var mainWeatherDisplay = $("#chosenCity");
var cityTemp = $("#cityTemp");
var cityHumidity = $("#cityHumid");
var cityWind = $("#cityWindSpeed");
var uvIndex = $("cityUV");
// var userZipCode = $("<p>");
// console.log(userZipCode);

// var weatherImg = $("<img>");


// function getWeatherInfo() {
function zipInput(zip) {
    // var cityZip = userSelection;
    var apiKey = "&appid=bf7d4ae013d0bfbbd881ad4e4fc83e39";
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us" + apiKey;
    // if (getSearchInput === ""); {
    //     console.log("it's a string");
    // }
    // console.log(cityZip);

    $.ajax({
        url: apiUrl,
        type: "GET"
    }).then(function (response) {
        console.log(response);
        mainWeatherDisplay.text(response.name);
        cityTemp.text("Temperature:" + " " + (Math.floor((response.main.temp - 273.15) * 1.8) + 32) + " " + "°F");
        cityHumidity.text("Humidity:" + " " + response.main.humidity + "%");
        cityWind.text("Wind Speed:" + " " + (Math.floor(response.wind.speed / 1.609344) + " " + "MPH"));
        uvIndex.append("UV Index");
        // attach image of cloud/sun/clear skies/rain/etc
        //cloudy
        if (response.weather[0].main === "Clouds") {
            console.log("hello");
            // rainy
        } else if (response.weather[0].main === "Rain") {
            console.log("what up");
            // Clear Skies
        } else if (response.weather[0].main === "Clear") {
            console.log("yessir");
            // Misty
        } else if (response.weather[0].main === "Mist") {
            console.log("it's misty out herrr");
        }
    });
};

$(".list-group-item").click(function () {
    // console.log("hi");
    var userSelection = this.value;
    zipInput(userSelection);
});
$("#searchInput").keyup(function (response) {
    // console.log(response);
    var userInput = response.key;
    // parseInt(userInput);
    console.log(userInput);
    // if (userInput === "Enter") {

    // }
    // else if (userInput === "Enter") {
    //     zipInput(userZipCode);
    // }
    // userZipCode.text(userInput);
});

    // userZipCode.bind(userInput);
    // var zipString = userZipCode[0];
    // console.log(zipString);
    // console.log(userZipCode);
    // zipInput(userInput);

// Temperature: ((response.main.temp-273.15)*1.8)+32;
// Humidity: (" " + response.main.humidity + " " + "°F");
// Wind Speed: (Math.floor(response.wind.speed/1.609344));
// UV Index:

// + response.weather[0].icon