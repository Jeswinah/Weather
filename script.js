const input = document.getElementById("inputbar");
const btn = document.getElementById("searchbtn");
const img = document.getElementById("wimg");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const check = async (city) => {
  const apikey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc67731a8ebafd1846bc27fd4df75cf2`;
  try {
    const res = await fetch(apikey);
    const data = await res.json();
    temp.innerHTML = Math.round((data.main.temp - 273.15)) + "°C";
    place.innerHTML = data.name;
    const icons = data.weather[0].main;

    if (icons == "Clouds") {
      img.src = "images/clouds.png";
    } else if (icons == "Mist") {
      img.src = "images/mist.png";
    } else if (icons == "Drizzle") {
      img.src = "images/drizzle.png";
    } else if (icons == "Humidity") {
      img.src = "images/humidity.png";
    } else if (icons == "Rain") {
      img.src = "images/rain.png";
    } else if (icons == "Wind") {
      img.src = "images/wind.png";
    } else if (icons == "Snow") {
      img.src = "images/snow.png";
    }
    console.log(icons);
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", () => {
  const city = input.value;
  check(city);
});
