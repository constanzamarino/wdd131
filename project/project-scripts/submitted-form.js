document.addEventListener("DOMContentLoaded", () => {
    
    const timeSpan = document.querySelector("#currentTime");
    if (timeSpan) { 
        const updateClock = () => {
            timeSpan.textContent = new Date().toLocaleTimeString();
        };
        updateClock();
        setInterval(updateClock, 1000);
    }

    
    const yearSpan = document.querySelector("#currentYear");
    const lastModSpan = document.querySelector("#lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModSpan) lastModSpan.textContent = "Last Modified: " + document.lastModified;

   
    let visits = Number(localStorage.getItem("visitCount")) || 0;
    visits++;
    localStorage.setItem("visitCount", visits);

    const footerText = document.querySelector(".footer-text");
    if (footerText) {
        const visitDisplay = document.createElement("p");
        visitDisplay.style.fontSize = "0.85rem";
        visitDisplay.textContent = `Site Visits: ${visits}`;
        footerText.appendChild(visitDisplay);
    }

  
    const menuBtn = document.querySelector("#menu");
    const navMenu = document.querySelector(".nav-menu");
    if (menuBtn && navMenu) {
        menuBtn.onclick = () => navMenu.classList.toggle("show");
    }


    const form = document.querySelector("form");
    if (form) {
        form.onsubmit = () => {
            const data = {
                type: document.getElementById("trip-type")?.value,
                budget: document.getElementById("budget")?.value,
                date: document.getElementById("trip-date")?.value,
                email: document.getElementById("user-email")?.value
            };
            localStorage.setItem("userTripPlan", JSON.stringify(data));
        };
    }

    
    const display = document.querySelector(".next-steps");
    if (display) {
        const saved = JSON.parse(localStorage.getItem("userTripPlan"));
        if (saved) {
            const summary = document.createElement("div");
            summary.style.marginTop = "20px";
            summary.style.padding = "10px";
            summary.style.borderLeft = "4px solid var(--secondary-color)";
            summary.style.background = "rgba(255,255,255,0.5)";
            
            summary.innerHTML = `
                <p><strong>Review:</strong> ${saved.type} trip</p>
                <p><strong>Budget:</strong> $${saved.budget} USD</p>
                <p><strong>Date:</strong> ${saved.date}</p>
            `;
            display.appendChild(summary);
        }
    }
});