//Array of products that will be displayed for the user to select

const products = [
  {
    id: "fc-1888",
    name: "Flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById("product-choice");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; 
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// To store and track the number of reviews completed

document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
    reviewCount++;
    window.localStorage.setItem("reviewCount-ls", reviewCount);
    const displayCount = document.querySelector("#review-display");
    if (displayCount) {
        displayCount.textContent = `Total reviews submitted: ${reviewCount}`;
    }
});


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