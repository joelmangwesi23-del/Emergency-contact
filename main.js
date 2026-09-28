/* ==========================================================================
   EmergencyConnect TZ - Main JavaScript Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileNav();
    highlightActiveNavLink();
    initNavbarScrollEffect();
});

/* ==========================================================================
   1. DARK & LIGHT MODE SYSTEM
   ========================================================================== */
function initTheme() {
    // Inject Theme Switcher Button into Navbar automatically if not present
    const navbar = document.querySelector(".navbar");
    if (navbar && !document.getElementById("theme-toggle-btn")) {
        const themeBtn = document.createElement("button");
        themeBtn.id = "theme-toggle-btn";
        themeBtn.className = "theme-toggle-btn";
        themeBtn.setAttribute("aria-label", "Toggle Dark/Light Mode");
        
        // Check saved theme or system preference
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.body.classList.add("dark-mode");
            themeBtn.innerHTML = "☀️"; // Sun icon for switching to light mode
        } else {
            themeBtn.innerHTML = "🌙"; // Moon icon for switching to dark mode
        }

        themeBtn.addEventListener("click", toggleTheme);

        // Place theme button before menu button or at end of navbar
        const menuBtn = document.querySelector(".menu-btn");
        if (menuBtn) {
            navbar.insertBefore(themeBtn, menuBtn);
        } else {
            navbar.appendChild(themeBtn);
        }
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    const themeBtn = document.getElementById("theme-toggle-btn");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        if (themeBtn) themeBtn.innerHTML = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        if (themeBtn) themeBtn.innerHTML = "🌙";
    }
}

/* ==========================================================================
   MOBILE NAVIGATION TOGGLE
   ========================================================================== */

function toggleMenu() {
    // Tafuta nav au nav-links
    const nav = document.querySelector("nav") || document.getElementById("nav-links");
    const menuBtn = document.querySelector(".menu-btn");

    if (nav) {
        // Tumia class ya 'nav-open' au 'active'
        const isOpen = nav.classList.toggle("nav-open");
        nav.classList.toggle("active");

        if (menuBtn) {
            menuBtn.innerHTML = isOpen ? "✕" : "☰";
        }
    }
}

// Hakikisha events zinajiunga mara tu ukurasa unapomaliza kuload
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelectorAll("nav a, #nav-links a");

    if (menuBtn) {
        // Tumia click na touchend kwa ajili ya usahihi wa simu (Touch devices)
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Funga menyu kiotomatiki mtumiaji akibonyeza link yoyote
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const nav = document.querySelector("nav") || document.getElementById("nav-links");
            const btn = document.querySelector(".menu-btn");
            if (nav) {
                nav.classList.remove("nav-open");
                nav.classList.remove("active");
            }
            if (btn) btn.innerHTML = "☰";
        });
    });
});

/* ==========================================================================
   3. EMERGENCY ALERT MODAL / ACTION
   ========================================================================== */
function showEmergencyMessage() {
    // Check if modal already exists
    let modal = document.getElementById("emergency-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "emergency-modal";
        modal.className = "emergency-modal";
        modal.innerHTML = `
            <div class="emergency-modal-content">
                <span class="close-modal" onclick="closeEmergencyModal()">&times;</span>
                <div class="modal-icon">🚨</div>
                <h2>NATIONAL EMERGENCY HELPLINE</h2>
                <p>Select an immediate response unit or call toll-free numbers below:</p>
                
                <div class="modal-actions">
                    <a href="tel:112" class="modal-btn primary">
                        🚓 Police / General (112)
                    </a>
                    <a href="tel:114" class="modal-btn fire">
                        🚒 Fire & Rescue (114)
                    </a>
                    <a href="tel:115" class="modal-btn medical">
                        🚑 Ambulance / ER (115)
                    </a>
                    <a href="tel:116" class="modal-btn child">
                        👶 Child Helpline (116)
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    modal.style.display = "flex";
}

function closeEmergencyModal() {
    const modal = document.getElementById("emergency-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking dark overlay
window.addEventListener("click", (e) => {
    const modal = document.getElementById("emergency-modal");
    if (e.target === modal) {
        closeEmergencyModal();
    }
});


/* ==========================================================================
   4. AUTO ACTIVE MENU LINK HIGHLIGHTER
   ========================================================================== */
function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        } else if (currentPath === "" && href === "index.html") {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


/* ==========================================================================
   5. NAVBAR SHADOW ON SCROLL
   ========================================================================== */
function initNavbarScrollEffect() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }
}