/* ==========================================
   Last Trace
   script.js
   Version 3.0
========================================== */

/* ==========================================
   Gallery Generate
========================================== */

function generateGallery() {

    const gallery = document.getElementById("gallery-grid");

    if (!gallery) return;

    if (typeof photos === "undefined") return;

    gallery.innerHTML = "";

    photos.forEach(photo => {

        const card = document.createElement("a");

        card.className = "gallery-card";

        card.href = `photo.html?id=${photo.id}`;

        card.innerHTML = `

            <img
                src="${photo.image}"
                alt="${photo.title}"
                loading="lazy"
            >

            <div class="gallery-overlay">

                <h3>
                    Last Trace #${String(photo.id).padStart(3, "0")}
                </h3>

                <p>${photo.title}</p>

                <span>View →</span>

            </div>

        `;

        gallery.appendChild(card);

    });

}

/* ==========================================
   Smooth Scroll
========================================== */

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            const href = link.getAttribute("href");

            if (!href || href === "#") return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

/* ==========================================
   Header Scroll
========================================== */

function headerScroll() {

    const header = document.querySelector(".header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scroll");

        } else {

            header.classList.remove("scroll");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}

/* ==========================================
   Fade Animation
========================================== */

function fadeAnimation() {

    const targets = document.querySelectorAll(

        ".fade"

    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    targets.forEach(target => {

        observer.observe(target);

    });

}

/* ==========================================
   Hero Parallax
========================================== */

function heroParallax() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener("scroll", () => {

        const y = window.scrollY;

        hero.style.backgroundPosition = `center ${y * 0.35}px`;

    });

}

/* ==========================================
   Active Navigation
========================================== */

function activeNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length === 0) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === "#" + current

            ) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================
   Photo Page
========================================== */

function loadPhotoPage() {

    const image = document.getElementById("photo-image");
    const title = document.getElementById("photo-title");

    if (!image || typeof photos === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const photo = photos.find(item => item.id === id);

    if (!photo) {

        image.src = "images/hero.jpg";

        title.textContent = "作品が見つかりません";

        return;

    }

    image.src = photo.image;

    image.alt = photo.title;

    title.textContent = photo.title;

    document.getElementById("photo-location").textContent = photo.location;
    document.getElementById("photo-date").textContent = photo.date;
    document.getElementById("photo-camera").textContent = photo.camera;
    document.getElementById("photo-lens").textContent = photo.lens;
    document.getElementById("photo-film").textContent = photo.film;
    document.getElementById("photo-settings").textContent = photo.settings;
    document.getElementById("photo-description").textContent = photo.description;

    const prev = document.getElementById("prev-photo");
    const next = document.getElementById("next-photo");

    if (prev) {

        if (id > 1) {

            prev.href = `photo.html?id=${id - 1}`;

            prev.style.visibility = "visible";

        } else {

            prev.style.visibility = "hidden";

        }

    }

    if (next) {

        if (id < photos.length) {

            next.href = `photo.html?id=${id + 1}`;

            next.style.visibility = "visible";

        } else {

            next.style.visibility = "hidden";

        }

    }

}

/* ==========================================
   Initialize
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    generateGallery();

    smoothScroll();

    headerScroll();

    fadeAnimation();

    heroParallax();

    activeNavigation();

    loadPhotoPage();

});