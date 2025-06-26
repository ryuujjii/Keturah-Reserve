import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
// flsFunctions.scrollPlay();
// flsFunctions.easyToggleState();
// import Lenis from "@studio-freight/lenis";
// import SmoothScroll from "smoothscroll-for-websites";
import { plugins } from "./modules/plugins.js";
plugins();
import ScrollBar, { ScrollbarPlugin } from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll/index.js";

gsap.registerPlugin(ScrollTrigger, ExpoScaleEase, ScrollToPlugin);
Swiper.use([Autoplay, Pagination, Navigation]);

import { titleFx6, titleFx11, titleFx16 } from "./modules/fxTitles.js";
import { progressBar } from "./modules/progress-bar.js";
import { header, headerToggleColor } from "./components/header.js";
import { popups } from "./components/popups.js";
import { modal360 } from "./components/modal360.js";
import { loading } from "./components/loading.js";
import { mainSection } from "./components/main-section.js";
import { biolife } from "./components/biolife.js";
import { brochure } from "./components/brochure.js";
import { cursor } from "./components/cursor.js";
import { masterplan } from "./components/masterplan.js";
import { developer } from "./components/developer.js";
import { location } from "./components/location.js";
import { paymentPlan } from "./components/payment.js";
import { agency } from "./components/agency.js";
import { fly } from "./components/fly.js";
import { floorplan } from "./components/floorplan.js";
import { amenities } from "./components/amenities.js";
// import { imgSphere } from "./components/img-sphere.js";
import { bio } from "./components/bio.js";
import { gallery } from "./components/gallery.js";
import { footerTownhouse } from "./components/footer-townhouse.js";
import { footerApartments } from "./components/footer-apartments.js";
import { footerVillas } from "./components/footer-villas.js";
import { footerBio } from "./components/footer-bio.js";
import { mainModal360 } from "./components/mainModal360.js";
import { masterPlanModal360 } from "./components/masterPlanModal360.js";

// import { intro } from "./components/intro.js";

// import { landmarks } from "./components/landmarks.js";
// import { location } from "./components/location.js";

// // Lenis smooth scrolling
// let lenis;

// // Initialize Lenis smooth scrolling
// const initSmoothScrolling = () => {
// 	lenis = new Lenis({
// 		lerp: 0.2,
// 		smooth: true,
// 	});

// 	lenis.on("scroll", () => ScrollTrigger.update());

// 	const scrollFn = (time) => {
// 		lenis.raf(time);
// 		requestAnimationFrame(scrollFn);
// 	};

// 	requestAnimationFrame(scrollFn);
// };

// SmoothScroll({
// 	// Scrolling Core
// 	animationTime: 800, // [ms]
// 	stepSize: 80, // [px]

// 	// Acceleration
// 	accelerationDelta: 50, // 50
// 	accelerationMax: 3, // 3

// 	// Keyboard Settings
// 	keyboardSupport: true, // option
// 	arrowScroll: 100, // [px]

// 	// Pulse (less tweakable)
// 	// ratio of "tail" to "acceleration"
// 	pulseAlgorithm: true,
// 	pulseScale: 4,
// 	pulseNormalize: 1,

// 	// Other
// 	touchpadSupport: false, // ignore touchpad by default
// 	fixedBackground: true,
// 	excluded: "",
// });

document.querySelector(".test-wh").innerText = `${window.innerWidth}x${window.innerHeight}`;
window.addEventListener("resize", () => {
	document.querySelector(".test-wh").innerText = `${window.innerWidth}x${window.innerHeight}`;
});

window.windowWidth = window.innerWidth;
window.windowHeight = window.innerHeight;
window.mm = gsap.matchMedia();
window.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// vh
window.vh = window.innerHeight;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
	window.vh = window.innerHeight;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// videos preload
// if (document.querySelector('body').classList.contains("page-home")) {

// 	const birdieVideo = document.querySelector(".loading__video video");
// 	var birdieXhrReq = new XMLHttpRequest();
// 	birdieXhrReq.open("GET", "files/video/birdie.mp4", true);
// 	birdieXhrReq.responseType = "blob";

// 	birdieXhrReq.onload = function () {
// 		if (this.status === 200) {
// 			var vid = URL.createObjectURL(this.response);
// 			birdieVideo.src = vid;
// 		}
// 	};
// 	birdieXhrReq.send();

