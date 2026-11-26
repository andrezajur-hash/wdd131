
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    }
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...

  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
},
{
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8162.jpg"
},
{
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-54574.jpg"
}
];

const gallery = document.querySelector(".gallery");

function createTempleCards(templeList) {
    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

createTempleCards(temples);

const home = document.querySelector("#home");

home.addEventListener("click", () => {
    createTempleCards(temples);
});

const old = document.querySelector("#old");

old.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) =>
        Number(temple.dedicated.split(",")[0]) < 1900
    );

    createTempleCards(oldTemples);
});

const newLink = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

newLink.addEventListener("click", () => {
    const newTemples = temples.filter((temple) =>
        Number(temple.dedicated.split(",")[0]) > 2000
    );
    createTempleCards(newTemples);
});

large.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) =>
        temple.area > 90000
    );
    createTempleCards(largeTemples);
});

small.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) =>
        temple.area < 10000
    );
    createTempleCards(smallTemples);
});
