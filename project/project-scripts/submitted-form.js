document.addEventListener("DOMContentLoaded", () => {
  
    const menuButton = document.querySelector("#menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    
    const yearSpan = document.querySelector("#currentYear");
    const lastModSpan = document.querySelector("#lastModified");
    const timeSpan = document.querySelector("#currentTime");

    
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    
    if (lastModSpan) {
        lastModSpan.textContent = "Last Modified: " + document.lastModified;
    }

    if (timeSpan) {
        setInterval(() => {
            const now = new Date();
            timeSpan.textContent = now.toLocaleTimeString();
        }, 1000);
    }

    
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
            summaryDiv.style.color = "#0077b6"; 
            
            summaryDiv.innerHTML = `
                <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ccc;">
                <p><strong>Your Trip Details:</strong></p>
                <p>Experience: ${savedData.type}</p>
                <p>Budget: $${savedData.budget} USD</p>
                <p>Departure: ${savedData.date}</p>
            `;
            displayContainer.appendChild(summaryDiv);
        }
    }
});