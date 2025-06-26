export function titleFx1() {
	const fx1Titles = [...document.querySelectorAll("[data-splitting][data-effect1]")];
	fx1Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, {
			"will-change": "opacity, transform",
			opacity: 0,
			scale: 0.6,
			rotationZ: () => gsap.utils.random(-20, 20),
		});
		gsap.to(chars, {
			ease: "power4",
			opacity: 1,
			scale: 1,
			rotation: 0,
			stagger: 0.4,
			scrollTrigger: {
				trigger: title,
				start: "center+=20% bottom",
				end: "+=50%",
				scrub: true,
			},
		});
	});
}
export function titleFx2() {
	const fx2Titles = [...document.querySelectorAll("[data-splitting][data-effect2]")];

	fx2Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, { "will-change": "opacity, transform", opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: "50% 0%" });
		gsap.to(chars, {
			duration: 1,
			ease: "back.inOut(2)",

			opacity: 1,
			yPercent: 0,
			scaleY: 1,
			scaleX: 1,
			stagger: 0.03,
			scrollTrigger: {
				trigger: title,
				start: "center bottom+=50%",
				end: "bottom top+=40%",
				scrub: true,
				//start: 'center center',
				//end: '+=100%',
				//pin: title.parentNode,
			},
		});
	});
}
export function titleFx3() {
	const fx3Titles = [...document.querySelectorAll("[data-splitting][data-effect3]")];

	fx3Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, {
			"will-change": "transform",
			transformOrigin: "50% 0%",
			scaleY: 0,
		});
		gsap.to(chars, {
			ease: "back",
			opacity: 1,
			scaleY: 1,
			yPercent: 0,
			stagger: 0.03,
			scrollTrigger: {
				trigger: title,
				start: "center bottom-=5%",
				end: "top top-=20%",
				scrub: true,
			},
		});
	});
}
export function titleFx4() {
	const fx4Titles = [...document.querySelectorAll("[data-splitting][data-effect4]")];

	fx4Titles.forEach((title) => {
		const words = title.querySelectorAll(".word");
		words.forEach((word) => {
			const chars = word.querySelectorAll(".char");

			gsap.set(chars, {
				"will-change": "opacity, transform",
				x: (position, _, arr) => 150 * (position - arr.length / 2),
			});
			gsap.to(chars, {
				ease: "power1.inOut",
				x: 0,
				stagger: {
					grid: "auto",
					from: "center",
				},
				scrollTrigger: {
					trigger: word,
					start: "center bottom+=30%",
					end: "top top+=15%",
					scrub: true,
				},
			});
		});
	});
}
export function titleFx5() {
	const fx5Titles = [...document.querySelectorAll("[data-splitting][data-effect5]")];

	fx5Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, {
			"will-change": "opacity, transform",
			opacity: 0,
			xPercent: () => gsap.utils.random(-200, 200),
			yPercent: () => gsap.utils.random(-150, 150),
		});
		gsap.to(chars, {
			ease: "power1.inOut",
			opacity: 1,
			xPercent: 0,
			yPercent: 0,
			stagger: { each: 0.05, grid: "auto", from: "random" },
			scrollTrigger: {
				trigger: title,
				start: "center bottom+=10%",
				end: "bottom center",
				scrub: 0.9,
			},
		});
	});
}
export function titleFx6() {
	const fx6Titles = [...document.querySelectorAll("[data-splitting][data-effect6]")];

	fx6Titles.forEach((title) => {
		const words = title.querySelectorAll(".word");
		words.forEach((word) => {
			const chars = word.querySelectorAll(".char");

			gsap.set(chars[0].parentNode, { perspective: 1000 });
			gsap.set(chars, {
				"will-change": "opacity, transform",
				opacity: 0,
				rotationX: -90,
				yPercent: 50,
			});
			gsap.to(chars, {
				ease: "power1.inOut",
				opacity: 1,
				rotationX: 0,
				yPercent: 0,
				stagger: {
					each: 0.03,
					from: 0,
				},
				scrollTrigger: {
					trigger: word,
					start: "center bottom+=40%",
					end: "bottom center-=30%",
					scrub: 0.9,
				},
			});
		});
	});
}
export function titleFx7() {
	const fx7Titles = [...document.querySelectorAll("[data-splitting][data-effect7]")];

	fx7Titles.forEach((title) => {
		const words = title.querySelectorAll(".word");
		words.forEach((word) => {
			const chars = word.querySelectorAll(".char");

			gsap.set(chars[0].parentNode, { perspective: 1000 });
			gsap.set(chars, {
				"will-change": "opacity, transform",
				transformOrigin: "100% 50%",
				opacity: 0,
				rotationY: -90,
				z: -300,
			});
			gsap.to(chars, {
				ease: "expo",
				opacity: 1,
				rotationY: 0,
				z: 0,
				stagger: { each: 0.06, from: "end" },
				scrollTrigger: {
					trigger: word,
					start: "bottom bottom+=20%",
					end: "bottom top",
					scrub: 1,
				},
			});
		});
	});
}
export function titleFx8() {
	const fx8Titles = [...document.querySelectorAll("[data-splitting][data-effect8]")];

	const lettersAndSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "/", "\\", "|", "[", "]", "{", "}", ";", ":", "'", '"', "<", ">", ","];
	fx8Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, {
			opacity: 0,
		});
		chars.forEach((char, position) => {
			let initialHTML = char.innerHTML;

			gsap.to(char, {
				duration: 0.03,
				innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
				repeat: 1,
				repeatRefresh: true,
				opacity: 1,
				repeatDelay: 0.03,
				delay: (position + 1) * 0.18,
				onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
				scrollTrigger: {
					trigger: title,
					start: "top bottom",
					end: "bottom center",
					toggleActions: "play resume resume reset",
					onEnter: () => gsap.set(char, { opacity: 0 }),
				},
			});
		});
	});
}
export function titleFx9() {
	const fx9Titles = [...document.querySelectorAll("[data-splitting][data-effect9]")];

	fx9Titles.forEach((title) => {
		const words = title.querySelectorAll(".word");
		words.forEach((word) => {
			const chars = word.querySelectorAll(".char");

			gsap.set(chars, {
				"will-change": "transform",
				scaleX: 0,
				x: (_, target) => window.innerWidth / 2 - target.offsetLeft - target.offsetWidth / 2,
			});
			gsap.to(chars, {
				ease: "power1.inOut",
				scaleX: 1,
				x: 0,
				scrollTrigger: {
					trigger: word,
					start: "top bottom",
					end: "top top",
					scrub: true,
				},
			});
		});
	});
}
export function titleFx10() {
	const fx10Titles = [...document.querySelectorAll("[data-splitting][data-effect10]")];

	fx10Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");

		gsap.set(chars, {
			"will-change": "opacity",
			opacity: 0,
			filter: "blur(20px)",
		});
		gsap.to(chars, {
			duration: 0.25,
			ease: "power1.inOut",
			opacity: 1,
			filter: "blur(0px)",
			stagger: { each: 0.05, from: "random" },
			scrollTrigger: {
				trigger: title,
				start: "top bottom",
				end: "center center",
				toggleActions: "play resume resume reset",
			},
		});
	});
}
export function titleFx11() {
	const fx11Titles = [...document.querySelectorAll("[data-splitting][data-effect11]")];

	fx11Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		wrapElements(chars, "span", "char-wrap");

		gsap.set(chars, {
			"will-change": "transform",
			transformOrigin: "0% 50%",
			xPercent: 105,
		});
		gsap.to(chars, {
			duration: 1,
			ease: "expo",
			xPercent: 0,
			stagger: 0.042,
			scrollTrigger: {
				trigger: title,
				start: "top bottom",
				end: "top top+=10%",
				toggleActions: "play resume resume reset",
			},
		});
	});
}
export function titleFx12() {
	const fx12Titles = [...document.querySelectorAll("[data-splitting][data-effect12]")];

	fx12Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		wrapElements(chars, "span", "char-wrap");

		gsap.set(chars, {
			"will-change": "transform",
			xPercent: -250,
			rotationZ: 45,
			scaleX: 6,
			transformOrigin: "100% 50%",
		});
		gsap.to(chars, {
			duration: 1,
			ease: "power2",
			xPercent: 0,
			rotationZ: 0,
			scaleX: 1,
			stagger: -0.06,
			scrollTrigger: {
				trigger: title,
				start: "top bottom+=10%",
				end: "bottom top+=10%",
				scrub: true,
			},
		});
	});
}
export function titleFx13() {
	const fx13Titles = [...document.querySelectorAll("[data-splitting][data-effect13]")];

	fx13Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		gsap.set(chars[0].parentNode, { perspective: 1000 });
		gsap.set(chars, {
			"will-change": "opacity, transform",
			opacity: 0,
			rotationY: 180,
			xPercent: -40,
			yPercent: 100,
		});
		gsap.to(chars, {
			ease: "power4.inOut()",
			opacity: 1,
			rotationY: 0,
			xPercent: 0,
			yPercent: 0,
			stagger: {
				each: -0.03,
				from: 0,
			},
			scrollTrigger: {
				trigger: title,
				start: "center bottom",
				end: "bottom center-=30%",
				scrub: 0.9,
			},
		});
	});
}
export function titleFx14() {
	const fx14Titles = [...document.querySelectorAll("[data-splitting][data-effect14]")];

	fx14Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		gsap.set(title, {
			"will-change": "transform",
			xPercent: 100,
		});
		gsap.set(chars, {
			"will-change": "transform",
			scale: 3,
			yPercent: -900,
		});
		gsap.to(chars, {
			ease: "back(2)",
			scale: 1,
			yPercent: 0,
			stagger: 0.05,
			scrollTrigger: {
				trigger: title,
				start: "center center",
				end: "+=100%",
				scrub: 1.9,
			},
		});
		gsap.to(title, {
			ease: "none",
			xPercent: 0,
			scrollTrigger: {
				trigger: title,
				scrub: true,
				start: "center center",
				end: "+=100%",
				pin: title.parentNode,
			},
		});
	});
}
export function titleFx15() {
	const fx15Titles = [...document.querySelectorAll("[data-splitting][data-effect15]")];

	fx15Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		gsap.set(chars[0].parentNode, { perspective: 1000 });
		gsap.set(title, {
			"will-change": "transform",
			xPercent: -80,
		});
		gsap.set(chars, {
			"will-change": "opacity, transform",
			transformOrigin: "50% 50% -200px",
			rotationX: 380,
			opacity: 0,
		});
		gsap.to(chars, {
			ease: "expo.inOut",
			rotationX: 0,
			z: 0,
			opacity: 1,
			stagger: -0.03,
			scrollTrigger: {
				trigger: title,
				start: "center center",
				end: "+=140%",
				scrub: 1.2,
			},
		});
		gsap.to(title, {
			ease: "none",
			xPercent: 0,
			scrollTrigger: {
				trigger: title,
				scrub: true,
				start: "center center",
				end: "+=100%",
				pin: title.parentNode,
			},
		});
	});
}
// custom from Islom
export function titleFx16() {
	const fx16Titles = [...document.querySelectorAll("[data-splitting][data-effect16]")];

	fx16Titles.forEach((title) => {
		const chars = title.querySelectorAll(".char");
		gsap.set(chars[0].parentNode, { perspective: 400 });
		gsap.set(title, { "will-change": "transform" });
		gsap.timeline({ scrollTrigger: { trigger: title, start: "top bottom", end: "top top+=10%", toggleActions: "play resume resume reset" } }).from(chars, { duration: 0.8, opacity: 0, yPercent: 30, ease: "back", stagger: 0.01 });
	});
}
//==========//
