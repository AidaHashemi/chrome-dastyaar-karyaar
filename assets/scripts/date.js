const timeDates = document.getElementById("time__dates");
const timeSolar = document.createElement("span");
const timeGregorian = document.createElement("span");
timeSolar.setAttribute("class", "time__solar");
timeGregorian.setAttribute("class", "time__gregorian");
time.appendChild(timeSolar);
timeDates.appendChild(timeGregorian);
let options = { day: "numeric", month: "long" };
let today = new Date().toLocaleDateString("fa-IR", options);
timeSolar.innerHTML = today;

///////
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

  timeGregorian.innerHTML =
    `<span id="year-js" class="gregorian__item">${year}/</span>
  <span id="month-js" class="gregorian__item">${monthName[month]}/</span>
  <span id="date-js" class="gregorian__item">${date}</span>`.toPersianDigits();
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
    document.getElementById("day").innerHTML = res.data.hijri.day;
    document.getElementById("month").innerHTML = res.data.hijri.month.ar + "/";
    document.getElementById("year").innerHTML = res.data.hijri.year + "/";
  });
