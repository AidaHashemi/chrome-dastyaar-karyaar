// async function calculate() {
//   const res = await fetch("https://api.dastyar.io/express/clock/current");
//   const data = await res.json();
//   const totalMilliseconds = data.current;
//   var date = new Date(totalMilliseconds);
//   var hour = date.getHours();
//   var minutes = date.getMinutes();
//   if (hour > 12) {
//     const exectHour = hour - 12;
//     hour = exectHour;
//   }
//   if (minutes > 30) {
//     minutes -= 30;
//   } else if (minutes <= 30) {
//     minutes += 30;
//   }
//   if (minutes > 59) {
//     hour += 1;
//   }
//   hour = hour < 10 ? "0" + hour : hour;
//   minutes = minutes < 10 ? "0" + minutes : minutes;

//   curr_time = hour + ":" + minutes;
//   console.log(curr_time);
//   return curr_time;
// }

// calculate();

// Calling showTime function at every second
const digitalClock = document.querySelector(".time__digital");
setInterval(showTime, 60000);

// Defining showTime funcion
async function showTime() {
  // Getting current time and date
  const res = await fetch("https://api.dastyar.io/express/clock/current");
  const data = await res.json();
  const totalMilliseconds = data.current;
  var date = new Date(totalMilliseconds);
  var hour = date.getHours();
  var minutes = date.getMinutes();

  // Setting time for 12 Hrs format
  if (minutes < 30 && minutes > 0) {
    minutes += 30;
  }
  if (hour > 12) {
    hour -= 13;
  } else if (hour == 0) {
    hour = 12;
  }
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let currentTime = hour + ":" + minutes;

  String.prototype.toPersianDigits();
  var S = `<strong>${currentTime}</strong>`;
  digitalClock.innerHTML = "" + S.toPersianDigits();
}

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

showTime();
