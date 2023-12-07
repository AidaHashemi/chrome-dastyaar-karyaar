const url =
  "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light";
const degree = document.querySelector(".weather__degree");
const icon = document.getElementById("weathericon");
const texttt = document.querySelector(".weather__text");
const emoji = document.querySelector(".weather__emoji");
const max = document.querySelector(".weather__max");
const min = document.querySelector(".weather__min");

async function weather() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  for (let item of data) {
    if (item.dateTitle === "امروز") {
      degree.innerHTML = item.current + "&#176";
      icon.src = `http://openweathermap.org/img/wn/${item.weather.icon}.png`;
      texttt.innerHTML = item.customDescription.text;
      emoji.innerHTML = item.customDescription.emoji;
      max.innerHTML = item.max + "&#176" + "حداکثر" + " .";
      min.innerHTML = item.min + "&#176" + "حداقل";
    }
  }
}
weather();
