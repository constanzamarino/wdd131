document.addEventListener("DOMContentLoaded", () => {
    
    const menuButton = document.querySelector("#menu");
    const navMenu = document.querySelector(".nav-menu");
    const yearSpan = document.querySelector("#currentYear");
    const lastModSpan = document.querySelector("#lastModified");
    const timeSpan = document.querySelector("#currentTime");
    const form = document.querySelector("form");
    const displayContainer = document.querySelector(".next-steps");

    
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    
    let visitCount = Number(localStorage.getItem("visitCount")) || 0;
    visitCount++; 
    localStorage.setItem("visitCount", visitCount);

    
    const welcomeContainer = document.querySelector("header");
    if (welcomeContainer) {
        const welcomeMsg = document.createElement("span");
        welcomeMsg.style.fontSize = "0.8rem";
        welcomeMsg.style.padding = "5px";
        welcomeMsg.style.color = "var(--third-color)";
        
        if (visitCount === 1) {
            welcomeMsg.textContent = " ¡Welcome on your first visit!";
        } else {
            welcomeMsg.textContent = ` ¡Welcome back! Visit #${visitCount}`;
        }
        welcomeContainer.appendChild(welcomeMsg);
    }

    
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModSpan) {
        lastModSpan.textContent = "Last Modified: " + document.lastModified;
    }

    if (timeSpan) {
        const updateTime = () => {
            const now = new Date();
            timeSpan.textContent = now.toLocaleTimeString();
        };
        updateTime(); 
        setInterval(updateTime, 1000); 
    }

    
    if (form) {
        form.addEventListener("submit", (e) => {
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
            summaryDiv.style.padding = "15px";
            summaryDiv.style.backgroundColor = "white";
            summaryDiv.style.borderRadius = "8px";
            
            summaryDiv.innerHTML = `
                <h4 style="color: #0077b6; margin-bottom: 10px;">Review your trip:</h4>
                <p><strong>Style:</strong> ${savedData.type}</p>
                <p><strong>Budget:</strong> $${savedData.budget} USD</p>
                <p><strong>Planned Date:</strong> ${savedData.date}</p>
                <p><strong>Confirmation sent to:</strong> ${savedData.email}</p>
            `;
            displayContainer.appendChild(summaryDiv);
        }
    }
});