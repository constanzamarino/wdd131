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



const nav= document.querySelector(".nav-menu");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
})

const destinations = [
  {
    destinationName: "Breiðamerkursandur (Diamond Beach)",
    location: "Vatnajökull National Park, Austurland, Iceland",
    destinationDescription: "Diamond Beach is a mesmerizing landscape where sparkling, ancient icebergs wash ashore onto a stark, jet-black volcanic coastline. These glacial fragments glow like oversized diamonds against the dark sand, creating a surreal contrast that feels more like a dream than a destination. To maximize your experience for free, visit at sunrise when the low light turns the ice into glowing prisms, and always keep an eye out for seals playing in the nearby lagoon outlet. While the beach itself has no entry fee, you should budget roughly 1,000 ISK (+$8 USD) for parking and bring a reusable bottle to enjoy Iceland’s world-class tap water. For the best value, stock up on groceries at Bónus or Krónan before heading east, as remote service stations carry a significant premium. Whether you're staying in a budget-friendly campervan or a nearby guesthouse, this cinematic shoreline offers a once-in-a-lifetime visual feast that costs nothing but your time.",
    imageUrl:"https://luxeadventuretraveler.com/wp-content/uploads/2013/01/Jdombs-Travels-Jokulsarlon-2.jpg"
  },

  {
    destinationName: "Salar de Uyuni",
    location: "Potosí, Daniel Campos, Bolivia",
    destinationDescription: "The world’s largest mirror awaits you in this infinite salt desert where the sky and earth merge into an impossible horizon. During the rainy season, a thin layer of water transforms the ground into a reflective crystal that offers the most surreal photo opportunities on the planet. To visit on a budget, book a shared tour from the city of Uyuni, which typically includes transport, meals, and basic shelters. Expect to pay around $150–$200 USD for a comprehensive three-day expedition, a minimal investment for such an out-of-this-world landscape. Don't forget to pack extreme thermal clothing and high-SPF sunscreen, as both the cold and radiation are intense at 3,600 meters. It is a raw sensory experience that completely redefines what you consider natural",
    imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/4e/25/a2/caption.jpg?w=1200&h=-1&s=1"
  },

  {
    destinationName: "Cappadocia",
    location: "Central Anatolia, Turkey",
    destinationDescription: "Iconic 'Fairy Chimneys' and rose-colored valleys create a lunar landscape dotted with ancient cave dwellings and underground cities. Sunrise here is legendary, with hundreds of hot air balloons painting the sky while the soft light accentuates the whimsical volcanic rock formations. While a balloon flight is the major splurge ($150–$250 USD), hiking through valleys like Love Valley or Rose Valley is entirely free and equally fascinating. You can save significantly by staying in budget-friendly cave hostels in Göreme and eating at small local pide shops for under $10 USD. It is the perfect blend of ancient history and a geology that looks like it was plucked from a dark fantasy novel.",
    imageUrl:"https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/03/capadocia_888.jpg"
  },
];

function displayRecommended() {
    const container = document.getElementById("recommended-container");
    if (!container) return;

    container.innerHTML = `
        <figure class="destination-card" style="max-width: 400px;">
            <img src="${recommendedDestination.imageUrl}" alt="${recommendedDestination.name}" style="width:100%; height:250px; object-fit:cover;">
            <div class="card-content">
                <h3>${recommendedDestination.name}</h3>
                <p><strong>📍</strong> ${recommendedDestination.location}</p>
                <p>${recommendedDestination.description}</p>
            </div>
        </figure>
    `;
}

document.addEventListener("DOMContentLoaded", displayRecommended);