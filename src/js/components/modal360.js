export function modal360() {
	const modals360 = gsap.utils.toArray("[data-modal360]");
	const modalIframe = document.querySelector(".modal360__iframe");
	const modal = document.querySelector(".modals360");
	const modalClosebtn = document.querySelectorAll(".close-modal360");
	modals360.forEach((modal360) => {
		modal360.addEventListener("click", (e) => {
			e.preventDefault();
			bodyScrollBar.updatePluginOptions("modal", { open: true });
			const path = modal360.getAttribute("data-modal360");
			modalIframe.innerHTML = `<iframe src="${path}" style="position: absolute; top: 0; left: 0;  z-index: 10; width: 100%; height: 100%; " frameborder="0" ></iframe>`;
			const handle = modal360.getAttribute("data-handle");
			handle ? modal.classList.add('data-handle') : modal.classList.contains('data-handle') ? modal.classList.remove('data-handle') : null;
			setTimeout(() => {
				modal.classList.add("active");
				document.documentElement.classList.add("lockPopup");
			}, 100);
		});
	});
	modalClosebtn.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (modal.classList.contains('data-handle')) {
				bodyScrollBar.updatePluginOptions("modal", { open: true });
			} else {
				bodyScrollBar.updatePluginOptions("modal", { open: false });
			}

			btn.classList.remove("active");
			modal.classList.remove("active");
			document.documentElement.classList.remove("lockPopup");
		});
	});
}
