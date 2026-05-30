const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Lima Los Olivos Perú",
		location: "Lima, Perú",
		dedicated: "2015, June, 14",
		area: 27034,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
	},
	{
		templeName: "Caracas Venezuela",
		location: "Caracas, Venezuela",
		dedicated: "1999, August, 20",
		area: 10360,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
	},
]


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

const templesContainer = document.getElementById("temples-container");

function displayTemples(templeList) {
	templesContainer.innerHTML = "";
	templeList.forEach(temple => {
		const card = document.createElement("article");
		const name = document.createElement("h3");
		const location = document.createElement("p");
		const dedicated = document.createElement("p");
		const area = document.createElement("p");
		const image = document.createElement("img");

		name.textContent = `${temple.templeName}`;
		location.textContent = `Location: ${temple.location}`;
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
		area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
		image.src = temple.imageUrl;
		image.alt = `${temple.templeName} Temple`;
		image.loading = "lazy";
		image.width = 400;
		image.height = 250;

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

		templesContainer.appendChild(card);
	});
}

// Initial display of all temples
displayTemples(temples);

// Filter functionality
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		
		// Manage active state class
		navLinks.forEach(item => item.classList.remove("active"));
		link.classList.add("active");

		// Close mobile navigation menu if open
		navigation.classList.remove("open");
		hamButton.classList.remove("open");

		// Filter criteria
		const filter = link.textContent.trim().toLowerCase();
		let filteredTemples = [];

		if (filter === "old") {
			filteredTemples = temples.filter(temple => {
				const year = parseInt(temple.dedicated.split(",")[0]);
				return year < 1900;
			});
		} else if (filter === "new") {
			filteredTemples = temples.filter(temple => {
				const year = parseInt(temple.dedicated.split(",")[0]);
				return year > 2000;
			});
		} else if (filter === "large") {
			filteredTemples = temples.filter(temple => temple.area > 90000);
		} else if (filter === "small") {
			filteredTemples = temples.filter(temple => temple.area < 10000);
		} else { // "home" or fallback
			filteredTemples = temples;
		}

		displayTemples(filteredTemples);
	});
});