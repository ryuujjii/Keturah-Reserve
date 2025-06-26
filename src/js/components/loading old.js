export function loading() {
	const birdieVideo = document.querySelector(".loading__video video");
	const loader = document.querySelector(".loading__logo_loading");
	const loaderPercent = document.querySelector(".loading__percent");

	// birdieVideo.addEventListener("canplaythrough", () => {
	// 	birdieVideo.pause();
	// 	birdieVideo.currentTime == 0;
	// });

	// coaderCount

	// let intervalIdCount = null;
	// intervalIdCount = setInterval(updateProgressCount, 200);

	// let loaderCount = 0;

	// function updateProgressCount() {
	// 	loaderCount++;
	// 	if (loaderCount >= 100) {
	// 		clearInterval(intervalIdCount);
	// 	}
	// }

	// // video preload

	// let intervalId = null;
	// intervalId = setInterval(updateProgressVideo, 100);

	// let loaderVideoProgress = 0;

	// function updateProgressVideo() {
	// 	if (birdieVideo.buffered.length > 0) {
	// 		loaderVideoProgress = Math.floor((birdieVideo.buffered.end(0) / birdieVideo.duration) * 100);
	// 	}
	// 	if (loaderVideoProgress >= 100) {
	// 		loaderCount = 100;
	// 		clearInterval(intervalId);
	// 	}
	// }

	function projectsVideoSRC() {
		if (document.querySelector("video.lazy")) {
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
	}

	var queue = new createjs.LoadQueue(true);

	const videos = document.querySelectorAll("video");
	const videoArray = Array.from(videos).map((video) => ({ src: video.src, type: "video" }));
	// const images = document.querySelectorAll("img");
	// const imageArray = Array.from(images).map((image) => ({ src: image.src, type: "image" }));

	// queue.loadFile(video1);
	// queue.loadFile(video2);
	queue.loadManifest(videoArray);
	// queue.loadManifest(imageArray);

	//  queue.loadFile("sound.mp3");

	queue.on("progress", function (event) {
		let progressPercent = Math.floor((event.loaded / event.total) * 100);
		console.log(progressPercent + "%");

		loader.setAttribute("style", `width: ${progressPercent}%`);
		loaderPercent.textContent = `${progressPercent}%`;
	});
	queue.on("fileprogress", function (event) {
		let progressPercent = Math.floor((event.loaded / event.total) * 100);

		console.log(event);
	});

	// total progress

	// let totalProgress = 0;

	// let totalProgressInterval = setInterval(() => {
	// totalProgress = Math.round((loaderCount + loaderVideoProgress) / 2);

	// }, 100);
	queue.on("complete", function () {
		const fromPage = localStorage.getItem("fromPage");

		if (fromPage === "innerPage") {
			setTimeout(() => {
				gsap.to(".loading", { yPercent: -100, duration: 1 });
				gsap.set(".main-section", { className: "main-section main-section_info-show" });
			}, 1000);
			localStorage.removeItem("fromPage");
		} else {
			birdieVideo.play();
			birdieVideo.pause();
			birdieVideo.currentTime == 0;

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
					},
					false
				);
			}, 1000);
		}
	});

	queue.load();
}
