export function masterplan() {
	// Shahriyor's code start

	gsap.utils.toArray(".masterplan").forEach((el) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				// start: "top 74",
				start: "top top",
				end: `top+=${window.innerHeight * 6.2}px top`,
				markers: false,
				pin: true,
				invalidateOnRefresh: true,
				scrub: true,
			},
		});
		window.addEventListener("resize", () => {
			tl.scrollTrigger.refresh();
		});
	});

	mm.add("(max-width: 768px)", () => {
		let cardHeight = document.querySelector(".cards-mob").clientHeight;
		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".cards-mob__bg",
					start: "-=300 top",
					end: `-=100 top`,
					scrub: true,
					markers: false,
				},
			})
			.to(".cards-mob__bg", { autoAlpha: 0 });

		gsap.timeline({
			scrollTrigger: {
				trigger: ".cards-mob",
				start: "top top",
				end: `bottom bottom`,
				pin: ".cards-mob__items",
				markers: false,
				pinSpacing: true,
			},
		});

		let firstCard = gsap.timeline({
			scrollTrigger: {
				trigger: ".cards-mob",
				start: "top top",
				end: `+=${document.querySelector(".cards-mob__item-1").clientHeight} bottom`,
				markers: false,
				onEnter: () => {
					document.querySelector(".cards-mob__item-1").classList.add("active");
				},
				onEnterBack: () => {
					document.querySelector(".cards-mob__item-1").classList.add("active");
				},
				onLeave: () => {
					document.querySelector(".cards-mob__item-1").classList.remove("active");
				},
				onLeaveBack: () => {
					document.querySelector(".cards-mob__item-1").classList.remove("active");
				},
			},
		});

		gsap.utils.toArray(".cards-mob__item-change").forEach((el, i) => {
			i = i + 1;
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".cards-mob",
					start: `top+=${el.clientHeight * i}px top`,
					end: `top+=${el.clientHeight * (i + 1.1)}px top`,
					// scrub: true,
					markers: false,
					toggleClass: { targets: el, className: "active" },
					onEnter: () => {
						cardShow.play();
					},
					onEnterBack: () => {
						cardShow.play();
					},
					onLeave: () => {
						cardShow.reverse();
					},
					onLeaveBack: () => {
						cardShow.reverse();
					},
				},
			});

			let cardShow = tl.to(el, {
				autoAlpha: 1,
				zIndex: 2,
				duration: 0.3,
				// toggleClass: { targets: el, className: "active" },
			});
		});
	});

	// !pin version
	// 	tl.to('.masterplan__section_dark', {
	// 		opacity: 1,
	// 		duration: 0.5,
	// 		visibility: "visible"
	// 	})
	// 	tl.to('.masterplan__section_3', {
	// 		opacity: 1,
	// 		duration: 0.5,
	// 		visibility: "visible"
	// 	})
	// 	tl.to('.masterplan__section_4', {
	// 		opacity: 1,
	// 		duration: 0.5,
	// 		visibility: "visible"
	// 	})
	// 	tl.to('.masterplan__section_5', {
	// 		opacity: 1,
	// 		duration: 0.5,
	// 		visibility: "visible"
	// 	})
	// 	tl.to('.masterplan__section_6', {
	// 		opacity: 1,
	// 		duration: 0.5,
	// 		visibility: "visible"
	// 	})
	// });

	gsap.utils.toArray(".masterplan__trigger").forEach((el) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top top",
				end: "bottom bottom",
				markers: false,
				scrub: 1,
				invalidateOnRefresh: true,
			},
		});
		tl.add("start").to(
			document.querySelector(el.getAttribute("data-target")),
			{
				autoAlpha: 1,
				zIndex: 2,
				onUpdate: () => {
					if (document.querySelector(".cursor")) {
						if (el.getAttribute("data-target") === ".masterplan__section_5") {
							document.querySelector(".cursor").classList.add("cur-apartments");
							document.querySelector(".cursor").classList.remove("cur-villas");
							document.querySelector(".cursor").classList.remove("cur-townhouses");
						}
						if (el.getAttribute("data-target") === ".masterplan__section_4") {
							document.querySelector(".cursor").classList.add("cur-villas");
							document.querySelector(".cursor").classList.remove("cur-apartments");
							document.querySelector(".cursor").classList.remove("cur-townhouses");
						}
						if (el.getAttribute("data-target") === ".masterplan__section_3") {
							document.querySelector(".cursor").classList.add("cur-townhouses");
							document.querySelector(".cursor").classList.remove("cur-apartments");
							document.querySelector(".cursor").classList.remove("cur-villas");
						}
					}
				},
			},
			"start"
		);
		window.addEventListener("resize", () => {
			tl.scrollTrigger.refresh();
		});
	});
	gsap.utils.toArray("[data-target='.masterplan__section_dark']").forEach((el) => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top top",
				end: "bottom bottom",
				markers: false,
				scrub: 2,
				invalidateOnRefresh: true,
				onEnterBack: () => {
					gsap.to(".cursor", {
						opacity: 0,
					});
					gsap.to(".cursor-f", {
						opacity: 0,
					});
				},
				onEnter: () => {
					gsap.to(".cursor", {
						opacity: 1,
					});
					gsap.to(".cursor-f", {
						opacity: 1,
					});
				},
			},
		});

		window.addEventListener("resize", () => {
			tl1.scrollTrigger.refresh();
		});
	});

	// if (window.matchMedia("(max-width: 768px)").matches) {
	// 	gsap.to(".ms__inner", {
	// 		opacity: 1,
	// 		visibility: "visible",
	// 		autoAlpha: 1,
	// 		scrollTrigger: {
	// 			trigger: ".ms",
	// 			start: "top -20%",
	// 			end: "bottom-=20% 100%",
	// 			markers: false,
	// 			scrub: 1,
	// 		},
	// 	});
	// }

	// Shahriyor's code end
	// const brochureVideo = document.querySelector(".brochure__video");
	// let brochureTimeout;
	// brochureVideo.playbackRate = 1.5;

	// Jasur's code start

	const cardsSwiper1 = new Swiper(".cards__item-swiper", {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: ".cards__item-pagination",
			clickable: true,
		},
	});
	const cardsSwiper2 = new Swiper(".cards-sm__item-swiper", {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: ".cards-sm__item-pagination",
			clickable: true,
		},
	});

	if (window.matchMedia("(min-width: 1199px)").matches) {
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		const cardsVideo = document.querySelector(".cards-canvas-video");
		// if (isChrome) {
		// 	cardsVideo.src = cardsVideo.getAttribute("data-chrome-src");
		// }
		const cardsCanvasTl = gsap.timeline({
			defaults: { duration: 1 },
			scrollTrigger: {
				trigger: ".cards-canvas-wrapper",
				start: "top top",
				end: "top+=3000 top",
				markers: false,
				scrub: true,
				pin: true,
				pinSpacer: true,
				invalidateOnRefresh: true,
				onLeaveBack: () => {
					gsap.to(".cursor", {
						opacity: 1,
					});
					gsap.to(".cursor-f", {
						opacity: 1,
					});
				},
				onEnter: () => {
					gsap.to(".cursor", {
						opacity: 0,
					});
					gsap.to(".cursor-f", {
						opacity: 0,
					});
				},
			},
		});
		// window.addEventListener("resize", () => {
		// 	cardsCanvasTl.scrollTrigger.refresh();
		// });
		// window.addEventListener("resize", () => {
		// 	cardsCanvasTl.scrollTrigger.refresh();
		// });
		// let isLoaded = false;
		// cardsVideo.addEventListener("loadedmetadata", () => {
		// isLoaded = true;
		// if (isLoaded) {
		cardsCanvasTl.fromTo(
			cardsVideo,
			{
				currentTime: 0,
			},
			{
				currentTime: 7.7 || 1,
			}
		);
		// }
		// });
		// if (isChrome) {
		// 	const canvas = document.getElementById("hero-lightpass");
		// 	const context = canvas.getContext("2d");
		// 	canvas.width = 1920;
		// 	canvas.height = 1080;
		// 	const frameCount = 69;
		// 	const currentFrame = (index) => `https://d3b6muno9lbfvx.cloudfront.net/keturah/img/masterplan-canvas/10fps_${(index + 1).toString().padStart(4, "0")}.jpg`;
		// 	const images = [];
		// 	const airpods = {
		// 		frame: 0,
		// 	};
		// 	for (let i = 0; i < frameCount; i++) {
		// 		const img = new Image();
		// 		img.src = currentFrame(i);
		// 		images.push(img);
		// 	}
		// 	const cardsCanvasTl = gsap.timeline().to(airpods, {
		// 		frame: frameCount - 1,
		// 		snap: "frame",
		// 		ease: "none",
		// 		scrollTrigger: {
		// 			trigger: ".cards-canvas-wrapper",
		// 			start: "top top",
		// 			end: "top+=3000 top",
		// 			markers: false,
		// 			scrub: true,
		// 			pin: true,
		// 			pinSpacer: true,
		// 			onLeaveBack: () => {
		// 				gsap.to(".cursor", {
		// 					opacity: 1,
		// 				});
		// 				gsap.to(".cursor-f", {
		// 					opacity: 1,
		// 				});
		// 			},
		// 			onEnter: () => {
		// 				gsap.to(".cursor", {
		// 					opacity: 0,
		// 				});
		// 				gsap.to(".cursor-f", {
		// 					opacity: 0,
		// 				});
		// 			},
		// 		},
		// 		onUpdate: render,
		// 	});
		// 	function render() {
		// 		context.clearRect(0, 0, canvas.width, canvas.height);
		// 		context.drawImage(images[airpods.frame], 0, 0);
		// 	}
		// 	images[0].onload = render;

		// 	// window.addEventListener("resize", () => {
		// 	// 	cardsCanvasTl.scrollTrigger.refresh();
		// 	// });
		// } else {
		// 	const cardsVideo = document.querySelector(".cards-canvas-video");

		// 	const cardsCanvasTl = gsap.timeline({
		// 		defaults: { duration: 1 },
		// 		scrollTrigger: {
		// 			trigger: ".cards-canvas-wrapper",
		// 			start: "top top",
		// 			end: "top+=3000 top",
		// 			markers: false,
		// 			scrub: true,
		// 			pin: true,
		// 			pinSpacer: true,
		// 			invalidateOnRefresh: true,
		// 			onLeaveBack: () => {
		// 				gsap.to(".cursor", {
		// 					opacity: 1,
		// 				});
		// 				gsap.to(".cursor-f", {
		// 					opacity: 1,
		// 				});
		// 			},
		// 			onEnter: () => {
		// 				gsap.to(".cursor", {
		// 					opacity: 0,
		// 				});
		// 				gsap.to(".cursor-f", {
		// 					opacity: 0,
		// 				});
		// 			},
		// 		},
		// 	});
		// 	// window.addEventListener("resize", () => {
		// 	// 	cardsCanvasTl.scrollTrigger.refresh();
		// 	// });
		// 	// window.addEventListener("resize", () => {
		// 	// 	cardsCanvasTl.scrollTrigger.refresh();
		// 	// });

		// 	cardsVideo.addEventListener("loadedmetadata", () => {
		// 		cardsCanvasTl.fromTo(
		// 			cardsVideo,
		// 			{
		// 				currentTime: 0,
		// 			},
		// 			{
		// 				currentTime: cardsVideo.duration || 1,
		// 			}
		// 		);
		// 	});
		// }

		const cards = document.querySelector(".cards");

		gsap.to(".cards-canvas-wrapper", {
			scrollTrigger: {
				trigger: ".cards-canvas-wrapper",
				start: "top top",
				end: "top+=300 top",
				scrub: true,
				markers: false,
			},
			opacity: 1,
			pointerEvents: "all",
		});

		const cardsTl = gsap.timeline({
			scrollTrigger: {
				trigger: cards,
				start: "top top",
				end: "top+=3000 top",
				markers: false,
				scrub: true,
				pin: true,
				pinSpacer: true,
				// onLeave: () => {
				// 	document.querySelector(".brochure").classList.add("show");
				// 	document.querySelector(".brochure__content").classList.add("show");

				// 	clearTimeout(brochureTimeout);
				// 	bodyScrollBar.updatePluginOptions("modal", { open: true });
				// 	setTimeout(() => {
				// 		bodyScrollBar.updatePluginOptions("modal", { open: false });
				// 	}, 2000);
				// 	setTimeout(() => {
				// 		// bodyScrollBar.updatePluginOptions("modal", { open: false });
				// 		brochureVideo.play();
				// 		// document.body.style.cssText="overflow:auto;"
				// 		brochureTimeout = setTimeout(() => {
				// 			brochureVideo.pause();
				// 			// gsap.to("body", { overflow: "visible" });
				// 		}, 2900);
				// 	}, 1000);
				// },
				// onLeaveBack: () => {
				// 	brochureVideo.pause();
				// 	brochureVideo.currentTime = 0;
				// },
				// onEnterBack: () => {
				// 	document.querySelector(".brochure").classList.remove("show");
				// 	document.querySelector(".brochure__content").classList.remove("show");
				// 	brochureVideo.pause();
				// 	brochureVideo.currentTime = 0;
				// },
			},
		});

		cardsTl
			.add("one")
			.to(
				cards,
				{
					scrollTrigger: {
						trigger: cards,
						start: "top top",
						end: "top top",
						markers: false,
						scrub: true,
						pin: false,
						pinSpacer: false,
					},
					opacity: 1,
					pointerEvents: "all",
				},
				"one"
			)
			.add("bg")
			.to(
				".cards-bg",
				{
					opacity: 0.25,
				},
				"bg"
			)
			.add("plus")
			.to(
				".cards__item-plus svg",
				{
					scale: 1,
					opacity: 1,
				},
				"plus"
			)
			.add("hr")
			.set(
				".cards__item-plus-hr",
				{
					xPercent: -50,
				},
				"hr"
			)
			.add("hr3")
			.to(
				".cards__item-plus-hr-3",
				{
					scaleY: 1,
				},
				"hr3"
			)
			.add("inner3")
			.to(
				".inner-wrapper-3",
				{
					y: 5,
				},
				"inner3"
			)
			.add("hr2")
			.to(
				".cards__item-plus-hr-2",
				{
					scaleY: 1,
				},
				"hr2"
			)
			.add("inner2")
			.to(
				".inner-wrapper-2",
				{
					y: 5,
				},
				"inner2"
			)
			.add("hr1")
			.to(
				".cards__item-plus-hr-1",
				{
					scaleY: 1,
				},
				"hr1"
			)
			.add("inner1")
			.to(
				".inner-wrapper-1",
				{
					y: 5,
				},
				"inner1"
			)
			.add("end")
			.to(
				".cards__item",
				{
					top: 0,
					opacity: 0,
					delay: 1,
				},
				"end"
			);

		const end = gsap.timeline({
			scrollTrigger: {
				trigger: cards,
				start: "bottom-=900 top",
				end: "bottom-=900 top",
				scrub: true,
				toggleActions: "play pause reverse reset",
				markers: false,
			},
		});
	} else {
		// gsap.utils.toArray(".cards-sm").forEach((section) => {
		// 	const cards = document.querySelector(".cards-sm");
		// 	const cardsSm = gsap.timeline({
		// 		scrollTrigger: {
		// 			trigger: section,
		// 			start: "center+=1 center",
		// 			end: "+=300%",
		// 			scrub: true,
		// 			pinSpacing: true,
		// 			pin: true,
		// 			markers: false,
		// 			onEnter: () => {
		// 				gsap.set(cards, {
		// 					zIndex: 9,
		// 				});
		// 				gsap.set(cards.parentElement, {
		// 					zIndex: 10,
		// 				});
		// 			},
		// 			onLeaveBack: () => {
		// 				gsap.set(cards, {
		// 					zIndex: 0,
		// 				});
		// 				gsap.set(cards.parentElement, {
		// 					zIndex: 0,
		// 				});
		// 			},
		// 			// onLeave: () => {
		// 			// 	document.querySelector(".brochure").classList.add("show");
		// 			// 	document.querySelector(".brochure__content").classList.add("show");
		// 			// 	clearTimeout(brochureTimeout);
		// 			// 	setTimeout(() => {
		// 			// 		brochureVideo.play();
		// 			// 		brochureTimeout = setTimeout(() => {
		// 			// 			brochureVideo.pause();
		// 			// 		}, 2900);
		// 			// 	}, 1000);
		// 			// },
		// 			// onEnterBack: () => {
		// 			// 	document.querySelector(".brochure").classList.remove("show");
		// 			// 	document.querySelector(".brochure__content").classList.remove("show");
		// 			// 	brochureVideo.pause();
		// 			// 	brochureVideo.currentTime = 0;
		// 			// },
		// 		},
		// 	});
		// 	cardsSm
		// 		.add("one")
		// 		.from(
		// 			section.querySelector(".cards-sm-1 .cards-sm-bg"),
		// 			{
		// 				opacity: 0,
		// 				duration: 0.1,
		// 			},
		// 			"one"
		// 		)
		// 		.set(
		// 			section.querySelector(".cards-sm-1 .cards-sm__item-inner"),
		// 			{
		// 				zIndex: 5,
		// 			},
		// 			"one"
		// 		)
		// 		.to(
		// 			section.querySelector(".cards-sm-1 .cards-sm__item-inner"),
		// 			{
		// 				opacity: 1,
		// 				duration: 0.2,
		// 			},
		// 			"one"
		// 		)
		// 		.add("two")
		// 		.from(
		// 			section.querySelector(".cards-sm-2 .cards-sm-bg"),
		// 			{
		// 				opacity: 0,
		// 				duration: 0.2,
		// 				delay: 1,
		// 			},
		// 			"two"
		// 		)
		// 		.set(
		// 			section.querySelector(".cards-sm-2 .cards-sm__item-inner"),
		// 			{
		// 				zIndex: 5,
		// 				delay: 1,
		// 			},
		// 			"two"
		// 		)
		// 		.to(
		// 			section.querySelector(".cards-sm-2 .cards-sm__item-inner"),
		// 			{
		// 				opacity: 1,
		// 				duration: 0.2,
		// 				delay: 1,
		// 			},
		// 			"two"
		// 		)
		// 		.add("three")
		// 		.from(
		// 			section.querySelector(".cards-sm-3 .cards-sm-bg"),
		// 			{
		// 				opacity: 0,
		// 				duration: 0.5,
		// 				delay: 1,
		// 			},
		// 			"three"
		// 		)
		// 		.set(
		// 			section.querySelector(".cards-sm-3 .cards-sm__item-inner"),
		// 			{
		// 				zIndex: 5,
		// 				delay: 1,
		// 			},
		// 			"three"
		// 		)
		// 		.to(
		// 			section.querySelector(".cards-sm-3 .cards-sm__item-inner"),
		// 			{
		// 				opacity: 1,
		// 				duration: 0.5,
		// 				delay: 1,
		// 			},
		// 			"three"
		// 		)
		// 		.add("four")
		// 		.to(
		// 			section.querySelector(".cards-sm"),
		// 			{
		// 				opacity: 1,
		// 				duration: 1,
		// 			},
		// 			"four"
		// 		);
		// });
	}

	// Jasur's code end
}
