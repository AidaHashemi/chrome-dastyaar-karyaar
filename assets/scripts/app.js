function toPersian(str) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10 && arr[i] >= 0) {
      arr[i] = persianDigits[arr[i]];
    }
  }
  return arr.join("");
}
