//Footer with the current year + last modified date + current time

const currentYearElement = document.getElementById("currentYear");
const lastModifiedElement = document.getElementById("lastModified");

const now = new Date();
currentYearElement.textContent = now.getFullYear();

lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString("en-US");

const currentTime = document.getElementById("currentTime");
setInterval(function(){
    const time = new Date();
    const hours= time.getHours().toString();
    const minutes= time.getMinutes().toString().padStart(2,'0');
    const seconds= time.getSeconds().toString().padStart(2, '0');

    currentTime.textContent= ` ${hours}:${minutes}:${seconds}`;
}, 1000);

// Hamburger button for the nav menu (mobile view)

const nav= document.querySelector(".navigation-menu");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
})

//Array called temples for the main structure

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
  
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Hokkaido, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:"https://churchofjesuschristtemples.org/sapporo-japan-temple/photographs/"
  },

  {
    templeName: "Mendoza Argentina",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 21999,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
  },

  {
    templeName: "Bangkok Thailand",
    location: "Makkasan, Ratchathewi, Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
];

//Loop to display the temple cards

function displayTemples(filteredTemples){
    const container = document.querySelector(".main-grid");
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card= document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `<h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName} Temple" 
                 loading="lazy" 
                 width="400" 
                 height="250">
         `;
        container.appendChild(card);

    });

}

displayTemples(temples);