// }

// if (document.querySelector('body').classList.contains("townhouses-page")) {

// 	const townhousesVideoPreload = document.querySelector(".special-preload__video video");
// 	var townhousesXhrReq = new XMLHttpRequest();
// 	townhousesXhrReq.open("GET", "files/video/townhouses.mp4", true);
// 	townhousesXhrReq.responseType = "blob";

// 	townhousesXhrReq.onload = function () {
// 		if (this.status === 200) {
// 			var townhousesvid = URL.createObjectURL(this.response);
// 			townhousesVideoPreload.src = townhousesvid;
// 		}
// 	};
// 	townhousesXhrReq.send();

// }

// if (document.querySelector('body').classList.contains("villas-page")) {

// 	const villasVideo = document.querySelector(".special-preload__video video");
// 	var villasXhrReq = new XMLHttpRequest();
// 	villasXhrReq.open("GET", "files/video/villas.mp4", true);
// 	villasXhrReq.responseType = "blob";

// 	villasXhrReq.onload = function () {
// 		if (this.status === 200) {
// 			var vid = URL.createObjectURL(this.response);
// 			villasVideo.src = vid;
// 		}
// 	};
// 	villasXhrReq.send();

// }

// if (document.querySelector('body').classList.contains("apartments-page")) {

// 	const apartmentsVideo = document.querySelector(".special-preload__video video");
// 	var apartmentsXhrReq = new XMLHttpRequest();
// 	apartmentsXhrReq.open("GET", "files/video/villas.mp4", true);
// 	apartmentsXhrReq.responseType = "blob";

// 	apartmentsXhrReq.onload = function () {
// 		if (this.status === 200) {
// 			var vid = URL.createObjectURL(this.response);
// 			apartmentsVideo.src = vid;
// 		}
// 	};
// 	apartmentsXhrReq.send();

// }
Fancybox.defaults.Hash = false;
class ModalPlugin extends ScrollbarPlugin {
	static pluginName = "modal";
	static defaultOptions = {
		open: false,
	};

	transformDelta(delta) {
		return this.options.open ? { x: 0, y: 0 } : delta;
	}
}

ScrollBar.use(ModalPlugin, OverscrollPlugin);

document.addEventListener("keydown", function (event) {
	if (event.metaKey && event.shiftKey && event.keyCode === 67) {
		event.preventDefault();
		alert('Нажатие комбинации клавиш "Cmd+Shift+C" запрещено!');
	} else if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
		event.preventDefault();
		alert('Нажатие комбинации клавиш "Ctrl+Shift+C" запрещено!');
	} else if (event.keyCode === 123) {
		event.preventDefault();
		alert('Нажатие клавиши "F12" запрещено!');
	} else if (event.metaKey && event.keyCode === 67) {
		event.preventDefault();
		alert('Нажатие комбинации клавиш "Cmd+C" запрещено!');
	} else if (event.ctrlKey && event.keyCode === 67) {
		event.preventDefault();
		alert('Нажатие комбинации клавиш "Ctrl+C" запрещено!');
	}
});

