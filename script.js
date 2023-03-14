const swiper = new Swiper(".swiper", {
	// Optional parameters
	// loop: true,
	// observer: true, //auto update slider
	// observeParents: true,
	// loop: true,
	// loopAdditionalSlides: 5,
	slidesPerView: 1,
	spaceBetween: 32,
	// watchOverflow: true,
	speed: 800,
	// parallax: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});



function getRandomColor() {
	return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
};

function chageColor() {
	let block = document.querySelector('.forRandomColor');
	let color = '#' + getRandomColor().toString(16) + getRandomColor().toString(16) + getRandomColor().toString(16);
	block.style.backgroundColor = color;
	block.textContent = color;
};

const button = document.querySelector('button');
chageColor();


button.addEventListener('click', () => {
	chageColor();
});


const parent = document.querySelector('body');
let wrapper = document.createElement('div');
let loader = document.createElement('div');
let timer = document.createElement('div');
let myInterval;


wrapper.classList.add("wrapper");
loader.classList.add("loaderLine");
timer.classList.add('timer');

wrapper.append(loader);
parent.append(wrapper)
wrapper.append(timer)
console.log(timer);

loader.style.width = "0%";

let counter = 0;

myInterval = setInterval(() => {
	counter += 1;
	timer.textContent = `${counter}%`;
	counter < 89 ? loader.style.width = `${counter}%` : clearInterval(1);
}, 50);

console.log(myInterval);





