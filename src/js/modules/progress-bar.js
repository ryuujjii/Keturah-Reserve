export function progressBar() {
	// circular progress drawing
	// gsap.to(".progress-wrap path", {
	// 	strokeDashoffset: "0",
	// 	scrollTrigger: {
	// 		trigger: "body",
	// 		start: "top top",
	// 		end: "bottom+=5% bottom",
	// 		ease: "none",
	// 		scrub: true,
	// 	},
	// });
	// show/hide
	gsap.fromTo(
		".progress-wrap",
		{
			yPercent: 100,
			autoAlpha: 0,
		},
		{
			yPercent: 0,
			autoAlpha: 1,
			scrollTrigger: {
				start: 5,
				toggleActions: "play none none reverse",
			},
		}
	);

	// on click, scroll back to top
	document.querySelector(".progress-wrap").addEventListener("click", (e) => {
		bodyScrollBar.scrollTo(0, 0, 0);
	});
}
