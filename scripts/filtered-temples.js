
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs, Georgia, USA",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
  },
  {
    templeName: "Nuku'alofa Tonga Temple",
    location: "Nuku'alofa, Tonga",
    dedicated: "1983, August, 9",
    area: 21184,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094-main.jpg",
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, USA",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
      "https://images.openai.com/static-rsc-4/V6ifq8CiaIXo9YngrlIvdSqtQor7hIULSH-qiXkBqHnHv4_kbAnnyTu4-6EvhLbthJLYjAWTDmga5-A6UlF8ANI38Tyygm_zEFLD585R6nCznffMD5aNU91egaLU3ERcrtkhuQX36yO3WiG8iPNowU86r6T-5aGn4UigDw9SXA8?purpose=inline",
  },
];

const Home = document.querySelector(".temple");
function displayTemples(templeList) {
  Home.innerHTML = templeList
    .map((temple) => {
      return `
            <figure>
                <h2>${temple.templeName}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            </figure>
        `;
    })
    .join("");
}
const oldTemple = temples.filter((oldT) => {
  return Number(oldT.dedicated.split(",")[0]) < 1900;
});
const newTemple = temples.filter((newT) => {
  return Number(newT.dedicated.split(",")[0]) > 2000;
});
const smallTemple = temples.filter((smallT) => {
  return smallT.area < 10000;
});
const largeTemple = temples.filter((largeT) => {
  return largeT.area > 90000;
});
displayTemples(temples)

const tap = document.querySelectorAll(".filter-btn");

tap.forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(buttons.id);
    if (buttons.id === "old") {
      displayTemples(oldTemple);
    }
    else if (buttons.id === "new") {
      displayTemples(newTemple)
    }
    else if (buttons.id === "large") {
      displayTemples(largeTemple)
    }
    else if (buttons.id === "small") {
      displayTemples(smallTemple)
    }
    else if (buttons.id === "home") {
      displayTemples(temples);
    }
  });
});
