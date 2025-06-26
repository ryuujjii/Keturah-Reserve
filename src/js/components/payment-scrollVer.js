export function paymentPlan() {
	const sliderNums = document.querySelectorAll(".payment__slider-value-num");
	let arr = [+sliderNums[0].innerText];
	let arrSum;
	// const arr = [...document.querySelectorAll(".payment__slider-value-num")].map((el) => +el.innerText);
	var swiper = new Swiper(".payment__slider", {
		spaceBetween: 30,
		// centeredSlides: true,
		speed: 400,
		// mousewheel: false,
		// autoplay: {
		// 	delay: 1000,
		// 	disableOnInteraction: false,
		// },
		mousewheel: {
			enabled: false,
			forceToAxis: false,
			// sensitivity: 0.4,
			releaseOnEdges: true,
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
		grabCursor: false,
		rewind: false,
		centeredSlides: true,
		initialSlide: 1,
		followFinger: false,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
		on: {
			slideNextTransitionStart: (swiper) => {
				if (swiper.realIndex === 0) {
					arr.splice(1);
				} else if (swiper.realIndex === swiper.slides.length - 1) {
					arr = [...document.querySelectorAll(".payment__slider-value-num")].map((el) => +el.innerText);
				} else {
					arr.push(+sliderNums[swiper.realIndex].innerText);
				}
				arrSum = arr.reduce((acc, number) => acc + number);
				gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #f3f2ef 0%, #f3f2ef 0%), conic-gradient(#ada08c ${arrSum}%, #ada08c1a 0%)`, duration: 1.2 });
			},
			slidePrevTransitionStart: (swiper) => {
				if (swiper.realIndex === 0) {
					arr.splice(1);
				} else if (swiper.realIndex === swiper.slides.length - 1) {
					arr = [...document.querySelectorAll(".payment__slider-value-num")].map((el) => +el.innerText);
				} else {
					arr.pop();
				}
				arrSum = arr.reduce((acc, number) => acc + number);
				gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #f3f2ef 0%, #f3f2ef 0%), conic-gradient(#ada08c ${arrSum}%, #ada08c1a 0%)`, duration: 1.2 });
			},
			// slideChange: (swiper) => {
			// 	gsap.to(".payment__progress", { "--bg": `linear-gradient(80deg, #fff 0%, #fff 0%), conic-gradient(#ada08c ${swiper.progress * 100}%, #ada08c1a 0%)`, duration: 1.2 });
			// 	// document.querySelector(".payment__progress").style = `--bg: linear-gradient(80deg, #fff 0%, #fff 0%), conic-gradient(#3e3e3e ${swiper.progress * 100}%, #fff 0%)`;
			// },
			// slideNextTransitionEnd: (swiper) => {
			// 	if (swiper.realIndex === swiper.slides.length - 1) {
			// 		swiper.mousewheel.disable();
			// 		document.body.style.overflow = "visible";
			// 		console.log("next end");
			// 	}
			// },
			// slidePrevTransitionEnd: (swiper) => {
			// 	if (swiper.realIndex === 0) {
			// 		swiper.mousewheel.disable();
			// 		document.body.style.overflow = "visible";
			// 		console.log("prev end");
			// 	}
			// },
			slideChangeTransitionEnd: function () {
				if (this.activeIndex === 0) {
					swiperScrollOff();
					// elTl.progress == 0.2;
				} else if (this.activeIndex === this.slides.length - 1) {
					swiperScrollOff();
					// elTl.progress == 1;
				}
			},
			slideChangeTransitionStart: function () {
				if (this.activeIndex === 0) {
					swiperScrollOn();
					// elTl.progress == 0.5;
				} else if (this.activeIndex === this.slides.length - 1) {
					swiperScrollOn();
					// elTl.progress == 0.5;
				}
			},
			scroll: function () {
				// this.progress == elTl.progress;
				paymentST.scroll(paymentST.start + this.progress * (paymentST.end - paymentST.start));
				// console.log(this.progress);
			},
		},
	});

	function swiperScrollOn() {
		swiper.allowSlideNext = true;
		swiper.allowSlidePrev = true;
	}
	function swiperScrollOff() {
		swiper.allowSlideNext = false;
		swiper.allowSlidePrev = false;
		swiper.mousewheel.disable();
	}
	var paymentST = ScrollTrigger.create({
		trigger: ".payment",
		start: "top top",
		end: "bottom bottom",
		pin: ".payment__content",
		anticipatePin: 1,
		// onEnter: () => {
		// 	swiper.mousewheel.enable();
		// 	document.body.style.overflow = "hidden";
		// 	console.log("enter");
		// },
		// onEnterBack: () => {
		// 	swiper.mousewheel.enable();
		// 	document.body.style.overflow = "hidden";
		// 	console.log("enter back");
		// },
		onUpdate: (self) => {
			if (self.progress > 0.2 && self.progress < 0.5) {
				swiper.mousewheel.enable();

				swiperScrollOn();
			} else if (self.progress < 0.8 && self.progress > 0.5) {
				swiper.mousewheel.enable();

				swiperScrollOn();
			}
		},
	});
	// document.querySelector(".payment__skip-btn").addEventListener("click", () => {
	// 	swiper.slideTo(swiper.slides.length - 1);
	// 	swiper.updateProgress();
	// 	paymentST.scroll(paymentST.end);
	// 	paymentST.update();
	// 	swiperScrollOff();
	// });
	// window.addEventListener("keydown", (event) => {
	// 	if (event.key == "home" || event.key === 35 || event.key === 34) {
	// 		swiper.progress === 1;
	// 	}
	// 	if (event.key == "end" || event.key === 33 || event.key === 36) {
	// 		swiper.progress === 0;
	// 	}
	// });
}
