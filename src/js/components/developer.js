export function developer() {
	let imgTl = gsap.timeline({
		defaults: { repeatDelay: 2 },
		scrollTrigger: {
			trigger: ".developer",
			start: "top+=20% bottom",
			toggleActions: "play none none reverse",
			end: "bottom bottom",
			// markers: false,
		},
		// delay: 0.5,
	});
	imgTl.to(
		".developer__img",
		{
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			duration: 2,
			xPercent: 0,
		},

		"<"
	);

	let textTl = gsap.timeline({
		defaults: { repeatDelay: 2 },
		scrollTrigger: {
			trigger: ".developer",
			start: "top+=20% bottom",
			toggleActions: "play none none reverse",
			end: "bottom bottom",
			// markers:true
		},
		// "<"
	});
	textTl.to(
		".developer__title",
		{
			opacity: 1,
			duration: 2,
		},
		"<"
	);

	textTl.to(
		".sub",
		{
			opacity: 1,
			duration: 2,
		},
		"<"
	);

	let infoTl = gsap.timeline({
		defaults: { repeatDelay: 2 },
		scrollTrigger: {
			trigger: ".developer",
			start: "top+=20% bottom",
			toggleActions: "play none none reverse",
			// end: "bottom bottom",
			// markers:true
		},
		// delay: 0.5,
	});

	let numberTl = gsap.timeline({
		defaults: { repeatDelay: 2 },
		scrollTrigger: {
			trigger: ".developer",
			start: "top+=20% bottom",
			toggleActions: "play none none reverse",
			// end: "bottom bottom",
			// markers:true
		},
	});
	numberTl.from(
		"#number-second",
		{
			innerText: 1950,
			duration: 2,
			snap: { innerText: 1 },
		},
		"<"
	);
	numberTl.from(
		"#number-first",
		{
			innerText: 1928,
			duration: 2,
			snap: { innerText: 1 },
		},
		"<"
	);
	numberTl.from(
		"#number",
		{
			innerText: 0,
			duration: 2,
			snap: { innerText: 1 },
		},
		"<"
	);
	infoTl.to(
		".developer__titles",
		{
			opacity: 1,
			duration: 2,
		},
		"<"
	);
	infoTl.to(
		".developer__info",
		{
			opacity: 1,
			duration: 2,
		},
		"<"
	);
}
