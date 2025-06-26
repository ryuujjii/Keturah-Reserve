export function loading() {
	const birdieVideo = document.querySelector(".loading__video video");
	const loader = document.querySelector(".loading__logo_loading");
	const loaderPercent = document.querySelector(".loading__percent");

	birdieVideo.load();

	// coaderCount

	let intervalIdCount = null;
	intervalIdCount = setInterval(updateProgressCount, 200);

	let loaderCount = 0;

	function updateProgressCount() {
		loaderCount++;
		if (loaderCount >= 100) {
			clearInterval(intervalIdCount);
		}
	}

	// video preload

	let intervalId = null;
	intervalId = setInterval(updateProgressVideo, 100);

	let loaderVideoProgress = 0;

	function updateProgressVideo() {
		if (birdieVideo.buffered.length > 0) {
			loaderVideoProgress = Math.floor((birdieVideo.buffered.end(0) / birdieVideo.duration) * 100);
		}
		// console.log(loaderVideoProgress)
		if (loaderVideoProgress >= 99) {
			loaderCount = 100;
			clearInterval(intervalId);
		}
	}

	function projectsVideoSRC() {
		const lazyVideos = document.querySelectorAll("video.lazy");
		for (let i = 0; i < lazyVideos.length; i++) {
			const el = lazyVideos[i];
			const dataSrc = window.matchMedia("(max-width: 767.99px)").matches ? "data-src-mob" : "data-src";
			const videoSource = el.getAttribute(dataSrc);
			if (videoSource) {
				el.src = videoSource;
				el.removeAttribute(dataSrc);
			}
			el.load();
			el.play();
			el.pause();
			el.currentTime = 0;
		}
	}

	// total progress

	let totalProgress = 0;

	let totalProgressInterval = setInterval(() => {
		totalProgress = Math.round((loaderCount + loaderVideoProgress) / 2);
		loader.setAttribute("style", `width: ${totalProgress}%`);
		loaderPercent.textContent = `${totalProgress}%`;
		// console.log(`loaderVideoProgress ${loaderVideoProgress}`);
		// console.log(`loaderCount ${loaderCount}`);
		// console.log(`Total ${totalProgress}`);
		if (totalProgress >= 100) {
			const fromPage = localStorage.getItem("fromPage");

			if (fromPage === "innerPage") {
				setTimeout(() => {
					gsap.to(".loading", { yPercent: -100, duration: 1 });
					gsap.set(".main-section", { className: "main-section main-section_info-show" });

				}, 1000);
				clearInterval(totalProgressInterval);
				localStorage.removeItem("fromPage");
				projectsVideoSRC();
				// document.querySelector(".cards-canvas-video").load();
				// document.querySelector(".main-section__video video").load();
			} else {
				birdieVideo.pause();
				birdieVideo.currentTime = 0;

				setTimeout(() => {
					gsap.to(".loading__pl", { autoAlpha: 0, duration: 1.2 });
					setTimeout(() => {
						birdieVideo.play();
					}, 1000);

					birdieVideo.addEventListener(
						"ended",
						() => {
							gsap.to(".loading", { autoAlpha: 0 });
							gsap.set(".main-section", { className: "main-section main-section_info-show" });
							frozenPopup();
						},
						false
					);
				}, 1000);
				clearInterval(totalProgressInterval);
				projectsVideoSRC();
				// if (!isChrome) {
				// 	document.querySelector(".cards-canvas-video").load();
				// }
				// document.querySelector(".main-section__video video").load();
			}
		}
	}, 100);
}


function frozenPopup() {
	const popupT = document.getElementById('popupT');
	let frozenPopupTime =
		setTimeout(() => {
			popupT.classList.add("popUp-open");
			document.documentElement.classList.add("lockPopup");
			document.querySelectorAll('.close-popupT').forEach(currentItem => {
				currentItem.addEventListener("click", function (e) {
					e.preventDefault();
					popupT.classList.remove("popUp-open");
					popupT.classList.add("hard-hide");
					document.documentElement.classList.remove("lockPopup");
				});
			});
		}, 10000);

	document.addEventListener('click', (e) => {
		clearTimeout(frozenPopupTime);
	});
}