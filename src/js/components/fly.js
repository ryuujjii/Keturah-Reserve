export function fly() {

	setTimeout(()=> {

		function intro() {
			let tlIntro = gsap.timeline({ paused: true });

			tlIntro.to(".intro-section__inner", { autoAlpha: 1, duration: 0.6 });
			tlIntro.from(".intro-section__pl", { autoAlpha: 0 });
			tlIntro.from(".intro-info__value", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.4);
			tlIntro.from(".intro-info__name", { autoAlpha: 0, y: 15, stagger: 0.1 }, 0.5);
			tlIntro.from(".intro-section__sub-title", { autoAlpha: 0, y: 15 }, 0.8);
			tlIntro.from(".intro-section__title", { autoAlpha: 0, y: 15 }, 0.9);
			tlIntro.from(".intro-section__more-btn-wrap", { autoAlpha: 0, y: 15 }, 1.1);
			tlIntro.from(".intro .scroll-down", { autoAlpha: 0, y: 15 }, 1.3);
			gsap.to(".intro-section", { className: "intro-section intro-section-show" });

			tlIntro.play();

			ScrollTrigger.create({
				trigger: ".intro-section",
				start: "top+=1 top",
				onEnter: () => {
					tlIntro.reverse();
				},
				onLeaveBack: () => {
					tlIntro.play();
					gsap.set(".intro-section", { className: "intro-section intro-section-show" });
				},
			});

		}

		gsap.to(".special-preload__video-pl", { autoAlpha: 0 });
		gsap.to(".special-preload__preload", { autoAlpha: 0 });
		document.querySelector(".special-preload__video-skip").classList.add("show");

		setTimeout(() => {

			document.querySelector(".special-preload__video video").play();

			document.querySelector(".special-video-skip-btn").addEventListener("click", ()=> {
				document.querySelector(".special-preload__video video").currentTime = document.querySelector(".special-preload__video video").duration;
			})

			document.querySelector(".special-preload__video video").addEventListener("ended", () => {
				document.querySelector(".special-preload__video-skip").classList.remove("show")
				gsap.to(".special-preload", { autoAlpha: 0, duration: 0 })
				intro();
				setTimeout(()=> {
					bodyScrollBar.updatePluginOptions("modal", { open: false });
				}, 1000)
			});
		}, 1000);
		
	}, 1000)
}