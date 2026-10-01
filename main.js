// ======================================================
// EMERGENCYCONNECT TZ - MAIN JAVASCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // 1. MOBILE NAVIGATION
    // ==================================================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        // Open / close mobile menu
        menuBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            navLinks.classList.toggle("active");

            // Change hamburger icon
            if (navLinks.classList.contains("active")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });

        // Close menu after clicking a link
        const navigationLinks = navLinks.querySelectorAll("a");

        navigationLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuBtn.innerHTML = "☰";
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                navLinks.classList.remove("active");
                menuBtn.innerHTML = "☰";
            }

        });
    }


    // ==================================================
    // 2. NAVBAR SHADOW WHEN SCROLLING
    // ==================================================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {

                navbar.style.boxShadow =
                    "0 5px 20px rgba(0,0,0,0.12)";

            } else {

                navbar.style.boxShadow =
                    "0 3px 15px rgba(0,0,0,0.08)";
            }

        });
    }


    // ==================================================
    // 3. SMOOTH SCROLLING
    // ==================================================

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ==================================================
    // 4. HOSPITAL SEARCH
    // ==================================================

    const hospitalSearch =
        document.getElementById("hospitalSearch");

    const regionFilter =
        document.getElementById("regionFilter");

    const typeFilter =
        document.getElementById("typeFilter");

    const searchBtn =
        document.getElementById("searchBtn");

    const hospitalCards =
        document.querySelectorAll(".hospital-card");


    function searchHospitals() {

        if (!hospitalSearch || !regionFilter || !typeFilter) {
            return;
        }

        const searchValue =
            hospitalSearch.value.toLowerCase().trim();

        const selectedRegion =
            regionFilter.value.toLowerCase();

        const selectedType =
            typeFilter.value.toLowerCase();


        hospitalCards.forEach(function (card) {

            const cardText =
                card.innerText.toLowerCase();

            const cardRegion =
                card.getAttribute("data-region")
                ? card.getAttribute("data-region").toLowerCase()
                : "";

            const cardType =
                card.getAttribute("data-type")
                ? card.getAttribute("data-type").toLowerCase()
                : "";


            const matchesSearch =
                searchValue === "" ||
                cardText.includes(searchValue);


            const matchesRegion =
                selectedRegion === "" ||
                cardRegion === selectedRegion;


            const matchesType =
                selectedType === "" ||
                cardType === selectedType;


            if (
                matchesSearch &&
                matchesRegion &&
                matchesType
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";
            }

        });

    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchHospitals
        );

    }


    if (hospitalSearch) {

        hospitalSearch.addEventListener(
            "input",
            searchHospitals
        );

        hospitalSearch.addEventListener(
            "keypress",
            function (event) {

                if (event.key === "Enter") {
                    searchHospitals();
                }

            }
        );
    }


    if (regionFilter) {

        regionFilter.addEventListener(
            "change",
            searchHospitals
        );

    }


    if (typeFilter) {

        typeFilter.addEventListener(
            "change",
            searchHospitals
        );

    }


    // ==================================================
    // 5. EMERGENCY CALL CONFIRMATION
    // ==================================================

    const emergencyLinks =
        document.querySelectorAll(
            'a[href="tel:112"]'
        );


    emergencyLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const confirmed =
                    confirm(
                        "Are you sure you want to call Emergency Number 112?"
                    );

                if (!confirmed) {
                    event.preventDefault();
                }

            }
        );

    });


    // ==================================================
    // 6. CURRENT YEAR IN FOOTER
    // ==================================================

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    // ==================================================
    // 7. BACK TO TOP BUTTON
    // ==================================================

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    backToTop.style.display = "flex";

                } else {

                    backToTop.style.display = "none";

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ==================================================
    // 8. CONTACT FORM
    // ==================================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const message =
                    document.getElementById("message");


                if (
                    name &&
                    email &&
                    message
                ) {

                    if (
                        name.value.trim() === "" ||
                        email.value.trim() === "" ||
                        message.value.trim() === ""
                    ) {

                        alert(
                            "Please fill in all required fields."
                        );

                        return;
                    }


                    alert(
                        "Thank you! Your message has been received."
                    );

                    contactForm.reset();

                }

            }
        );

    }


    // ==================================================
    // 9. SERVICE CARDS
    // ==================================================

    const serviceCards =
        document.querySelectorAll(".service-card");


    serviceCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.style.transform =
                    "translateY(-5px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.style.transform =
                    "translateY(0)";

            }
        );

    });


    // ==================================================
    // 10. HOSPITAL CARD HOVER EFFECT
    // ==================================================

    const cards =
        document.querySelectorAll(".hospital-card");


    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.style.transform =
                    "translateY(-6px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.style.transform =
                    "translateY(0)";

            }
        );

    });


    // ==================================================
    // 11. IMAGE ERROR HANDLING
    // ==================================================

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                this.style.display = "none";

            }
        );

    });


    // ==================================================
    // 12. ESC KEY CLOSES MOBILE MENU
    // ==================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (navLinks) {
                    navLinks.classList.remove("active");
                }

                if (menuBtn) {
                    menuBtn.innerHTML = "☰";
                }

            }

        }
    );


    // ==================================================
    // 13. PAGE LOADED
    // ==================================================

    console.log(
        "EmergencyConnect TZ JavaScript loaded successfully."
    );

});
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("detectLocationBtn");
    const result = document.getElementById("locationResult");
    const mapContainer = document.getElementById("mapContainer");
    const map = document.getElementById("locationMap");

    if (!button) {
        console.error("Detect My Location button not found.");
        return;
    }

    button.addEventListener("click", function () {

        if (!navigator.geolocation) {
            result.innerHTML = `
                <p>❌ Your browser does not support location detection.</p>
            `;
            return;
        }

        button.disabled = true;
        button.innerHTML = "⏳ Detecting Location...";

        result.innerHTML = `
            <p>📍 Detecting your location...</p>
        `;

        navigator.geolocation.getCurrentPosition(

            async function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                try {

                    // Reverse Geocoding
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
                        {
                            headers: {
                                "Accept": "application/json"
                            }
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Unable to find location name.");
                    }

                    const data = await response.json();

                    const address = data.address || {};

                    // Get the most useful location names
                    const road =
                        address.road ||
                        address.pedestrian ||
                        address.neighbourhood ||
                        "";

                    const area =
                        address.suburb ||
                        address.city_district ||
                        address.town ||
                        address.village ||
                        "";

                    const city =
                        address.city ||
                        address.town ||
                        address.municipality ||
                        "";

                    const country =
                        address.country || "";

                    // Build readable location name
                    let locationName = "";

                    if (road && area && city) {
                        locationName =
                            `${road}, ${area}, ${city}`;
                    }
                    else if (area && city) {
                        locationName =
                            `${area}, ${city}`;
                    }
                    else if (city) {
                        locationName =
                            city;
                    }
                    else if (area) {
                        locationName =
                            area;
                    }
                    else {
                        locationName =
                            data.display_name || "Location found";
                    }

                    result.innerHTML = `
                        <div class="location-found">

                            <h3>📍 Your Current Location</h3>

                            <p class="location-name">
                                ${locationName}
                            </p>

                            <p>
                                <strong>Country:</strong>
                                ${country}
                            </p>

                            <a
                                href="https://www.google.com/maps?q=${latitude},${longitude}"
                                target="_blank"
                                class="map-link">
                                🗺️ Open in Google Maps
                            </a>

                        </div>
                    `;

                    // Display map
                    map.src =
                        `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

                    mapContainer.style.display = "block";

                }

                catch (error) {

                    console.error(error);

                    result.innerHTML = `
                        <p>⚠️ Location detected, but the location name could not be found.</p>

                        <p>
                            Please check your internet connection and try again.
                        </p>
                    `;
                }

                button.disabled = false;
                button.innerHTML = "📍 Detect My Location";
            },

            function (error) {

                button.disabled = false;
                button.innerHTML = "📍 Detect My Location";

                if (error.code === 1) {

                    result.innerHTML = `
                        <p>❌ Location permission was denied.</p>
                        <p>
                            Please allow location access and try again.
                        </p>
                    `;

                }

                else if (error.code === 2) {

                    result.innerHTML = `
                        <p>❌ Your location is currently unavailable.</p>
                    `;

                }

                else if (error.code === 3) {

                    result.innerHTML = `
                        <p>❌ Location detection timed out.</p>
                    `;

                }

                else {

                    result.innerHTML = `
                        <p>❌ Unable to detect your location.</p>
                    `;
                }

            },

            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        );
    });

});
// =========================================
// LANGUAGE SYSTEM
// =========================================

const translations = {

    en: {

        home: "Home",
        services: "Services",
        nearby: "Nearby Help",
        hospitals: "Hospitals",
        contacts: "Emergency Contacts",
        about: "About",
        call112: "🚨 Call 112",

        detectLocation: "📍 Detect My Location",
        yourLocation: "📍 Your Current Location",
        openGoogleMaps: "🗺️ Open in Google Maps",

        emergency: "Medical Emergency?",
        findHospital: "Find a Hospital",
        search: "Search",
        choose: "Choose",
        getHelp: "Get Help"

    },

    sw: {

        home: "Mwanzo",
        services: "Huduma",
        nearby: "Msaada wa Karibu",
        hospitals: "Hospitali",
        contacts: "Mawasiliano ya Dharura",
        about: "Kuhusu",
        call112: "🚨 Piga 112",

        detectLocation: "📍 Tambua Nilipo",
        yourLocation: "📍 Mahali Nilipo Sasa",
        openGoogleMaps: "🗺️ Fungua Google Maps",

        emergency: "Dharura ya Kimatibabu?",
        findHospital: "Tafuta Hospitali",
        search: "Tafuta",
        choose: "Chagua",
        getHelp: "Pata Msaada"

    }

};


// =========================================
// CHANGE LANGUAGE
// =========================================

function changeLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // Save selected language
    localStorage.setItem(
        "selectedLanguage",
        language
    );


    // Update buttons
    const englishBtn =
        document.getElementById("englishBtn");

    const swahiliBtn =
        document.getElementById("swahiliBtn");


    if (englishBtn && swahiliBtn) {

        englishBtn.classList.remove("active");
        swahiliBtn.classList.remove("active");


        if (language === "en") {

            englishBtn.classList.add("active");

        } else {

            swahiliBtn.classList.add("active");

        }

    }

}


// =========================================
// LANGUAGE BUTTONS
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const englishBtn =
            document.getElementById("englishBtn");

        const swahiliBtn =
            document.getElementById("swahiliBtn");


        if (englishBtn) {

            englishBtn.addEventListener(
                "click",
                function () {

                    changeLanguage("en");

                }
            );

        }


        if (swahiliBtn) {

            swahiliBtn.addEventListener(
                "click",
                function () {

                    changeLanguage("sw");

                }
            );

        }


        // Load saved language
        const savedLanguage =
            localStorage.getItem(
                "selectedLanguage"
            );


        if (savedLanguage) {

            changeLanguage(savedLanguage);

        } else {

            changeLanguage("en");

        }

    }
);