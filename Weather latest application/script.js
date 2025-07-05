let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temprature = document.getElementById("temprature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let pressure = document.getElementById("pressure");
let humidity = document.getElementById("humidity");
let form = document.querySelector("form")
let main = document.querySelector("main");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (valueSearch.value.trim() !== "") {
        searchWeather();
    }
})



const searchWeather = () => {
    const apiKey = '6e6d5362dadd25ed9da6676c5356a83f';
    const citys = valueSearch.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(responsive => responsive.json())
        .then(data => {
            console.log(data);
            if(data.cod === 200){
                city.querySelector("figcaption").innerText = data.name ;
                city.querySelector("img").src = "https://flagsapi.com/" + data.sys.country + "/shiny/32.png"

                temprature.querySelector("img").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png"
                temprature.querySelector("figcaption span").innerText = data.main.temp  ;

                description.innerText = data.weather[0].description ;

                clouds.innerText = data.clouds.all ;
                humidity.innerText = data.main.humidity ;
                pressure.innerText = data.main.pressure ;
            } else {
                main.classList.add("error")
                setTimeout(() => {
                    main.classList.remove("error")
                }, 1000);
            }

            valueSearch.value = "";
        })

}


const initApp = () => {
    valueSearch.value = "Jaipur";
    searchWeather();
}

initApp();