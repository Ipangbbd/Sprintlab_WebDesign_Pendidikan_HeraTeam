const logoBtn = document.getElementById('logoBtn');
const sidebarNav = document.getElementById('sidebarNav');
const closeSidebar = document.getElementById('closeSidebar');

if (logoBtn && sidebarNav && closeSidebar) {
	logoBtn.addEventListener('click', function () {
		sidebarNav.classList.add('active');
	});
	closeSidebar.addEventListener('click', function () {
		sidebarNav.classList.remove('active');
	});
	// Optional: close sidebar when clicking outside
	document.addEventListener('click', function (e) {
		if (sidebarNav.classList.contains('active')) {
			if (!sidebarNav.contains(e.target) && e.target !== logoBtn) {
				sidebarNav.classList.remove('active');
			}
		}
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

