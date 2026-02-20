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

if (hambutton) { 
    hambutton.addEventListener('click', () => {
        nav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const displayContainer = document.querySelector(".next-steps");

    
    if (form) {
        form.addEventListener("submit", () => {
            const tripData = {
                type: document.getElementById("trip-type").value,
                budget: document.getElementById("budget").value,
                date: document.getElementById("trip-date").value,
                email: document.getElementById("user-email").value
            };
            
            localStorage.setItem("userTripPlan", JSON.stringify(tripData));
        });
    }

  
    if (displayContainer) {
        const savedData = JSON.parse(localStorage.getItem("userTripPlan"));

        if (savedData) {
           
            const summaryDiv = document.createElement("div");
            summaryDiv.style.marginTop = "20px";
            summaryDiv.style.borderTop = "1px solid #ccc";
            summaryDiv.style.paddingTop = "15px";
            
            summaryDiv.innerHTML = `
                <p><strong>Your Plan Summary:</strong></p>
                <ul style="list-style: none; padding: 0;">
                    <li>🌍 Experience: ${savedData.type}</li>
                    <li>💰 Budget: $${savedData.budget} USD</li>
                    <li>📅 Date: ${savedData.date}</li>
                    <li>📧 Contact: ${savedData.email}</li>
                </ul>
            `;
            displayContainer.appendChild(summaryDiv);
        }
    }
    
    
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});