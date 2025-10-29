const logoBtn = document.getElementById('logoBtn');
const logoBtn2 = document.getElementById('logoBtn2')
const logoBtn3 = document.getElementById('logoBtn3')
const countryPointers = document.querySelectorAll('.globe-pointer');
const modal = document.getElementById('country-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalList = document.getElementById('modal-list');
const modalClose = document.querySelector('.modal-close');

// Navigation button logic

learnBtn = () => {
	window.location.href = 'Assets/Pages/country_menu.html';
}

learnBtn2 = () => {
	window.location.href = 'country_menu.html';
}

if (logoBtn) {
	logoBtn.addEventListener('click', function () {
		window.location.href = '../../index.html';
	});
}

if (logoBtn2) {
	logoBtn2.addEventListener('click', function () {
		window.location.href = '../../../index.html'
	});
}

if (logoBtn3) {
	logoBtn3.addEventListener('click', function () {
		window.location.href = '../../../../../../../index.html'
	});
}

// Custom cursor logic
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', function (e) {
	if (cursor) {
		cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
	}
});

// Add hover effect for interactive elements
const hoverSelectors = 'a, button, .btn-login, .btn-signin, .btn-learn, .Learn-Btn, .cta-button, .globe-pointer';
document.querySelectorAll(hoverSelectors).forEach(el => {
	el.addEventListener('mouseenter', () => {
		if (cursor) cursor.classList.add('cursor-hover');
	});
	el.addEventListener('mouseleave', () => {
		if (cursor) cursor.classList.remove('cursor-hover');
	});
});

// FAQ Accordion Logic

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
	const question = item.querySelector('.faq-question');
	question.addEventListener('click', () => {
		item.classList.toggle('active');
		faqItems.forEach(other => {
			if (other !== item) other.classList.remove('active');
		});
	});
});

// Country Modal Logic

const countryData = {
	Indonesia: {
		img: "Assets/Images/Flags/Indonesia.png",
		title: "Indonesian History Materials",
		materials: [
			"Prehistoric Era & Early Kingdoms",
			"Majapahit Empire & Classical Period",
			"Colonial Era & Independence Movement",
			"Modern Indonesia & Reformasi",
			"Culture, Traditions, and Heritage"
		],
		page: "Assets/Pages/{slugs}/Indonesia.html"
	},
	Japan: {
		img: "Assets/Images/Flags/Japan.png",
		title: "Japanese History Materials",
		materials: [
			"Jomon & Yayoi Periods",
			"Samurai & Feudal Japan",
			"Meiji Restoration & Modernization",
			"World War II & Postwar Era",
			"Culture, Technology, and Society"
		],
		page: "Assets/Pages/{slugs}/japan.html"
	},
	France: {
		img: "Assets/Images/Flags/France.png",
		title: "French History Materials",
		materials: [
			"Ancient Gaul & Roman Era",
			"Medieval France & Monarchy",
			"French Revolution & Napoleon",
			"Modern France & World Wars",
			"Art, Philosophy, and Influence"
		],
		page: "Assets/Pages/{slugs}/france.html"
	}
};

countryPointers.forEach(pointer => {
	pointer.addEventListener('click', () => {
		const country = pointer.getAttribute('data-country');
		if (countryData[country]) {
			// Set image and title
			modalImg.src = countryData[country].img;
			modalTitle.textContent = countryData[country].title;
			// Generate material links
			modalList.innerHTML = countryData[country].materials.map(
				(item, idx) =>
					`<li>
                        <a href="Assets/Pages/{slugs}/materials/countries/${country.toLowerCase()}/${country}_${idx + 1}.html"
                        style="color:inherit;text-decoration:none;display:block;padding:8px 0;">
                            ${item}
                        </a>
                    </li>`
			).join('');
			// Remove previous button if exists
			const oldBtn = document.querySelector('.modal-country-btn');
			if (oldBtn) oldBtn.remove();
			// Button to go to the country page
			modalList.insertAdjacentHTML('afterend',
				`<button class="modal-country-btn" style="margin-top:18px;padding:10px 22px;border-radius:8px;background:var(--blue);color:#fff;border:none;font-weight:500;cursor:pointer;">
                    Go to ${countryData[country].title} Page
                </button>`
			);
			modal.classList.add('active');

			// Add click event for the button
			const countryBtn = document.querySelector('.modal-country-btn');
			if (countryBtn) {
				countryBtn.onclick = () => {
					window.location.href = countryData[country].page;
				};
			}
		}
	});
});

// Modal close logic

if (modalClose) {
	modalClose.addEventListener('click', () => {
		modal.classList.remove('active');
	});
}

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.classList.remove('active');
	}
});