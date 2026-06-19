// 1. Initialize EmailJS
emailjs.init("rkPBUtxDvdr0WCyJq");

/* =========================
   BOOKING FORM
========================= */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_wzl1yv6",
            "template_hu2ofyk",
            this
        ).then(function () {
            alert("Booking sent successfully!");
            bookingForm.reset();
        }, function (error) {
            alert("Booking failed. Try again.");
            console.log(error);
        });
    });
}


/* =========================
   CONTACT FORM
========================= */
const contactForm = document.getElementById("contactform");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_wzl1yv6",
            "template_hu2ofyk",
            this
        ).then(function () {
            showToast();
            contactForm.reset();
        }, function (error) {
            alert("Contact form failed. Try again.");
            console.log("Status Code:", error.status);
            console.log("Error Message:", error.text);
            const name = document.querySelector("[name='full_name']").value.trim();
const phone = document.querySelector("[name='phone']").value.trim();
        });
    });
}



/* =========================
   ENQUIRY FORM
========================= */
const enquiryForm = document.getElementById("enquiryform");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_wzl1yv6",
            "template_hu2ofyk",
            this
        ).then(function () {
            showToast();
            enquiryForm.reset();
        }, function (error) {
            alert("Enquiry failed. Try again.");
            console.log("Status Code:", error.status);
            console.log("Error Message:", error.text);
            const name = document.querySelector("[name='full_name']").value.trim();
const phone = document.querySelector("[name='phone']").value.trim();
        });
    });
}


/* =========================
   TOAST
========================= */
function showToast() {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = ""; // clear old image first
    img.src = src; // load only when clicked

    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* =========================
   SERVICE SEARCH FUNCTION
========================= */
function searchServices(event) {
    let input = document.getElementById("searchInput");

    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll(".grid .card");

    for (let i = 0; i < cards.length; i++) {

        let card = cards[i];
        let text = card.textContent.toLowerCase();

        // only filter service cards (those with <h3>)
        if (card.querySelector("h3")) {
            if (text.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    }
}

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

// Get all service names
function getServices() {
    let cards = document.querySelectorAll(".grid .card h3");
    let services = [];

    for (let i = 0; i < cards.length; i++) {
        services.push(cards[i].textContent);
    }

    return services;
}

// ================= SERVICES DATA =================
const services = [
    {
        title: "Basic Wash & Condition",
        description: "Gentle cleansing and conditioning for healthy hair.",
        price: "R150",
        image: "images/hair-treatment.jpg"
    },
    {
        title: "Deep Treatment",
        description: "Restores moisture and repairs damaged hair.",
        price: "R250",
        image: "images/hair-treatment-1.jpeg"
    },
    {
        title: "Full Revamp",
        description: "Complete transformation including wash, treatment & styling.",
        price: "R280 - R350",
        image: "images/hair-treatment-2.jpeg"
    }
];

// ================= PRICE LIST//=================
const prices = [
    { name: "Basic Wash & Condition", price: "R150" },
    { name: "Deep Treatment", price: "R250" },
    { name: "Full Revamp", price: "R280 - R350" }
];

// =================  RENDER PRICE LIST =================
const priceContainer = document.getElementById("priceList");

prices.forEach(item => {
    const p = document.createElement("p");

    p.innerHTML = `<strong>${item.name}:</strong> ${item.price}`;

    priceContainer.appendChild(p);
});

// ================= CREATE CARDS =================
const grid = document.getElementById("serviceGrid");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" onclick="openImage(this.src)" style="cursor:pointer;">
        <div class="card-content">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <p><strong>${service.price}</strong></p>
        </div>
    `;

    grid.appendChild(card);
});

// ================= IMAGE POPUP FUNCTION =================
function openImage(src) {
    window.open(src, "_blank");
}
