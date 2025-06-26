export function brochure() {
	let brochureTitle = document.querySelector(".brochure__title");
	const brochureVideo = document.querySelector(".brochure__video");
	const brochureForm = document.querySelector(".brochure__form");
	const brochureInputs = document.querySelectorAll(".brochure__form-input");
	let hasStarted = false;
	let mmBrochure = gsap.matchMedia();

	mmBrochure.add("(min-width: 1199px)", () => {
		brochureVideo.addEventListener("timeupdate", videoPause, true);
		function videoPause() {
			if (brochureVideo.currentTime.toFixed(1) >= 4.3) {
				brochureVideo.pause();
			}
		}
		// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		const brochureTl = gsap
			.timeline({ scrollTrigger: { trigger: ".brochure", scrub: true, start: "top top", end: "bottom bottom", pin: ".brochure__content" } })
			.to(".brochure", { className: "brochure show", duration: 0.001 })
			.to(".brochure__content", { className: "brochure__content", duration: 0.1 })
			.to(".brochure__content", {
				className: "brochure__content show",
				onStart: () => {
					if (!hasStarted) {
						// bodyScrollBar.updatePluginOptions("modal", { open: true });
						setTimeout(() => {
							// brochureVideo.playbackRate = 1;
							brochureVideo.play();
							setTimeout(() => {
								// bodyScrollBar.updatePluginOptions("modal", { open: false });
								gsap.set(".brochure__block", { transitionDelay: "0s" });
							}, 3500);
						}, 500);
						hasStarted = true;
					}
				},
			})
			.to(".brochure__content", { className: "brochure__content", duration: 0.1 })
			.from(".brochure__bg", { autoAlpha: 0, duration: 0.2 })
			.set(".brochure", { className: "brochure" });

		brochureForm.addEventListener("submit", (e) => {
			e.preventDefault();
			brochureVideo.removeEventListener("timeupdate", videoPause, true);
			bodyScrollBar.updatePluginOptions("modal", { open: true });
			brochureVideo.play();

			brochureVideo.addEventListener("ended", () => {
				gsap
					.timeline({
						onComplete: () => {
							bodyScrollBar.scrollIntoView(document.getElementById("brochure"));
							document.querySelector(".brochure").style.height = "200vh";
							ScrollTrigger.refresh();
							ScrollTrigger.update();
							bodyScrollBar.update();
							gsap.set(".brochure", { autoAlpha: 0 });
							bodyScrollBar.updatePluginOptions("modal", { open: false });
						},
					})
					.to(".brochure__thank-block", { autoAlpha: 1 })
					.to(".brochure__content", { className: "brochure__content", duration: 0.1 })
					.to(".brochure__bg", { autoAlpha: 1 })
					.to(".brochure__thank-block", { autoAlpha: 0 }, "<");
			});
		});
	});

	mmBrochure.add("(max-width: 1199px)", () => {
		const brochureTl = gsap
			.timeline({ scrollTrigger: { trigger: ".brochure", scrub: true, start: "top top", end: "bottom bottom", pin: ".brochure__content" } })
			.to(".brochure", { className: "brochure show", duration: 0.001 })
			.to(".brochure__content", { className: "brochure__content", duration: 0.1 })
			.to(".brochure__content", {
				className: "brochure__content show",
			})
			.to(".brochure__content", { className: "brochure__content", duration: 0.1 })
			.from(".brochure__bg", { autoAlpha: 0, duration: 0.2 })
			.set(".brochure", { className: "brochure" });

		brochureForm.addEventListener("submit", (e) => {
			for (let i = 0; i < brochureInputs.length; i++) {
				const el = brochureInputs[i];
				el.value = "";
			}
		});
	});

	if (window.matchMedia("(max-width: 991.98px)").matches) {
		const destination = document.querySelector(".brochure__header");
		destination.children[1].before(brochureVideo);
	}
}
