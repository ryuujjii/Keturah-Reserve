export function header() {

	menuToggler();

	function menuToggler() {
		ScrollTrigger.saveStyles(".header__menu-btn-toggler-line_top, .header__menu-btn-toggler-line_mid, .header__menu-btn-toggler-line_bot");
		let mm = gsap.matchMedia();
		let tlMenu = gsap.timeline({ paused: true });

		mm.add("(min-width: 768px)", () => {

			tlMenu.to(".header__menu-btn-toggler", { className: "header__menu-btn-toggler header__menu-btn-toggler_show" })
			.to(".header__body", { className: "header__body open" })
			.to(".header__menu-btn-toggler-text_closed", { yPercent: -100 }, 0)
			.to(".header__menu-btn-toggler-text_opened", { yPercent: -100 }, 0)
			.to(".header__menu-btn-toggler-line_mid", { width: 0 }, 0)
			.to(".header__menu-btn-toggler-line_top", { y: 6 }, 0)
			.to(".header__menu-btn-toggler-line_bot", { y: -6 }, 0)
			.to(".header__menu-btn-toggler-line_top", { rotate: 45 }, 0.5)
			.to(".header__menu-btn-toggler-line_bot", { rotate: -45 }, 0.5)
			.to(".header-menu", { autoAlpha: 1, duration: 0, }, 0)
			.to(".header-menu__pl", { scaleY: 1, duration: 1 }, 0.1)
			.from(".header-menu__link", { autoAlpha: 0, stagger: 0.05 }, 0.2)
			.from(".header-menu__item", { y: -30, stagger: 0.05, duration: 0.3 }, 0.2)
			.from(".header-menu__form-line", { scaleY: 0, duration: 1 }, 0.3)
			.from(".header-form__title", { autoAlpha: 0, y: -15 }, 0.3)
			.from(".header-form__desc", { autoAlpha: 0, y: -15 }, 0.4)
			.from(".header-form__form .form-floating", { autoAlpha: 0, y: -15, stagger: 0.1 }, 0.4)
			.from(".header-form__form .form-floating .line", { scaleX: 0, stagger: 0.1 }, 0.4)
			.from(".header-form__btn-wrap", { autoAlpha: 0, y: -15 }, 0.6)
			.from(".header-contacts__title", { autoAlpha: 0, y: -15 }, 0.7)
			.from(".header-contacts__list", { y: -15, stagger: 0.1 }, 0.8)
			.from(".header-contacts__item", { autoAlpha: 0, stagger: 0.1 }, 0.8)

		})

		mm.add("(max-width: 767px)", () => {

			tlMenu.to(".header__menu-btn-toggler", { className: "header__menu-btn-toggler header__menu-btn-toggler_show" })
			.to(".header__body", { className: "header__body open" })
			.to(".header__menu-btn-toggler-text_closed", { yPercent: -100 }, 0)
			.to(".header__menu-btn-toggler-text_opened", { yPercent: -100 }, 0)
			.to(".header__menu-btn-toggler-line_mid", { width: 0 }, 0)
			.to(".header__menu-btn-toggler-line_top", { y: 6 }, 0)
			.to(".header__menu-btn-toggler-line_bot", { y: -6 }, 0)
			.to(".header__menu-btn-toggler-line_top", { rotate: 45 }, 0.5)
			.to(".header__menu-btn-toggler-line_bot", { rotate: -45 }, 0.5)
			.to(".header-menu", { autoAlpha: 1, duration: 0, }, 0)
			.to(".header-menu__pl", { scaleY: 1, duration: 1 }, 0.1)
			.from(".header-menu__link", { autoAlpha: 0, stagger: 0.03 }, 0.2)
			.from(".header-menu__item", { y: -30, stagger: 0.03, duration: 0.3 }, 0.2)
			.from(".header-menu__form-line", { scaleX: 0, duration: 1 }, 0.6)
			.from(".header-form__title", { autoAlpha: 0, y: -15 }, 0.7)
			.from(".header-form__desc", { autoAlpha: 0, y: -15 }, 0.8)
			.from(".header-form__form .form-floating", { autoAlpha: 0, y: -15, stagger: 0.1 }, 0.9)
			.from(".header-form__form .form-floating .line", { scaleX: 0, stagger: 0.1 }, 0.9)
			.from(".header-form__btn-wrap", { autoAlpha: 0, y: -15 }, 1)
			.from(".header-contacts__title", { autoAlpha: 0, y: -15 }, 1.1)
			.from(".header-contacts__list", { y: -15, stagger: 0.1 }, 1.2)
			.from(".header-contacts__item", { autoAlpha: 0, stagger: 0.1 }, 1.3)

		})

		const btnToggler = document.querySelector(".header__menu-btn-toggler");
		btnToggler.addEventListener("click", toggleMenu);
		function toggleMenu() {
			tlMenu.reversed() ? tlMenu.timeScale(1).play() : tlMenu.timeScale(2).reverse();
			document.querySelector("body").classList.toggle("menu-open");
			btnToggler.classList.toggle("open");
		}

		tlMenu.reverse();

		document.querySelectorAll('.anchor-link').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				if (document.querySelector(".header__menu-btn-toggler_show")) {
					toggleMenu();
				}
			});
		});

		// setTimeout(() => {
		// const hash = window.location.hash;
		// 	if (hash) {
		// 		const targetEl = document.querySelector(`${hash}`);
		// 		console.log(targetEl)
		// 		gsap.to(window, { scrollTo: { y: targetEl, offsetY: 0, autoKill: false }, duration: 0})
		// 		// bodyScrollBar.scrollIntoView(document.querySelector(targetEl));
		// 	}
		// }, 100);

		// const anchorLinks = document.querySelectorAll("a[href^=\\#]:not([href$=\\#])");

		// anchorLinks.forEach((anchorLink) => {
		// 	let hashval = anchorLink.getAttribute("href");
		// 	let target = document.querySelector(hashval);

		// 	anchorLink.addEventListener("click", (e) => {
		// 		e.preventDefault();
		// 		e.stopPropagation();

		// 		bodyScrollBar.scrollIntoView(target, {
		// 			// onlyScrollIfNeeded: true,
		// 		});
		// 	});
		// });

		

		// setTimeout(() => {
		// 	const hash = window.location.hash;
		// 	if (hash) {
		// 		const targetEl = document.querySelector(`${hash}`);
		// 		console.log(targetEl)
		// 		// gsap.to(window, { scrollTo: { y: targetEl, offsetY: 0, autoKill: false }, duration: 0})
		// 		bodyScrollBar.scrollIntoView(targetEl);
		// 	}
		// }, 100);

		// const anchorLinks = document.querySelectorAll(".anchor-link");

		// anchorLinks.forEach((anchorLink) => {
		// 	anchorLink.addEventListener("click", (e) => {
		// 		e.preventDefault();
		
		// 		let href = anchorLink.getAttribute("href");
		// 		let hash = href.split("#")[1];
		
		// 		if (hash) {
		// 			let target = document.getElementById(hash);
		// 			if (target) {
		// 				bodyScrollBar.scrollIntoView(target);
		// 			} else {
		// 				window.location.href = href;
		// 			}
		// 		} else {
		// 			window.location.href = href;
		// 		}
		// 	});
		// });

		
		const bodyClass = document.body.classList;
		const anchorLinks = document.querySelectorAll("[data-anchor]");

		anchorLinks.forEach((anchorLink) => {
			anchorLink.addEventListener("click", (e) => {
				e.preventDefault();

				let id = anchorLink.getAttribute("data-anchor");

				localStorage.setItem("dataAnchor", id);

				if (bodyClass.contains("page-home")) {
					let target = document.getElementById(id);
					bodyScrollBar.scrollIntoView(target);
				} else {
					window.location.href = "./";
				}
			});
		});

		window.onload = function() {
			const dataAnchor = localStorage.getItem("dataAnchor");

			if (dataAnchor) {
				let target = document.getElementById(dataAnchor);
				bodyScrollBar.scrollIntoView(target);

				localStorage.removeItem("dataAnchor");
			}
		}

	}
}


export function headerToggleColor() {

	ScrollTrigger.create({
		trigger: ".main-section",
		start: "top-=1 top",
		end: "bottom top",
		scrub: true,
		onEnter: ()=> {
			document.querySelector(".header").classList.add("header_start")
		},
		onEnterBack: ()=> {
			document.querySelector(".header").classList.add("header_start")
		},
		onLeave: ()=> {
			document.querySelector(".header").classList.remove("header_start")
		},
		onLeaveBack: ()=> {
			document.querySelector(".header").classList.remove("header_start")
		}
	})

}