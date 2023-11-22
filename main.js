const navButton = document.querySelector('.nav-toggle-btn');

const navList = document.querySelector('.nav-list');

navButton.addEventListener('click', () => {
	navList.classList.toggle('open');
});

console.log(navList);
