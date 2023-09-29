const userTab = document.querySelector("[data-user-weather]");
const searchTab = document.querySelector("[data-search-weather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const formContainer = document.querySelector("[data-search-form]");
const loadingScreen = document.querySelector(".loading-screen-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessButton = document.querySelector("[data-grant-access]");
const searchInput = document.querySelector("[data-search-input]");
const notFoundContainer = document.querySelector("[not-found-container]");

const API_KEY = '369e190babfdb0b08adb18c3d85e5421';
let currTab = userTab;
currTab.classList.add("current-tab");
getFromSessionStorage();


function switchTab(clickedTab)
{
    if(clickedTab != currTab)
    {
        currTab.classList.remove("current-tab");
        currTab = clickedTab;
        currTab.classList.add("current-tab");
        
        if(!formContainer.classList.contains("active"))
        {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            notFoundContainer.classList.remove("active");
            formContainer.classList.add("active");
        }
        else
        {
            formContainer.classList.remove("active");
            userInfoContainer.classList.remove("active");
            notFoundContainer.classList.remove("active");
            getFromSessionStorage();   
        }
    }
}


function getFromSessionStorage()
{
    const localCoordinates = sessionStorage.getItem("user-coordinate");
    if(!localCoordinates)
    {
        grantAccessContainer.classList.add("active");
    }
    else
    {
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherDetailsBasedOnLatitudeAndLongitude(coordinates);
    }
}



async function fetchWeatherDetailsBasedOnLatitudeAndLongitude(coordinates)
{
    let {latitude, longitude} = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");
    try
    {
        const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInformation(data);
    }
    catch(err)
    {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        loadingScreen.classList.remove("active");
        notFoundContainer.classList.add("active");
    }
}

async function fetchWeatherDetailsBasedOnCityName(cityName)
{
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    notFoundContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    try
    {
        let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInformation(data);
    }
    catch(err)
    {
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        notFoundContainer.classList.add("active");
    }   
}

function renderWeatherInformation(data)
{
    const cityName = document.querySelector("[data-city-name]");
    const countryIcon = document.querySelector("[data-country-icon]");
    const weatherDescription = document.querySelector("[data-weather-description]");
    const weatherIcon = document.querySelector("[data-weather-icon]");
    const temperature = document.querySelector("[data-temperature]");
    const windSpeed = document.querySelector("[data-wind-speed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloud = document.querySelector("[data-clouds]");


    cityName.textContent = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    weatherDescription.textContent = data?.weather[0]?.main;
    weatherIcon.src =  `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temperature.textContent = data?.main?.temp;
    windSpeed.textContent = data?.wind?.speed;
    humidity.textContent = data?.main?.humidity;
    cloud.textContent = data?.clouds?.all;
    console.log("Here");
}

function getLocation()
{
    if(navigator.geolocation)
    {
        function success(currPos)
        {
            const latitude = currPos.coords.latitude;
            const longitude = currPos.coords.longitude;
            const obj = {"latitude" : latitude, "longitude" : longitude};
            sessionStorage.setItem("user-coordinate", JSON.stringify(obj));
            fetchWeatherDetailsBasedOnLatitudeAndLongitude(obj);
        }

        function error()
        {
            notFoundContainer.classList.add("active");
        }

        navigator.geolocation.getCurrentPosition(success, error);            
    }
    else
    {
        alert("Geolocation Support Not available in your Browser")
    }
}

userTab.addEventListener("click", function(event)
{
    switchTab(userTab);
})


searchTab.addEventListener("click", function(event)
{
    switchTab(searchTab);
})

grantAccessButton.addEventListener("click", getLocation);


formContainer.addEventListener("submit", function(event)
{
    event.preventDefault();
    let cityName = searchInput.value;
    if(cityName)
    {
        fetchWeatherDetailsBasedOnCityName(cityName);
    }
})
