export function masterPlanModal360() {
  const openModal = document.querySelector(".masterplan__modal360_btn");
  const closeModal = document.querySelector(".masterplan-section__back");
  openModal.addEventListener("click", () => {
    document.querySelector(".header").classList.add("hide");
    document.querySelector(".masterplan-section__back").classList.add("show");
    document.querySelector(".masterplan-section__modal").classList.add("show");
    gsap.to(".masterplan__svg",{
      opacity:0,
      duration:0.6,
      delay:0.5,
    })
    gsap.to(".masterplan__btn",{
      opacity:0,
      duration:1,
      delay:0.2,
    })
    bodyScrollBar.updatePluginOptions("modal", { open: true });
  });
  closeModal.addEventListener("click", () => {
    document
      .querySelector(".main-section__hand-wrapper")
      .classList.remove("hide");
    document.querySelector(".header").classList.remove("hide");
    document.querySelector(".masterplan-section__back").classList.remove("show");
    document.querySelector(".masterplan-section__modal").classList.remove("show");
    gsap.to(".masterplan__svg",{
      opacity:1,
      duration:0.5,
    })
    gsap.to(".masterplan__btn",{
      opacity: 1,
      duration:1,
    })
    bodyScrollBar.updatePluginOptions("modal", { open: false });
  });

  gsap.matchMedia().add("(max-width: 767.98px)", () => {
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
