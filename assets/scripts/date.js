const timeSolar = document.createElement("span");
timeSolar.setAttribute("class", "time__solar");
time.appendChild(timeSolar);
let options = { day: "numeric", month: "long" };
let today = new Date().toLocaleDateString("fa-IR", options);
timeSolar.innerHTML = today;

///////
function dc() {
  var monthHTML = document.getElementById("month-js");
  var dateHTML = document.getElementById("date-js");
  var yearHTML = document.getElementById("year-js");

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  date = addZero(date);
  var today = d.getDay();
  var dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  //   todayHTML.innerHTML = dayName[today];
  dateHTML.innerHTML = date;
  monthHTML.innerHTML = monthName[month] + "/";
  yearHTML.innerHTML = year + "/";
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(dc, 1000);

// let today = new Date().toLocaleDateString("fa-IR");
// console.log(today);
// const timeSolar = document.querySelector(".time__solar");

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
