// Get current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get last modified date
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
