const time = document.getElementById("time");
const digitalClockElement = document.createElement("span");
digitalClockElement.setAttribute("class", "time__digital");
time.prepend(digitalClockElement);

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
    var strTime = hour + ":" + minutes;
    // String.prototype.toPersianDigits();
    digitalClockElement.innerHTML = strTime.toPersianDigits();
  } catch (err) {
    console.log(err);
  }
}

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};
setInterval(showTime, 60000);
showTime();
