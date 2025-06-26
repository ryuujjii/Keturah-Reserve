export function amenities() {
	gsap.defaults({
		duration: 1,
		ease: "power1.inOut",
	});

	const accordionItems = document.querySelectorAll(".amenities__accordion-item");

	// gsap.set('.amenities', {
	//     height: (accordionItems.length + 1) * 100 + "vh"
	// });

	// const amenities = document.querySelector('.amenities')
	// gsap.set('.amenities', {height: `${accordionItems.length}000`})

	const amenitBetween = 700;
	
	ScrollTrigger.create({
		trigger: ".amenities",
		start: "top top",
		end: `+=${(accordionItems.length) * amenitBetween} top`,
		// end: `+=${accordionItems.length}000 top`,
		// end: 'bottom top',
		pinSpacing: true,
		invalidateOnRefresh: true,
		pin: '.amenities__container',
		markers: false,
	})
	

	const accorContainer = document.querySelector(".amenities__container");

	accordionItems.forEach((item, i) => {
		const accorIcon = item.querySelector(".amenities__accordion-head svg");
		const accorBody = item.querySelector(".amenities__accordion-body");

		item.tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".amenities",
				invalidateOnRefresh: true,
				start: `+=${amenitBetween * i} 20%`,
				end: `top+=${amenitBetween * i + amenitBetween} 20%`,
				onEnter: () => {
					accrBodyFunc.play();
					accrIconFunc.play();
					accrConatainer.play();
				},
				onLeave: () => {
					accrBodyFunc.reverse();
					accrConatainer.reverse();
				},
				onEnterBack: () => {
					accrBodyFunc.play();
					accrConatainer.play();
				},
				onLeaveBack: () => {
					accrBodyFunc.reverse();
					accrConatainer.reverse();
				},
			},
		})
		
		let accrBodyFunc = item.tl.to(accorBody, { height: "auto", autoAlpha: 1, marginTop: 8, marginBottom: 20, duration: 1 });
		let accrIconFunc = item.tl.to(accorIcon, { rotate: -90 }, "<");
		let accrConatainer = item.tl.to(accorContainer, { height: 'auto' }, '<');
	});


	// Form Animation
	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".form-contact",
				start: "top 70%",
				markers: false,
			},
		})
		.from(
			".form-contact__title",
			{
				opacity: 0,
				y: 100,
				duration: 0.5,
			},
			"<"
		)
		.to(
			".form-contact__item",
			{
				xPercent: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.1,
			},
			"-=0.5"
		);
}