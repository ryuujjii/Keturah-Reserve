export function mainModal360() {
  const openModal = document.querySelector(".main-modal360-animation");
  const closeModal = document.querySelector(".main-section__back");
  openModal.addEventListener("click", () => {
    gsap
      .timeline()
      .to(
        ".main-section",
        { className: "main-section main-section_video-play", duration: 0 },
        "<"
      );
    document.querySelector(".header").classList.add("hide");
    document.querySelector(".main-section__back").classList.add("show");
    document.querySelector(".main-section__modal").classList.add("show");
  });
  closeModal.addEventListener("click", () => {
    gsap
      .timeline()
      .to(
        ".main-section",
        { className: "main-section main-section_info-show", duration: 0 },
        "<"
      );
    document
      .querySelector(".main-section__hand-wrapper")
      .classList.remove("hide");
    document.querySelector(".header").classList.remove("hide");
    document.querySelector(".main-section__back").classList.remove("show");
    document.querySelector(".main-section__modal").classList.remove("show");
  });

  gsap.matchMedia().add("(max-width: 767.98px)", () => {
    let bigDraggable = Draggable.create(".main-section__modal_cont", {
      type: "x",
      bounds: window,
      inertia: true,
    })[0];

    document
      .querySelector(".main-section__hand-wrapper")
      .addEventListener("touchstart", (e) => {
        setTimeout(() => {
          document
            .querySelector(".main-section__hand-wrapper")
            .classList.add("hide");
        }, 200);
      });
  });
}
