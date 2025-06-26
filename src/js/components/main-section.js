export function mainSection() {
	// const mainSection = document.querySelector(".main-section");
	const mainVideo = document.querySelector(".main-section__video video");
	const skipMain = document.querySelector(".main-scroll-down");

	// custom cursor
	// const mainSectionCursorBody = document.querySelector(".main-section__container");
	// const cursor = document.querySelector('.main-section__cursor');
	// const cursorHide = document.querySelectorAll('.cursor-hide');

	// mainSectionCursorBody.addEventListener("mouseover", () => {
	// 	cursor.classList.add("start")

	// 	cursorHide.forEach(function (el, i) {
	// 		el.addEventListener("mouseover", () => {
	// 			cursor.classList.add("hide")
	// 		})
	// 	})

	// 	cursorHide.forEach(function (el, i) {
	// 		el.addEventListener("mouseleave", () => {
	// 			cursor.classList.remove("hide")
	// 		})
	// 	})

	// 	let progress = 0;
	// 	let intervalId = null;

	// 	mainSectionCursorBody.addEventListener('mousedown', e => {
	// 		if (e.target.classList.contains('cursor-hide')) {
	// 			return;
	// 		}
	// 		progress = 0;
	// 		cursor.classList.add('active');
	// 		intervalId = setInterval(() => {
	// 			progress += 1;
	// 			if (progress >= 100) {
	// 				clearInterval(intervalId);
	// 				cursor.classList.remove('active');
	// 				cursor.classList.remove('start');
	// 				skipMain.click();
	// 			}
	// 		}, 10);
	// 	});

	// 	mainSectionCursorBody.addEventListener('mouseup', e => {
	// 		clearInterval(intervalId);
	// 		progress = 0;
	// 		cursor.classList.remove('active');
	// 	});
	// })

	// mainSectionCursorBody.addEventListener("mouseleave", () => {
	// 	cursor.classList.remove("start")
	// })

	// var x = 0;
	// var y = 0;

	// document.addEventListener('mousemove', e => {
	// 	x = e.clientX;
	// 	y = e.clientY;
	// });

	// function animate() {
	// 	var dx = x - cursor.offsetLeft;
	// 	var dy = y - cursor.offsetTop;
	// 	var dist = Math.sqrt(dx * dx + dy * dy);

	// 	var speed = 60;
	// 	if (dist < 100) {
	// 		speed = dist / 10;
	// 	}
	// 	var newX = cursor.offsetLeft + dx * speed / dist;
	// 	var newY = cursor.offsetTop + dy * speed / dist;

	// 	cursor.style.left = newX + "px";
	// 	cursor.style.top = newY + "px";

	// 	requestAnimationFrame(animate);
	// }

	// animate();



	skipMain.addEventListener("click", (e) => {
		gsap.timeline().to(".header", { yPercent: -100 }).to(".main-section", { className: "main-section main-section_video-play", duration: 0 }, "<");
		setTimeout(() => {
			mainVideo.play();
			bodyScrollBar.scrollIntoView(document.querySelector("#biolife"), { offsetTop: 1 });
		}, 2600);
		mainVideo.addEventListener(
			"ended",
			() => {
				setTimeout(() => {
					gsap.to(".main-section", { className: "main-section", duration: 0 });
					gsap.to(".header", { yPercent: 0 });
					bodyScrollBar.scrollIntoView(document.querySelector("#biolife"), { offsetTop: 0 });
					bodyScrollBar.updatePluginOptions("modal", { open: false });
					gsap.to(".bio__bg-pl", { opacity: 1, duration: 0.5 });
					document.querySelector(".bio__title").classList.add("show");
					setTimeout(() => {
						document.querySelector(".bio__text").classList.add("show");
					}, 500);
				}, 500);
			},
			false
		);
	});

	ScrollTrigger.create({
		trigger: ".bio",
		start: () => "+=" + vh / 2,
		onLeaveBack: () => {
			bodyScrollBar.updatePluginOptions("modal", { open: true });
			mainVideo.play();
			mainVideo.pause();
			mainVideo.currentTime == 0;
			gsap.to(".bio__bg-pl", { opacity: 0, duration: 0.5, delay: 0.7 });
			document.querySelector(".bio__title").classList.remove("show");
			document.querySelector(".bio__text").classList.remove("show");
			gsap.timeline().to(".general-preload", { scaleY: 1, transformOrigin: "0 100%", duration: 0.6 }).to(".general-preload", { scaleY: 0, transformOrigin: "0 0", duration: 0.6 });
			gsap.to(".main-section", { className: "main-section main-section_info-show" });
			setTimeout(() => {
				bodyScrollBar.scrollTo(0, 0, 0);
			}, 600);
		},
	});

	ScrollTrigger.create({
		trigger: ".scrollto-bio",
		start: "top-=1 top",
		onEnter: () => {
			gsap.to(".bio__bg-pl", { opacity: 1, duration: 0.5 });
			document.querySelector(".bio__title").classList.add("show");
			setTimeout(() => {
				bodyScrollBar.updatePluginOptions("modal", { open: false });
				document.querySelector(".bio__text").classList.add("show");
				const popupT = document.getElementById('popupT');
				if (!popupT.classList.contains('hard-hide')) {
						bodyScrollBar.updatePluginOptions("modal", { open: true });
						popupT.classList.add("popUp-open");
						document.documentElement.classList.add("lockPopup");
					document.querySelectorAll('.close-popupT').forEach(currentItem => {
						currentItem.addEventListener("click", function (e) {
							e.preventDefault();
							popupT.classList.remove("popUp-open");
							popupT.classList.add("hard-hide");
							document.documentElement.classList.remove("lockPopup");
							bodyScrollBar.updatePluginOptions("modal", { open: false });
						});
					});
				}
			}, 500);
		},
	});

	ScrollTrigger.create({
		trigger: ".main-section",
		start: "top top",
		end: () => "+=" + vh * 2,
		pin: ".main-section__body",
	});

	// Bio Section Text Animation
	// function bioTexts() {

	// 	gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: 'bio',
	// 			start: 'top-=10 top',
	// 		}
	// 	}).to('.bio__bg-pl', { opacity: 1, duration: 1, delay: 0.5, });

	// 	setTimeout(() => {

	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '.bio',
	// 				start: "-1 top",
	// 				end: "center top+=10%",
	// 				toggleActions: "play resume resume reset",
	// 				toggleClass: { targets: '.bio__title', className: "show" },
	// 				markers: false,
	// 			},
	// 		})

	// 		gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: '.bio',
	// 				start: "-1 top",
	// 				end: "center top+=10%",
	// 				toggleActions: "play resume resume reset",
	// 				toggleClass: { targets: '.bio__text', className: "show" },
	// 			},
	// 		})

	// 	}, 2000)
	// }

	// if (document.body.classList.contains("loaded")) {
	// 	gsap.set(".main-section", { className: "main-section main-section_info-show" });
	// }

	// mm.add("(min-width: 768px)", () => {
	// 	ScrollTrigger.create({
	// 		trigger: ".main-section",
	// 		start: "top+=1 top",
	// 		onEnter: () => {
	// 			document.body.classList.add("oh");
	// 			gsap.timeline().to(".header", { yPercent: -100 }).to(".main-section", { className: "main-section main-section_video-play", duration: 0 });
	// 			setTimeout(() => {
	// 				gsap.to(window, { duration: 1, scrollTo: { y: "#biolife", offsetY: 0, autoKill: false } });
	// 				mainVideo.play();
	// 			}, 4000);
	// 			mainVideo.addEventListener(
	// 				"ended",
	// 				() => {
	// 					gsap.to(".header", { yPercent: 0, delay: 1 });
	// 					gsap.to(".main-section", { className: "main-section", duration: 0, delay: 1 });
	// 					document.body.classList.remove("oh");
	// 				},
	// 				false
	// 			);
	// 		},
	// 		onLeaveBack: () => {
	// 			gsap.to(".main-section", { className: "main-section main-section_info-show" });
	// 			mainVideo.play();
	// 			mainVideo.pause();
	// 			mainVideo.currentTime == 0;
	// 		},
	// 	});

	// 	ScrollTrigger.create({
	// 		trigger: ".bio",
	// 		start: "top-=1 top",
	// 		onLeaveBack: () => {
	// 			gsap
	// 				.timeline({
	// 					onStart: () => {
	// 						document.body.classList.add("oh");
	// 					},
	// 					onComplete: () => {
	// 						document.body.classList.remove("oh");
	// 					},
	// 				})
	// 				.to(".general-preload", { scaleY: 1, transformOrigin: "0 100%" })
	// 				.to(".general-preload", { scaleY: 0, transformOrigin: "0 0" });
	// 			gsap.to(window, { duration: 0, delay: 0.5, scrollTo: { y: "#main", offsetY: 0, autoKill: false } });
	// 		},
	// 	});
	// });

	// mm.add("(max-width: 767px)", () => {
	// 	ScrollTrigger.create({
	// 		trigger: ".main-section",
	// 		start: "top+=1 top",
	// 		onEnter: () => {
	// 			gsap.to(".main-section", { className: "main-section main-section_show3d", duration: 0 });
	// 		},
	// 		onLeaveBack: () => {
	// 			gsap.to(".main-section", { className: "main-section main-section_info-show", duration: 0 });
	// 		},
	// 	});

	// 	ScrollTrigger.create({
	// 		trigger: ".main-section",
	// 		start: () => "+=" + vh / 2,
	// 		onEnter: () => {
	// 			document.body.classList.add("oh");
	// 			gsap.timeline().to(".header", { yPercent: -100 }).to(".main-section", { className: "main-section main-section_video-play", duration: 0 });
	// 			setTimeout(() => {
	// 				gsap.to(window, { duration: 1, scrollTo: { y: "#biolife", offsetY: 0, autoKill: false } });
	// 				mainVideo.play();
	// 			}, 2000);
	// 			mainVideo.addEventListener(
	// 				"ended",
	// 				() => {
	// 					gsap.to(".header", { yPercent: 0, delay: 1 });
	// 					gsap.to(".main-section", { className: "main-section", duration: 0, delay: 1 });
	// 					document.body.classList.remove("oh");
	// 				},
	// 				false
	// 			);
	// 		},
	// 		onLeaveBack: () => {
	// 			gsap.to(".main-section", { className: "main-section main-section_info-show" });
	// 			mainVideo.play();
	// 			mainVideo.pause();
	// 			mainVideo.currentTime == 0;
	// 		},
	// 	});

	// 	ScrollTrigger.create({
	// 		trigger: ".bio",
	// 		start: "top-=1 top",
	// 		onLeaveBack: () => {
	// 			gsap
	// 				.timeline({
	// 					onStart: () => {
	// 						document.body.classList.add("oh");
	// 					},
	// 					onComplete: () => {
	// 						document.body.classList.remove("oh");
	// 					},
	// 				})
	// 				.to(".general-preload", { scaleY: 1, transformOrigin: "0 100%" })
	// 				.to(".general-preload", { scaleY: 0, transformOrigin: "0 0" });
	// 			gsap.to(window, { duration: 0, delay: 0.5, scrollTo: { y: "#main", offsetY: 0, autoKill: false } });
	// 		},
	// 	});
	// });

	// let tlMain = gsap.timeline({ defaults: { duration: 0.4 } });
	// let tlMainMobile = gsap.timeline({ defaults: { duration: 0.4 } });

	// mm.add("(min-width: 768px)", () => {

	// 	tlMain.from(".main-section__pl", { autoAlpha: 0, duration: 1 })
	// 	tlMain.from(".main-info__value", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.4)
	// 	tlMain.from(".main-info__name", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.5)
	// 	tlMain.from(".main-section__sub-title", { autoAlpha: 0, y: 15 }, 0.8)
	// 	tlMain.from(".main-section__title", { autoAlpha: 0, y: 15 }, 0.9)
	// 	tlMain.from(".main-section__description", { autoAlpha: 0, y: 15 }, 1)
	// 	tlMain.from(".main-section__more-btn-wrap", { autoAlpha: 0, y: 15 }, 1.1)
	// 	tlMain.from(".main-section__btn-3d", { autoAlpha: 0, y: 15 }, 1.2)
	// 	tlMain.from(".btn-3d__circle_static", { strokeDashoffset: 372, strokeDasharray: 372, duration: 1.2 }, 1.3)
	// 	tlMain.from(".scroll-down", { autoAlpha: 0, y: 15 }, 1.3)

	// 	ScrollTrigger.create({
	// 		trigger: ".main-section ",
	// 		start: "top+=1 top",
	// 		onEnter: () => {
	// 			tlMain.reverse()
	// 		},
	// 		onLeaveBack: () => {
	// 			tlMain.play()
	// 		}
	// 	});

	// })

	// mm.add("(max-width: 767px)", () => {

	// 	ScrollTrigger.create({
	// 		trigger: ".main-section ",
	// 		start: "top+=1 top",
	// 		// start: () => "+=" + (vh),
	// 		// end: () => "+=" + (vh * 2),
	// 		// scrub: true,
	// 		onEnter: () => {
	// 			tlMain.reverse()
	// 			tlMainMobile.play()
	// 		},
	// 		onLeaveBack: () => {
	// 			tlMain.play()
	// 			tlMainMobile.reverse()
	// 		}
	// 	});

	// 	tlMain.from(".main-section__pl", { autoAlpha: 0, duration: 1 })
	// 	tlMain.from(".main-section__sub-title", { autoAlpha: 0, y: 15 }, 0.4)
	// 	tlMain.from(".main-section__title", { autoAlpha: 0, y: 15 }, 0.5)
	// 	tlMain.from(".main-section__description", { autoAlpha: 0, y: 15 }, 0.8)
	// 	tlMain.from(".main-info__value", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.9)
	// 	tlMain.from(".main-info__name", { autoAlpha: 0, y: 15, stagger: 0.1 }, 1)
	// 	tlMain.from(".main-section__more-btn-wrap", { autoAlpha: 0, y: 15 }, 1.1)
	// 	tlMain.from(".scroll-down", { autoAlpha: 0, y: 15 }, 1.3)

	// })
}
