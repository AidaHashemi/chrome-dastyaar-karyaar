const timeDates = document.getElementById("time__dates");
const timeSolar = document.createElement("span");
const timeGregorian = document.createElement("div");
const timeLunar = document.createElement("div");
timeSolar.setAttribute("class", "time__solar");
timeGregorian.setAttribute("class", "time__gregorian");
timeLunar.setAttribute("class", "time__lunar");
time.prepend(timeSolar);
time.prepend(digitalClockElement);
timeDates.append(timeLunar);
timeDates.append(timeGregorian);
/////
let options = { day: "numeric", month: "long" };
let today = new Date().toLocaleDateString("fa-IR", options);
timeSolar.innerHTML = today;
/////
function gregorianDate() {
  var dateConstructor = new Date();
  var year = dateConstructor.getFullYear();
  var month = dateConstructor.getMonth();
  var date = dateConstructor.getDate();
  var today = dateConstructor.getDay();
  date = addZero(date);

  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Dec",
  ];

  timeGregorian.innerHTML = (
    date +
    "/" +
    monthName[month] +
    "/" +
    year
  ).toPersianDigits();
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

gregorianDate();

//////

today = new Date();
fetch(`https://api.aladhan.com/v1/gToH?
  date=${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`)
  .then((res) => res.json())
  .then((res) => {
    timeLunar.innerHTML = (
      res.data.hijri.year +
      "/" +
      res.data.hijri.month.ar +
      "/" +
      res.data.hijri.day
    ).toPersianDigits();
  });
