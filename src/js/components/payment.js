export function paymentPlan() {
	// let havePayment = false;
	// setTimeout(() => {
	// 	if (document.querySelector(".payment")) {
	// 		havePayment = true;
	// 	} else {
	// 		havePayment = false;
	// 	}
	// }, 10);
	// if (havePayment === true) {
	const sliderNums = document.querySelectorAll(".payment__slider-value-num");
	let arr = [+sliderNums[0].innerText];
	let arrSum;
	// const arr = [...document.querySelectorAll(".payment__slider-value-num")].map((el) => +el.innerText);
	// console.log(arr.reduce((acc, number) => acc + number));
	var swiper = new Swiper(".payment__slider", {
		spaceBetween: 30,
		// centeredSlides: true,
		speed: 800,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			991: {
				slidesPerView: 3,
			},
			515: {
				slidesPerView: 2,
			},
		},
		grabCursor: true,
		rewind: true,
		centeredSlides: true,
		initialSlide: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + `<span>${sliderNums[index].innerText}%</span>` + "</div>";
			},
		},
		// followFinger: false,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
		on: {
			init: (swiper) => {
				document.querySelectorAll(".payment .swiper-pagination-bullet")[0].classList.add("show");
			},
			slideNextTransitionStart: (swiper) => {
				arr = [...document.querySelectorAll(".payment__slider-value-num")].splice(0, swiper.realIndex + 1).map((el) => +el.innerText);
				arrSum = arr.reduce((acc, number) => acc + number);
				gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #f3f2ef 0%, #f3f2ef 0%), conic-gradient(#ada08c ${arrSum}%, #ada08c1a 0%)`, duration: 1.2 });
				if (document.querySelector(".payment .swiper-pagination-bullet")) {
					let bulletArr = [...document.querySelectorAll(".payment .swiper-pagination-bullet")].splice(0, swiper.realIndex + 1);
					for (let i = 0; i < bulletArr.length; i++) {
						const bullet = bulletArr[i];
						bullet.classList.add("show");
					}
				}
			},
			slidePrevTransitionStart: (swiper) => {
				arr = [...document.querySelectorAll(".payment__slider-value-num")].splice(0, swiper.realIndex + 1).map((el) => +el.innerText);

				arrSum = arr.reduce((acc, number) => acc + number);
				gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #f3f2ef 0%, #f3f2ef 0%), conic-gradient(#ada08c ${arrSum}%, #ada08c1a 0%)`, duration: 1.2 });

				if (document.querySelector(".payment .swiper-pagination-bullet")) {
					let bulletArr = document.querySelectorAll(".payment .swiper-pagination-bullet");
					for (let i = 0; i < bulletArr.length; i++) {
						const bullet = bulletArr[i];
						bullet.classList.remove("show");
					}
					bulletArr = [...document.querySelectorAll(".payment .swiper-pagination-bullet")].splice(0, swiper.realIndex + 1);
					for (let i = 0; i < bulletArr.length; i++) {
						const bullet = bulletArr[i];
						bullet.classList.add("show");
					}
				}
			},
			slideChange: (swiper) => {
				gsap.to(".swiper-pagination-line", { backgroundSize: `${swiper.progress * 100}% 100%` });
				// gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #fff 0%, #fff 0%), conic-gradient(#ada08c ${swiper.progress * 100}%, #ada08c1a 0%)`, duration: 1.2 });
				// document.querySelector(".payment__progress").style = `--bg: linear-gradient(80deg, #fff 0%, #fff 0%), conic-gradient(#3e3e3e ${swiper.progress * 100}%, #fff 0%)`;
			},
		},
	});
	swiper.autoplay.pause();

	ScrollTrigger.create({
		trigger: ".payment",
		start: "top bottom",
		onEnter: () => {
			swiper.autoplay.resume();
		},
	});
}
// }
