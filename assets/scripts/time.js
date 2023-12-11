const time = document.getElementById("time");
// create an element and set a attr
const digitalClockElement = document.createElement("span");
digitalClockElement.setAttribute("class", "time__digital");

async function showTime() {
  try {
    const res = await fetch("https://api.dastyar.io/express/clock/current");
    const data = await res.json();
    let totalMilliseconds = data.current;
    let date = new Date(totalMilliseconds);
    var hour = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hour = hour < 10 ? "0" + hour : hour;
    var strTime = `${toPersian(hour + "")}:${toPersian(minutes + "")}`;
    digitalClockElement.innerHTML = strTime;
  } catch (err) {
    console.log(err);
  }
}

setInterval(showTime, 60000);
showTime();
