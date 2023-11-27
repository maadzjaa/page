const navButton = document.querySelector('.nav-toggle-btn');

const navList = document.querySelector('.nav-list');

navButton.addEventListener('click', () => {
	navList.classList.toggle('open');
});

const slider = document.querySelector('.reviews');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
	isDown = true;
	slider.classList.add('active');
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
	if (!isDown) return;
	console.count(isDown);
});
