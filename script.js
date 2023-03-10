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