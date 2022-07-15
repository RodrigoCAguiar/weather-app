function getWeather(city) {
  let apiKey = "b59d17968ffaa16f4faa04e22e1f861b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => DisplayWeather(data));

  function DisplayWeather(data) {
    const { name } = data;
    const { description, main } = data.weather[0];
    const { country } = data.sys;
    const { temp, humidity } = data.main;

    document.querySelector(".city").innerHTML = `${name} | ${country}`;
    document.querySelector(".temperature").innerHTML = `${Math.round(temp)}ºC`;
    document.querySelector(".humidity").innerHTML = `${humidity}%`;
    document.querySelector(".description").innerHTML = description;

    let imageSvg = document.getElementById("wimg");

    switch (main) {
      case "Clouds":
        imageSvg.src = "./Img/cloudy.svg";
        break;
      case "Clear":
        imageSvg.src = "./Img/night.svg";
        break;
    }
  }
}

//window.onload(getWeather("fortaleza"));

getWeather("fortaleza");

function search() {
  getWeather(document.querySelector(".search-city").value);
}

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    search();
  }
});