document.addEventListener("DOMContentLoaded", function () {
	window.wrapElements = (elems, wrapType, wrapClass) => {
		elems.forEach((char) => {
			const wrapEl = document.createElement(wrapType);
			wrapEl.classList = wrapClass;
			char.parentNode.appendChild(wrapEl);
			wrapEl.appendChild(char);
		});
	};

	// initSmoothScrolling();
	let scroller = document.querySelector(".main-scrollbar");
	// const hash = window.location.hash;
	window.bodyScrollBar = ScrollBar.init(scroller, {
		damping: 0.1,
		delegateTo: document,
		syncCallbacks: true,
		renderByPixels: true,
		continuousScrolling: false,
		plugins: {
			overscroll: {
				enable: true,
				effect: "glow",
				damping: 0.1,
				maxOverscroll: 100,
				glowColor: "#000",
			},
			// disableScroll: {
			//   direction: 'x',
			// },
		},
	});
	ScrollTrigger.scrollerProxy(scroller, {
		scrollTop(value) {
			if (arguments.length) {
				bodyScrollBar.scrollTop = value;
			}
			return bodyScrollBar.scrollTop;
		},
	});

	// init menu scroll
	ScrollBar.init(document.querySelector(".header-menu__box"), {
		damping: 0.1,
		renderByPixels: true,
		plugins: {
			overscroll: {
				enable: true,
				effect: "glow",
				damping: 0.1,
				maxOverscroll: 100,
				glowColor: "#000",
			},
		},
	});
	const isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	window.addEventListener('global-script-loaded', (e) => {
		if (isMobile) {
			// mobile
			if (document.querySelector(".iti__flag-container")) {
				const itiContainer = document.querySelectorAll(".iti__flag-container");
				for (let i = 0; i < itiContainer.length; i++) {
					const el = itiContainer[i];
					el.addEventListener("click", () => {
						itiInit();
					});
				}
				function itiInit() {
					ScrollBar.init(document.querySelector(".iti__country-list"), {
						damping: 0.1,
						renderByPixels: true,
						plugins: {
							overscroll: {
								enable: true,
								effect: "glow",
								damping: 0.1,
								maxOverscroll: 100,
								glowColor: "#000",
							},
						},
					});
				}
			}
		}
		else {
			// desktop
			if (document.querySelector(".iti__flag-container")) {
				let flagPressed = false;
				const itiContainer = document.querySelectorAll(".iti__flag-container");

				for (let i = 0; i < itiContainer.length; i++) {
					const el = itiContainer[i];
					const itiList = el.querySelector(".iti__country-list");
					el.addEventListener("click", () => {
						itiList.style.display = "none";
						ScrollBar.init(itiList, {
							damping: 0.1,
							renderByPixels: true,
							plugins: {
								overscroll: {
									enable: true,
									effect: "glow",
									damping: 0.1,
									maxOverscroll: 100,
									glowColor: "#000",
								},
							},
						});

						flagPressed = !flagPressed;
						flagPressed ? (itiList.style.display = "block") : (itiList.style.display = "none");
					});
				}
			}
		}
	});


	// bodyScrollBar.updatePluginOptions("modal", { open: true });
	// setTimeout(() => {
	// 	bodyScrollBar.updatePluginOptions("modal", { open: false });
	// }, 12000);
	const progressScroll = document.querySelector(".progress-circle");
	const progressCircleActive = progressScroll.querySelector(".scrollbar-progress-circle-active");
	const progressCircleInactive = progressScroll.querySelector(".scrollbar-progress-circle");

	bodyScrollBar.addListener(function (status) {
		ScrollTrigger.update();
		const { offset, limit } = status;
		const progress = offset.y / limit.y;

		progressCircleActive.style.strokeDasharray = `${progress * 100}, 100`;
		progressCircleInactive.style.transform = `rotate(${360 * progress - 90}deg)`;

		if (document.querySelector(".gsap-marker-scroller-start")) {
			const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
			gsap.set(markers, { marginTop: -offset.y });
		}
	});
	// bodyScrollBar.addListener(() => {
	// 	ScrollTrigger.update();
	// 	const { offset, limit, size } = bodyScrollBar;
	// 	const progress = Math.max(0, Math.min(1, offset.y / (limit.y - size.container.height)));
	// 	// const progressBar = document.querySelector(".progress-bar");

	// 	// progressBar.style.width = `${progress * 100}%`;
	// 	// gsap.to(".progress-wrap path", {
	// 	// 	strokeDashoffset: progress * 100,
	// 	console.log(Math.floor(progress * 100));
	// 	// });
	// });
	bodyScrollBar.updatePluginOptions("modal", { open: true });
	ScrollTrigger.defaults({ scroller: scroller, pinType: "transform" });

	const pageHome = document.querySelector("body").classList.contains("page-home");
	const pageTownhouses = document.querySelector("body").classList.contains("townhouses-page");
	const pageVillas = document.querySelector("body").classList.contains("villas-page");
	const pageApartments = document.querySelector("body").classList.contains("apartments-page");
	const pageBio = document.querySelector("body").classList.contains("bio-page");

	const specialPreloadVideo = document.querySelector(".special-preload__video video");
	const specialPreloadImg = document.querySelector(".special-preload__video-pl img");
	const introBgImg = document.querySelector(".intro-section__bg-img");

	if (pageHome) {
		document.querySelector(".loading__video video").setAttribute("src", "https://d3b6muno9lbfvx.cloudfront.net/keturah/files/video/birdie.mp4");
		document.querySelector(".main-section__video video").setAttribute("src", "https://d3b6muno9lbfvx.cloudfront.net/keturah/files/video/main-section.mp4");
	}

	const amazonUrl = "https://d3b6muno9lbfvx.cloudfront.net/keturah/";

	function setUrl(setUrlVideo, setUrlImg, setIntroImg) {
		specialPreloadVideo.setAttribute("src", `${amazonUrl}${setUrlVideo}`);
		specialPreloadVideo.setAttribute("poster", `${amazonUrl}${setUrlImg}`);
		specialPreloadImg.setAttribute("src", `${amazonUrl}${setUrlImg}`);
		introBgImg.setAttribute("src", `${amazonUrl}${setIntroImg}`);
	}

	if (pageTownhouses) {
		mm.add("(min-width: 768px)", () => {
			setUrl("files/video/fly-townhouses.mp4", "img/main-bg.jpg", "img/townhouse-intro.jpg");
		});
		mm.add("(max-width: 767.98px)", () => {
			setUrl("files/video/fly-townhouses-mob.mp4", "img/townh_mob-start.jpg", "img/townh_mob-end.jpg");
		});
	}
	if (pageVillas) {
		mm.add("(min-width: 768px)", () => {
			setUrl("files/video/fly-villas.mp4", "img/main-bg.jpg", "img/villas-intro.jpg");
		});
		mm.add("(max-width: 767.98px)", () => {
			setUrl("files/video/fly-villas-mob.mp4", "img/vill_mob-start.jpg", "img/vill_mob-end.jpg");
		});
	}
	if (pageApartments) {
		mm.add("(min-width: 768px)", () => {
			setUrl("files/video/fly-apartments.mp4", "img/main-bg.jpg", "img/apartments-intro.jpg");
		});
		mm.add("(max-width: 767.98px)", () => {
			setUrl("files/video/fly-apartments-mob.mp4", "img/apart_mob-start.jpg", "img/apart_mob-end.jpg");
		});
	}

	popups();
	Splitting();

	cursor();
	modal360();

	// pageHome
	if (pageHome) {
		loading();
		headerToggleColor();
		mainSection();
		biolife();
		masterplan();
		brochure();
		location();
		paymentPlan();
		developer();
		agency();
		mainModal360();
		masterPlanModal360();
		// mm.add("(max-width: 767.98px)", () => {
		// 	// scroll mainsection
		// 	ScrollBar.init(document.querySelector(".main-section__modal_scroll"), {
		// 		damping: 0.1,
		// 		renderByPixels: true,
		// 		plugins: {
		// 			overscroll: {
		// 				enable: true,
		// 				effect: "glow",
		// 				damping: 0.11,
		// 				maxOverscroll: 100,
		// 				glowColor: "#000",
		// 			},
		// 		},
		// 	});
		// 	// scroll location list
		// });
	}
	// inner pages
	if (pageTownhouses || pageVillas || pageApartments || pageBio) {
		localStorage.setItem("fromPage", "innerPage");
	}
	if (pageTownhouses || pageVillas || pageApartments) {
		// loader
		const innerVideo = document.querySelector(".special-preload__video video");
		const innerPercent = document.querySelector(".special-preload__percent");

		innerVideo.load();

		// innerVideo.addEventListener("canplaythrough", () => {
		// 	innerVideo.pause();
		// 	innerVideo.currentTime == 0;
		// });

		// count loader
		let intervalIdCount = null;
		intervalIdCount = setInterval(updateProgressCount, 150);

		let loaderCount = 0;

		function updateProgressCount() {
			loaderCount++;
			if (loaderCount >= 100) {
				clearInterval(intervalIdCount);
			}
		}

		// video loader
		let innerIntervalId = null;
		innerIntervalId = setInterval(innerUpdateProgress, 100);

		let innerVideoProgress = 0;

		function innerUpdateProgress() {
			if (innerVideo.buffered.length > 0) {
				innerVideoProgress = Math.floor((innerVideo.buffered.end(0) / innerVideo.duration) * 100);
			}
			if (innerVideoProgress >= 100) {
				loaderCount = 100;
				clearInterval(innerIntervalId);
			}
		}

		// total progress
		let totalProgress = 0;

		let totalProgressInterval = setInterval(() => {
			totalProgress = Math.round((loaderCount + innerVideoProgress) / 2);
			innerPercent.textContent = `${totalProgress}%`;
			// console.log(`innerVideoProgress ${innerVideoProgress}`);
			// console.log(`loaderCount ${loaderCount}`);
			// console.log(`Total ${totalProgress}`);
			if (totalProgress >= 100) {
				innerVideo.pause();
				innerVideo.currentTime = 0;
				fly();
				clearInterval(totalProgressInterval);
			}
		}, 100);
	}
	// pageTownhouses
	if (pageTownhouses) {
		floorplan();
		gallery();
		amenities();
		footerTownhouse();
		const fancyBoxs = ['town-first', 'town-second'];
		fancyBoxRunner(fancyBoxs);
	}
	// pageVillas
	if (pageVillas) {
		floorplan();
		gallery();
		amenities();
		footerVillas();
		const fancyBoxs = ['villas-first', 'villas-second'];
		fancyBoxRunner(fancyBoxs);
	}
	// pageApartments
	if (pageApartments) {
		floorplan();
		gallery();
		amenities();
		footerApartments();
		const fancyBoxs = ['apar-first', 'apar-second'];
		fancyBoxRunner(fancyBoxs);
	}
	// pageBio
	if (pageBio) {
		bodyScrollBar.updatePluginOptions("modal", { open: false });
		bio();
		amenities();
		footerBio();
		const fancyBoxs = ['bio-first',
			'bio-second',
			'bio-third',
			'bio-fourth',
			'bio-fifth'];;
		fancyBoxRunner(fancyBoxs);
	}
	progressBar();
	header();
	titleFx6();
	titleFx11();
	titleFx16();

	// Animation

	// const generalTl = gsap.timeline();

	// function generalPageAnimIn(container) {
	// 	return generalTl
	// 	.to(container.querySelector(".general-preload"), { scaleY: 1, transformOrigin: "0 100%", delay: 0.6 })
	// 	.to(container.querySelector(".general-preload img"), { opacity: 1, duration: 0.3, delay: 0.8 }, "<")
	// }

	// function generalPageAnimOut(container) {
	// 	return generalTl
	// 	.from(container.querySelector(".general-preload img"), { opacity: 1, duration: 0.3, delay: 0.8 })
	// 	.from(container.querySelector(".general-preload"), { scaleY: 1, transformOrigin: "0 0", delay: 0 }, "<")
	// }

	// masterplan
	// const specialTl = gsap.timeline();

	// function specialPageAnimIn(container) {
	// 	return specialTl.to(container.querySelector(".masterplan__section_dark"), { autoAlpha: 0, duration: 1 });
	// }

	// function specialPageAnimOut(container) {
	// 	// play video take duration after video 0 opacity
	// 	// disable scroll
	// 	return specialTl.to(container.querySelector(".special-preload"), { autoAlpha: 1, duration: 0 });
	// }

	// function delay(n) {
	// 	n = n || 2000;
	// 	return new Promise((done) => {
	// 		setTimeout(() => {
	// 			done();
	// 		}, n);
	// 	});
	// }

	// barba.init({
	// 	sync: true,
	// 	transitions: [{
	// 		async leave(data) {
	// 			const done = this.async();
	// 			pageTransition();
	// 			setMenuLinks();
	// 			await delay(1500);
	// 			done();
	// 		},
	// 		async enter(data) {
	// 			contentAnimation();
	// 		},
	// 		async once(data) {
	// 			contentAnimation();
	// 		},
	// 	}]
	// })

	// barba.init({
	// 	// debug: true,
	// 	preventRunning: true,
	// 	sync: true,
	// 	views: [
	// 		{
	// 			namespace: "home",
	// 			beforeEnter() {
	// 				document.body.classList.add("page-home");
	// 				document.body.classList.remove("oh");
	// 				headerToggleColor();
	// 			},
	// 			afterLeave() {
	// 				document.body.classList.remove("page-home");
	// 				transitionState.scrollTriggerInstance.kill();
	// 			},
	// 		},
	// 	],
	// 	transitions: [
	// 		{
	// 			name: "general-transition",
	// 			async leave(data) {
	// 				const done = this.async();
	// 				// if (!data.trigger.classList.contains("special-link")) {
	// 				await generalPageAnimIn(data.current.container);
	// 				// }
	// 				// if (data.trigger.classList.contains("special-link")) {
	// 				// 	console.log('spec link 1 leave');
	// 				// 	await specialPageAnimIn(data.current.container);
	// 				// }
	// 				data.current.container.remove();
	// 				done();
	// 			},
	// 			async enter(data) {
	// 				setTimeout(() => {
	// 					if (document.querySelector(".fly")) {
	// 						fly(data.current.container);
	// 					}
	// 				}, 100);
	// 				if (data.next.namespace === "home") {
	// 					loading(data.current.container);
	// 					setTimeout(() => {
	// 						mainSection(data.current.container);
	// 					}, 600);
	// 					// modals(data.current.container);
	// 					cursor(data.current.container);
	// 					// popups(data.current.container);
	// 					biolife(data.current.container);
	// 					brochure(data.current.container);
	// 					masterplan(data.current.container);
	// 					developer(data.current.container);
	// 					location(data.current.container);
	// 					paymentPlan(data.current.container);
	// 					modal360();

	// 					agency(data.current.container);
	// 				}
	// 				if (data.next.namespace === "villas" || data.next.namespace === "townhouse" || data.next.namespace === "apartments" || data.next.namespace === "bio") {
	// 					floorplan(data.current.container);
	// 					floorplan(data.current.container);
	// 					gallery(data.current.container);
	// 					amenities(data.current.container);
	// 					bio(data.current.container);
	// 					footerTownhouse(data.current.container);
	// 					footerVillas(data.current.container);
	// 				}
	// 				// if (!data.trigger.classList.contains("special-link")) {
	// 				await generalPageAnimOut(data.next.container);
	// 				// }
	// 				// if (data.trigger.classList.contains("special-link")) {
	// 				// 	await specialPageAnimOut(data.next.container);
	// 				// 	const video = document.querySelector(".special-preload video");
	// 				// 	video.playbackRate = 2;
	// 				// 	const duration = video.duration * 1000;
	// 				// 	video.play();
	// 				// 	setTimeout(() => {
	// 				// 		gsap.to(document.querySelector(".special-preload"), { autoAlpha: 0, duration: 1 })
	// 				// 	}, duration);
	// 				// }
	// 				modal360();
	// 			},
	// 			async once(data) {
	// 				if (data.next.namespace === "home") {
	// 					loading(data.current.container);
	// 					mainSection(data.current.container);
	// 					// modals(data.current.container);
	// 					cursor(data.current.container);
	// 					// popups(data.current.container);
	// 					biolife(data.current.container);
	// 					brochure(data.current.container);
	// 					masterplan(data.current.container);
	// 					developer(data.current.container);
	// 					location(data.current.container);
	// 					paymentPlan(data.current.container);
	// 					modal360();

	// 					agency(data.current.container);
	// 				}
	// 				if (data.next.namespace === "villas" || data.next.namespace === "townhouse" || data.next.namespace === "apartments" || data.next.namespace === "bio") {
	// 					await generalPageAnimOut(data.next.container);
	// 					floorplan(data.current.container);
	// 					gallery(data.current.container);
	// 					amenities(data.current.container);
	// 					fly(data.current.container);
	// 					bio(data.current.container);
	// 					footerTownhouse(data.current.container);
	// 					footerVillas(data.current.container);
	// 				}
	// 			},
	// 		},
	// 		// {
	// 		// 	name: "inner-transition-once",
	// 		// 	to: {
	// 		// 		namespace: ["villas", "townhouse", "apartments"],
	// 		// 	},
	// 		// 	async once(data) {
	// 		// 		await generalPageAnimOut(data.next.container);
	// 		// 	},
	// 		// },
	// 	],
	// 	// transitions: [
	// 	// {
	// 	// 	name: "base",
	// 	// 	async leave(data) {
	// 	// 		// await pageAnimIn(data.current.container);
	// 	//		// data.current.container.remove();
	// 	// 		const done = this.async();
	// 	// 		if (document.querySelector(".masterplan")) {
	// 	// 			gsap.to(".masterplan__section_dark", {
	// 	// 				opacity: 0,
	// 	// 				duration: 0.3,
	// 	// 			});
	// 	// 		}
	// 	// 		done();
	// 	// 		window.scrollTo(0, 0);
	// 	// 	},
	// 	// 	async enter(data) {
	// 	// 		// await pageAnimOut(data.next.container);
	// 	// 		GSAPInit();
	// 	// 		setTimeout(() => {
	// 	// 			if (document.querySelector(".fly")) {
	// 	// 				fly();
	// 	// 			}
	// 	// 		}, 100);
	// 	// 	},
	// 	// },
	// 	// ],
	// 	// views: [
	// 	// 	{
	// 	// 		namespace: "home",
	// 	// 		afterEnter: () => {
	// 	// 			GSAPInit();
	// 	// 		},
	// 	// 	},
	// 	// ],
	// });

	// barba.hooks.enter(() => {
	// 	document.querySelector("html").style.scrollBehavior = "auto";
	// 	window.scrollTo(0, 0);
	// 	document.querySelector("html").style.scrollBehavior = "smooth";
	// });

	// // scrollTo 0 0
	// window.onbeforeunload = function () {
	// 	document.querySelector("html").style.scrollBehavior = "auto";
	// 	window.scrollTo(0, 0);
	// 	document.querySelector("html").style.scrollBehavior = "smooth";
	// };
});

