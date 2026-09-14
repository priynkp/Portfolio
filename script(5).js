// ==========================================
// PRIYANSHU // DEV
// CYBERPUNK PORTFOLIO — SCRIPT
// ==========================================


// ------------------------------------------
// CONNECT WITH ME MODAL
// ------------------------------------------

const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeContact");
const openButtons = document.querySelectorAll("[data-open-contact]");

function openModal() {
    if (!modal) return;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Automatically focus the first field
    setTimeout(() => {
        const nameInput = document.getElementById("name");

        if (nameInput) {
            nameInput.focus();
        }
    }, 350);
}


function closeModal() {
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    // Restore scrolling
    document.body.style.overflow = "";
}


// Open contact window
openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
});


// Close button
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}


// Close when clicking outside the window
if (modal) {
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closeModal();
        }

    });
}


// Close with ESC key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("open")
    ) {
        closeModal();
    }

});


// ------------------------------------------
// CONTACT FORM
// ------------------------------------------

const form = document.getElementById("contactForm");
const successState = document.getElementById("successState");
const resetFormButton = document.getElementById("resetForm");


// ------------------------------------------
// GMAIL CONTACT FORM
// ------------------------------------------

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document
            .getElementById("name")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const subject = document
            .getElementById("subject")
            .value
            .trim();

        const message = document
            .getElementById("message")
            .value
            .trim();


        // Check all fields
        if (!name || !email || !subject || !message) {

            alert("Please complete all communication fields.");

            return;
        }


        // ------------------------------------------
        // PREPARE GMAIL MESSAGE
        // ------------------------------------------

        const emailBody =
`Hello Priyanshu,

${message}

------------------------------
Sender Information
------------------------------

Name: ${name}
Email: ${email}
`;


        // Gmail Compose URL
        const gmailURL =
            "https://mail.google.com/mail/?" +
            "view=cm" +
            "&fs=1" +
            "&to=" + encodeURIComponent("priyankp2504@gmail.com") +
            "&su=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(emailBody);


        // Open Gmail in a new browser tab
        window.open(
            gmailURL,
            "_blank",
            "noopener,noreferrer"
        );


        // ------------------------------------------
        // SHOW SUCCESS INTERFACE
        // ------------------------------------------

        form.style.display = "none";

        if (successState) {

            successState.classList.add("show");

        }

    });

}


// ------------------------------------------
// RESET CONTACT FORM
// ------------------------------------------

if (resetFormButton) {

    resetFormButton.addEventListener("click", function () {

        form.reset();

        form.style.display = "grid";

        successState.classList.remove("show");

        const nameInput = document.getElementById("name");

        if (nameInput) {
            nameInput.focus();
        }

    });

}


// ------------------------------------------
// MOBILE NAVIGATION
// ------------------------------------------

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });


    // Close mobile menu after clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });

}


// ------------------------------------------
// SCROLL REVEAL ANIMATIONS
// ------------------------------------------

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// ------------------------------------------
// CYBERPUNK CURSOR GLOW
// ------------------------------------------

const cursorGlow = document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener("pointermove", function (event) {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


// ------------------------------------------
// PROJECT / SKILL CARD 3D HOVER
// ------------------------------------------

const interactiveCards = document.querySelectorAll(
    ".project-card, .skill-group, .stat-card, .cert-card"
);


interactiveCards.forEach((card) => {

    card.addEventListener("pointermove", function (event) {

        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        const rotateX = y * -2;
        const rotateY = x * 2;


        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-2px)`;

    });


    card.addEventListener("pointerleave", function () {

        card.style.transform = "";

    });

});


// ------------------------------------------
// TERMINAL TYPING EFFECT
// ------------------------------------------

const terminalLines = [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Analytics Engineer",
    "Cybersecurity Enthusiast"
];


let terminalIndex = 0;
let characterIndex = 0;
let deleting = false;


const terminalTarget =
    document.querySelector(".terminal-body p:last-child");


function terminalTypingEffect() {

    if (!terminalTarget) return;


    const currentText =
        terminalLines[terminalIndex];


    if (!deleting) {

        characterIndex++;

        terminalTarget.innerHTML =
            currentText.substring(0, characterIndex) +
            '<span class="caret"></span>';


        if (characterIndex >= currentText.length) {

            deleting = true;

            setTimeout(
                terminalTypingEffect,
                1800
            );

            return;
        }

    } else {

        characterIndex--;

        terminalTarget.innerHTML =
            currentText.substring(0, characterIndex) +
            '<span class="caret"></span>';


        if (characterIndex <= 0) {

            deleting = false;

            terminalIndex =
                (terminalIndex + 1) %
                terminalLines.length;

        }

    }


    const speed =
        deleting ? 45 : 80;


    setTimeout(
        terminalTypingEffect,
        speed
    );

}


// Start terminal animation
setTimeout(
    terminalTypingEffect,
    1000
);


// ------------------------------------------
// SMOOTH NAVIGATION
// ------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


// ------------------------------------------
// CONTACT CARD MICRO-INTERACTION
// ------------------------------------------

document.querySelectorAll(".contact-card").forEach((card) => {

    card.addEventListener("mouseenter", function () {

        this.style.setProperty(
            "--hover-progress",
            "1"
        );

    });


    card.addEventListener("mouseleave", function () {

        this.style.setProperty(
            "--hover-progress",
            "0"
        );

    });

});


// ------------------------------------------
// PAGE LOAD SYSTEM INITIALIZATION
// ------------------------------------------

window.addEventListener("load", function () {

    document.body.classList.add("system-ready");

    console.log(
        "%c PRIYANSHU // DEV ",
        "background:#9b5cff;color:white;font-weight:bold;padding:8px;"
    );

    console.log(
        "%c SYSTEM STATUS: ONLINE ",
        "color:#42e8ff;font-weight:bold;"
    );

    console.log(
        "%c Full-Stack & AI Developer ",
        "color:#c59cff;"
    );

});