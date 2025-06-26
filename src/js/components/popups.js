export function popups() {
	const animationPopupMatchMedia = gsap.matchMedia();
	const buttons = document.querySelectorAll("[data-popup]");
	const popups = document.querySelectorAll(".popUp");
	const delayForGettingImgs = 200;
	if (buttons && popups) {
		// const closeButtons = gsap.utils.toArray(".close-popup");
		const closeButtons = Array.from(document.getElementsByClassName('close-popup'));
		function close() {
			popups.forEach((popup) => {
				popup.classList.contains("popUp-open") ? popup.classList.remove("popUp-open") : null;
			});
			document.documentElement.classList.contains("lockPopup") ? document.documentElement.classList.remove("lockPopup") : null;
		}
		function initPopUp() {
			buttons.forEach((button) => {
				button.addEventListener("click", (e) => {
					e.preventDefault();
					const target = button.getAttribute("data-popup");
					//* Check if id is "1" or not
					const isId = target === "#one";
					bodyScrollBar.updatePluginOptions("modal", { open: true });
					// * We are getting data from clicked button
					const dataPopupTextOrImg = isId ? button.getAttribute("data-popup-text") : button.getAttribute("data-popup-img");
					const dataPopupTitle = button.getAttribute("data-popup-title");
					const dataPopupSubTitle = button.getAttribute("data-popup-subTitle");
					const dataPopupBtn = button.getAttribute("data-popup-btn");
					// * We are getting popup and selectors
					const popup = document.querySelector(target);
					const popupTitle = popup.querySelector("._popup-title");
					const popupSubtitle = popup.querySelector("._popup-sub-title");
					const popupTextOrImg = isId ? getPopupText(popup) : getPopupImg(popup);
					const picture = !isId ? popup.querySelector("source") : null;
					picture ? (picture.srcset = dataPopupTextOrImg.replace(".png", ".webp")) : null;
					const popupBtn = popup.querySelector(".form-main-popup__btn p");
					dataPopupBtn.toLowerCase() === "download" ? popupBtn.parentElement.classList.add("popup-download") : popupBtn.parentElement.classList.contains("popup-download") ? popupBtn.parentElement.classList.remove("popup-download") : null;
					// * We are setting new data to selectors
					popupTitle.innerHTML = dataPopupTitle;
					popupSubtitle.innerHTML = dataPopupSubTitle;
					popupBtn.innerHTML = dataPopupBtn;
					isId ? (popupTextOrImg.innerHTML = dataPopupTextOrImg) : (popupTextOrImg.src = dataPopupTextOrImg);
					// * add some handle if you need
					const handle = button.getAttribute("data-handle");
					handle ? popup.classList.add('data-handle') : popup.classList.contains('data-handle') ? popup.classList.remove('data-handle') : null;
					// * We are adding classes to show actual popup
					setTimeout(() => {
						popup.classList.add("popUp-open");
					}, delayForGettingImgs);
					document.documentElement.classList.add("lockPopup");
				});
			});

			closeButtons.forEach((closeButton) => {
				closeButton.addEventListener("click", () => {
					close();
					if (closeButton.parentElement.parentElement.parentElement.classList.contains('data-handle')||closeButton.parentElement.parentElement.classList.contains('data-handle')) {
						bodyScrollBar.updatePluginOptions("modal", { open: true });
					} else {
						bodyScrollBar.updatePluginOptions("modal", { open: false });
					}
				});
			});
		}
		function getPopupText(popup) {
			return popup.querySelector(".main-popup__text p");
		}
		function getPopupImg(popup) {
			return popup.querySelector(".popup3__media video");
		}
		initPopUp();
	}

	document.documentElement.style.setProperty("--popup-animation-delay", 55);
}
