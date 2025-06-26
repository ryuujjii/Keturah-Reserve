export function biolife() {
	// Bio Life Section

	ScrollTrigger.create({
		trigger: ".bio",
		start: "top top",
		end: "bottom bottom",
		pin: ".bio__body",
	});

	let mm = gsap.matchMedia();
	mm.add("(min-width: 769px)", () => {
		gsap.set(".bio-info__item-img img", { scale: 1.3 });
	});

	// let bioTitle = new SplitText(".bio__title", { type: "words" });
	// let bioText = new SplitText(".bio__text", { type: "words, chars", wordsClass: 'word', charsClass: 'char'} );
	// let charsBio = bioTitle.chars;
	// wrapElements(charsBio, "span", "char-wrap");

	gsap
		.timeline({ scrollTrigger: { trigger: ".bio", start: "top center" } })
		.to(".bio__img img", { scale: 1, duration: 1 })
		.to(".bio__title", { opacity: 1, y: 0, duration: 1 }, "-=1");

	gsap.timeline({ scrollTrigger: { trigger: ".bio-info", start: "top center" } }).to(".bio-info__sub", { opacity: 1, y: 0, duration: 0.5 });

	const itemsInner = gsap.utils.toArray(".bio-info__item-img-inner");
	const items = gsap.utils.toArray(".bio-info__item");

	items.forEach((item) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 30%",
				},
			})
			.from(item.querySelector(".bio-info__item-content p"), { opacity: 0, y: 100, duration: 0.5 });

		gsap
			.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 70%",
				},
			})
			.to(item.querySelector(".bio-info__item-img"), { className: "bio-info__item-img active" });

		gsap
			.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top 60%",
					scrub: true,
				},
			})
			.to(item.querySelector(".bio-info__item-img img"), { scale: 1, ease: "Power1.easeOut", duration: 0.5 }, "-=0.5");
	});

	mm.add("(min-width: 769px)", () => {
		items.forEach((item) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top top",
					pin: item.querySelector(".bio-info__item-img-inner"),
					markers: false,
				},
			});
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".plan__inner",
					start: "top center",
					end: "bottom bottom",
				},
			})
			.to(".plan__img", { className: "plan__img active" });

		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".plan__inner",
					start: "top 74",
					end: "+=1000 74",
					pin: ".plan__wrapper",
					scrub: true,
				},
			})
			.to(".plan__content", { xPercent: -100, duration: 0.5 })
			.from(".plan__img", { xPercent: -40, yPercent: 0, duration: 0.5 }, "<50%")
			// .from(".plan__img-inner img", { y: 0, scale: 1.1 }, "<")
			// .to(".plan__img-inner img", { y: "60px" }, "<")
			.to(".plan", { autoAlpha: 0, duration: 0 })
			.to(".masterplan", { autoAlpha: 1, zIndex: 3, duration: 0 });

		// let tlPlan = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: ".plan__inner",
		// 		start: "70% 50%",
		// 		end: "70% 50%",

		// 		onEnter: () => {
		// 			// planContent.play();
		// 			// planContent2.timeScale(1).play();
		// 			// document.body.classList.add('oh');
		// 			// planImg.timeScale(1).play();
		// 			// setTimeout(() => {
		// 			// 	document.body.classList.remove('oh')
		// 			// }, 1000);
		// 		},
		// 		onEnterBack: () => {
		// 			// planContent2.timeScale(2).reverse();
		// 			// planContent.timeScale(2).reverse();
		// 			// document.body.classList.add('oh');
		// 			// setTimeout(() => {
		// 			// 	document.body.classList.remove('oh')
		// 			// }, 1000);
		// 		},
		// 	},
		// })

		// gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: '.masterplan',
		// 		start: 'top top',
		// 		end: 'bottom bottom',
		// 		scrub: 1,
		// 	}
		// })

		// 	.to(".plan__img", { x: 0, duration: 0, }).to(".masterplan", {
		// 		autoAlpha: 1,
		// 		zIndex: 3,
		// 		duration: 0
		// 	});
	});

	let toBioPageLink = document.querySelector(".plan__content-link");
	if (toBioPageLink) {
		toBioPageLink.addEventListener("click", () => {
			gsap.timeline().to(".plan__content", { xPercent: 100, opacity: 0, duration: 0.5 }).to(".plan__img", { xPercent: -100, opacity: 0, duration: 0.5 }, "<");
		});
	}

	// Other Page
	let closePage = document.querySelector(".close-page");

	// let anim = gsap.timeline({}).to(".in-bio__intro-img", { y: 0, duration: 0.5, opacity: 1 });

	if (closePage) {
		closePage.addEventListener("click", (e) => {
			anim.reverse();
		});
	}

	gsap.config({ nullTargetWarn: false });
}
