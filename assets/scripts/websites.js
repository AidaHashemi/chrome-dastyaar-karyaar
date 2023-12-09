const websites = document.getElementById("websites");
const images = ["nightSite.png", "youtube.png", "codepen.png"];
const adress = [
  "https://www.shab.ir/",
  "https://www.youtube.com/",
  "https://codepen.io/trending",
];
const names = ["شب", "youtube", "codepen"];
document.body.onload = addElement;

function addElement() {
  for (let i = 0; i < 11; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute(
      "class",
      "websites__item w-100 d-flex-col justify-center align-center"
    );
    if (i >= 0 && i < 3) {
      const webName = document.createElement("span");
      webName.innerHTML = names[i];
      newDiv.innerHTML = `<a href="${adress[i]}" target="_blank"><img class="websites__img" src="../../assets/images/${images[i]}"/></a>`;
      newDiv.appendChild(webName);
    } else {
      newDiv.innerHTML = `<i class="fas fa-plus websites__plusIcon"></i>`;
    }

    websites.appendChild(newDiv);
  }
}
