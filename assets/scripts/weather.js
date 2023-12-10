const url =
  "https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light";
const weather = document.getElementById("weather");
// const degree = document.querySelector(".weather__degree");
// const icon = document.getElementById("weathericon");
// const text = document.querySelector(".weather__text");
// const emoji = document.querySelector(".weather__emoji");
// const max = document.querySelector(".weather__max");
// const min = document.querySelector(".weather__min");

const weatherDegree = document.createElement("span");
const weatherFunText = document.createElement("span");
const minMax = document.createElement("div");
weatherDegree.setAttribute("class", "weather__degree");
weatherFunText.setAttribute("class", "weather__text");
minMax.setAttribute("class", "weather__minMax");
weather.prepend(minMax);
weather.prepend(weatherFunText);
weather.prepend(weatherDegree);

async function forecast() {
  const res = await fetch(url);
  const data = await res.json();
  const date = new Date();
  console.log(data);

  for (let item of data) {
    if (item.dateTitle === "امروز") {
      weatherDegree.innerHTML =
        (item.current + "").toPersianDigits() +
        "&#176" +
        `<img class="weather__icon" src="../../assets/images/${
          date.getHours() > 6 ? "icons8-cloud-48.png" : "icons8-night-48.png"
        }">`;

      weatherFunText.innerHTML = `${item.customDescription.text}
        <span class="weather__emoji">
        ${item.customDescription.emoji}</span>`;
      minMax.innerHTML =
        `
      <span class="weather__max">` +
        (item.max + "").toPersianDigits() +
        `&#176 حداکثر</span>
      <span class="weather__min">&#176` +
        (item.min + "").toPersianDigits() +
        `حداقل</span>`;
    }
  }
}

forecast();
