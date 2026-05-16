let URL = "https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=0296b90d40e159f0fbcc8f954a223243&units=metric";
let input = document.querySelector(".sbar");
let humidval = document.querySelector(".humidcont p");
let windval = document.querySelector(".windcont p");
let deg = document.querySelector(".temp h1");
let city = document.querySelector(".temp p");
let btn = document.querySelector("button");
let img = document.querySelector(".weatherimg img");

btn.addEventListener("click" , ()=>{
   
    changedata(input.value);
})
const changedata = async (Cityname) =>{
    let cityname = Cityname.toLowerCase();
    let data = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0296b90d40e159f0fbcc8f954a223243&units=metric`;
    let response = await fetch(data);
    let newdata = await response.json();
    let degree = newdata.main;
    let fdegree = degree.temp;
    deg.innerHTML = `${fdegree} °C`;
     city.innerHTML = newdata.name;
     let windspeed = newdata.wind;
     windval.innerHTML = `${windspeed.speed} m/s`;
     let Humidity = newdata.main;
     humidval.innerHTML = `${Humidity.humidity} %`;
     let newimg = newdata.weather;
     let fimg = newimg[0].main; 
     img.src = `${fimg}.png`; 
    
}
