const main = document.querySelector("nav");
const button = document.querySelector("#menu");
const head = document.querySelector("#head");

button.addEventListener("click", () => {
  main.classList.toggle("open");
  button.classList.toggle("open");
  head.classList.toggle("close");
});
document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

