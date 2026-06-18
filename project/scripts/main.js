const club = {
    name: 'Callao Chessmaster Club',
    address: 'Av. Saenz Peña 123, Callao, Peru',
    founded: 2026
};

function setFooterInfo() {
    const yearEl = document.getElementById('currentyear');
    const modifiedEl = document.getElementById('lastmodified');

    if (yearEl) {
        yearEl.textContent = `${new Date().getFullYear()}`;
    }

    if (modifiedEl) {
        modifiedEl.textContent = `Last Modified: ${document.lastModified}`;
    }
}

function setupNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav.main-nav ul');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }
}

function showStrategyTip() {
    const tips = [
        'Control the center early with pawns and pieces to maximize your options.',
        'Castle early to protect your king and connect your rooks.',
        'Don’t move the same piece twice in the opening unless necessary.',
        'Always look for your opponent’s threats before making your move.',
        'Knights on the rim are dim, keep them toward the center.'
    ];

    const tipElement = document.getElementById('strategy-tip');
    if (!tipElement) {
        return;
    }

    const shortTips = tips.filter((tip) => tip.length < 70);
    let tipPool;
    if (window.innerWidth < 700 && shortTips.length > 0) {
        tipPool = shortTips;
    } else {
        tipPool = tips;
    }

    const randomTip = tipPool[Math.floor(Math.random() * tipPool.length)];
    tipElement.textContent = `${randomTip}`;
}

function showVisitGreeting() {
    const visitCountEl = document.getElementById('visit-count');
    if (!visitCountEl) {
        return;
    }

    const storedVisits = localStorage.getItem('ccc_visit_count');
    let visitCount;
    if (storedVisits) {
        visitCount = Number(storedVisits) + 1;
    } else {
        visitCount = 1;
    }
    localStorage.setItem('ccc_visit_count', `${visitCount}`);

    if (visitCount === 1) {
        visitCountEl.textContent = `Welcome to the ${club.name}, founded in ${club.founded}!`;
    } else {
        visitCountEl.textContent = `Welcome back to the ${club.name}! This is visit number ${visitCount}.`;
    }
}

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const status = document.getElementById('form-status');

    if (!contactForm || !nameInput) {
        return;
    }

    const savedName = localStorage.getItem('ccc_name');
    if (savedName) {
        nameInput.value = savedName;
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.setItem('ccc_name', nameInput.value);
        status.textContent = `Thanks, ${nameInput.value}! Your message has been sent.`;
        contactForm.reset();
    });
}

setFooterInfo();
setupNavToggle();
showStrategyTip();
showVisitGreeting();
setupContactForm();
