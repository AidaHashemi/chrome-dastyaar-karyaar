const weather = document.getElementById("weather");
// create elements and set attr
const weatherDegree = document.createElement("span");
const weatherFunText = document.createElement("span");
const minMax = document.createElement("div");
weatherDegree.setAttribute("class", "weather__degree");
weatherFunText.setAttribute("class", "weather__text");
minMax.setAttribute("class", "weather__minMax");
weather.prepend(minMax);
weather.prepend(weatherFunText);
weather.prepend(weatherDegree);
// url
const url =
  "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light";

async function forecast() {
  const response = await fetch(url);
  const data = await response.json();
  const date = new Date();

  for (let item of data) {
    if (item.dateTitle === "امروز") {
      // degree and img/icon
      weatherDegree.innerHTML = `
        ${toPersian(item.current + "")}&#176
        <img class="weather__icon" src="../../assets/images/${
          date.getHours() > 6 ? "icons8-cloud-64.png" : "icons8-night-64.png"
        }">`;

      // fun text and emoji
      weatherFunText.innerHTML = `${item.customDescription.text}
        <span class="weather__emoji">
        ${item.customDescription.emoji}
        </span>`;

      // min max degree
      minMax.innerHTML = `<span class="weather__max">
        ${toPersian(item.max + "")}&#176 حداکثر
        </span>
        <span class="weather__min">&#176
        ${toPersian(item.min + "")} حداقل
        </span>`;
    }
  }
}

forecast();
