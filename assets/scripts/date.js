// select DOM element
const timeDates = document.getElementById("time__dates");

// create elements
const timeSolar = document.createElement("span");
const timeGregorian = document.createElement("div");
const timeLunar = document.createElement("div");

// set attr
timeSolar.setAttribute("class", "time__solar");
timeGregorian.setAttribute("class", "time__gregorian");
timeLunar.setAttribute("class", "time__lunar");

time.prepend(timeSolar);
time.prepend(digitalClockElement);
timeDates.append(timeLunar);
timeDates.append(timeGregorian);

//____________________get solar date
let options = { day: "numeric", month: "long" };
let todayIs = new Date().toLocaleDateString("fa-IR", options);
timeSolar.innerHTML = todayIs;

//____________________get gregorian date
function gregorianDate() {
  let dateConstructor = new Date();
  let year = dateConstructor.getFullYear();
  let month = dateConstructor.getMonth();
  let date = dateConstructor.getDate();
  let today = dateConstructor.getDay();

  date = addZero(date);

  const monthName = [
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

  let timeGregorianContent = year + "/" + monthName[month] + "/" + date;

  let timeGregorianContentPersian = toPersian(timeGregorianContent);

  timeGregorian.innerHTML = timeGregorianContentPersian;
}
//____________________add zero for numbers less than 10
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
gregorianDate();

//____________________get lunar date
let today = new Date();
fetch(`https://api.aladhan.com/v1/gToH?
  date=${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`)
  .then((response) => response.json())
  .then((response) => {
    let timeLunarContent =
                           response.data.hijri.year +
                            "/" +
                           response.data.hijri.month.ar +
                           "/" +
                           response.data.hijri.day;

    let timeLunarContentPersian = toPersian(timeLunarContent);

    timeLunar.innerHTML = timeLunarContentPersian;
  });