// // GSAPInit
// function GSAPInit() {
// 	// ScrollTrigger.saveStyles("");
// 	// ScrollTrigger.config({ ignoreMobileResize: true });
// 	// brochureCanvas();
// 	// landmarks();
// 	// ScrollTrigger.refresh();
// 	setTimeout(() => {
// 		// if (document.getElementById("home")) {
// 		if (document.querySelector(".main-inner").getAttribute("data-barba-namespace") === "home") {
// 			console.log("home anim");
// 			// modals();
// 			cursor();
// 			Splitting();
// 			// loading();
// 			// popups();
// 			mainSection();
// 			biolife();
// 			brochure();
// 			masterplan();
// 			developer();
// 			location();
// 			paymentPlan();
// 			titleFx6();
// 			titleFx11();
// 			titleFx16();
// 			agency();
// 		} else document.querySelector(".main-inner").getAttribute("data-barba-namespace") === "townhouse";
// 		{
// 			console.log("townhouse anim");
// 			fly();
// 			footerTownhouse();
// 			floorplan();
// 			// intro();
// 		}
// 		popups();
// 	}, 100);
// }

// window.addEventListener("resize", function () {
// 	ScrollTrigger.refresh();
// });



function fancyBoxRunner(fancyBoxs) {


	const matches1 = window.matchMedia("(max-width:479.98px)").matches;
	document.head.appendChild(getCopyRightStylesForMedia());
	fancyBoxs.forEach((fancyBox) => {
		Fancybox.bind(`[data-fancybox="${fancyBox}"]`, {
			// Your custom options
			trapFocus: false,
			on: {
				ready: () => {
					const parentBlock = document.querySelector(".fancybox__thumbs");
					const newDiv = getCopyRightForMedia(false);
					parentBlock.appendChild(newDiv);
				},
			},
		});
	});

	function getCopyRightForMedia(isNewline) {
		const isRU = window.location.href.endsWith('/ru') ||
			window.location.href.includes('/ru/');
		const newDiv = document.createElement("div");
		const year = new Date().getFullYear();
		newDiv.className = "copiryit-text";
		if (!isRU) {
			newDiv.innerHTML += `© ${year} All rights reserved. ${matches1 && isNewline ? '<br/>' : ''}No commercial reuse without permission.`;
		} else {
			newDiv.classList.add('_ru');
			newDiv.innerHTML += `© ${year}. Все права защищены. ${matches1 ? '<br/>' : ''} Коммерческое использование запрещено.`;
		}
		return newDiv;
	}

	function getCopyRightStylesForMedia() {

		const style = document.createElement("style");
		style.innerText = `
		.copiryit-text{
				position: absolute;
				z-index:100;
				top: -20px;
				left: 50%;
				transform: translateX(-50%);
				max-width: 500px;
				width: 100%;
				color: #FFF;
				text-align: center;
				font-family: Montserrat;
				font-size: ${!matches1 ? 12 : 10}px;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
				pointer-events: none;
				transition: top 0.3s ease;
			}
			.copiryit-text._ru{
				top: -17px;
			}
			@media (max-width: 479.98px){
				.copiryit-text._ru{
					top: -30px;
				}
			}
				`;
		return style;
	}
}

function getFancyBoxs() {
	const fancy = document.querySelectorAll('[data-fancybox]');
	fancy.forEach(el => console.log(el.getAttribute('data-fancybox')));
}
