export function agency() {
  const agencyContainer = document.querySelector(".agency__container");
  const agencyVideoWrapper = document.querySelector(".agency__video-wrapper");
  const agencyTitleWrapper = document.querySelector(".agency__title-wrapper");
  const agencyVideoMain = document.querySelector(".agency__video.main");
  const sections = gsap.utils.toArray(".agency__list");
  let mmAgency = gsap.matchMedia();

  let maxWidth = 0;
  agencyVideoMain.pause();
  agencyVideoMain.currentTime = 0;

  const agencySt = ScrollTrigger.create({
    trigger: ".agency__content-wrapper",
    start: "top top",
    end: () => "+=" + vh * 2,
    pin: ".agency__content",
    scrub: 0.5,
    animation: agencyTl,
    onEnter: () => {
      if (agencyVideoMain.ended) {
        agencyVideoMain.currentTime = 0;
      }
    },
    onEnterBack: () => {
      if (agencyVideoMain.ended) {
        agencyVideoMain.currentTime = 0;
      }
    },
  });

  function agencyVideoPlay() {
    agencyVideoMain.play();
  }

  const observeAgencyVideoReplay = new IntersectionObserver((entries) => {
    entries[0].target.classList.remove("active");
    if (!entries[0].isIntersecting) {
      agencyVideoMain.pause();
      agencyVideoMain.currentTime = 0;
    }
  });

  observeAgencyVideoReplay.observe(document.querySelector(".agency"));

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

  var agencyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".agency__content",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
    },
  });
  agencyTl.fromTo(
    ".agency__video-wrapper",
    {
      y: `-${agencyVideoWrapper.offsetTop}px`,
      width: `${windowWidth}px`,
      height: `${windowHeight + agencyVideoWrapper.offsetTop}px`,
      // yPercent: 0,
      // scale: 1,
    },
    {
      y: "0px",
      width: `${agencyContainer.scrollWidth}px`,
      height: `${windowHeight / 1.2}px`,
      // yPercent: 40,
      // scale: 0.8,
    },
    0
  );
  agencyTl.from(
    ".agency__title-wrapper",
    { y: `${windowHeight / 4}px`, opacity: 0 },
    // { yPercent: 35, opacity: 0 },
    0
  );
  agencyTl.to(".agency__info", { yPercent: -140 }, 2.5);
  agencyTl.call(agencyVideoPlay, null, 0.4);
  mmAgency.add("(max-width: 4000px) and (min-width: 993px)", () => {
    agencyTl.to(
      ".agency__video-wrapper",
      {
        y: `-${agencyVideoWrapper.offsetTop - 50}px`,
        // yPercent: 0,
      },
      0.5
    );
    agencyTl.to(
      ".agency__title-wrapper",
        { y: `-${windowHeight / 4}px`, opacity: 0 },
      // { yPercent: -35, opacity: 0 },
      "<"
    );
  });
  mmAgency.add("(max-width: 992px) and (min-width: 320px)", () => {
    agencyTl.to(
      ".agency__video-wrapper",
      {
        y: `-${agencyVideoWrapper.offsetTop - 50}px`,
        // yPercent: -20,
        // scaleX: 0.9,
        // scaleY: 0.9,
      },
      0.5
    );
    agencyTl.to(
      ".agency__title-wrapper",
        { y: `-${windowHeight / 4}px`, opacity: 0 },
      // { yPercent: -35, opacity: 0 },
      "<"
    );
  });

  let scrollSecond = gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: ".agency__info-wrapper",
      start: "bottom bottom",
      end: () => "+=" + vh * 1,
      pin: ".agency__info",
      scrub: true,
    },
  });

  gsap.set(".footer__container-wrapper", { yPercent: -100 });

  const footerPin = gsap.timeline({ paused: true });
  
  footerPin.to(".footer__container-wrapper", { yPercent: 0, ease: "none" });


  mmAgency.add("(max-width: 4000px) and (min-width: 1921px)", () => {

    ScrollTrigger.create({
      trigger: ".footer__container-wrapper",
      start: "top bottom",
      end: "top center",
      animation: footerPin,
      scrub: true,
      markers: false,
    });
  
    const agency = document.querySelectorAll(".agency");
    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        scrub: true,
      },
    });
  
    tlFooter.from(
      ".footer__logo",
      {
        yPercent: 200,
        duration: 2,
      },
      1
    );
    tlFooter.from(".footer__logo img", {
      duration: 2,
      scale: 2,
      opacity: 0,
      ease: "expoScale(2, 1)",
    });
    tlFooter.from(".footer__list", {
      className: "footer__list hide",
    });
    tlFooter.from(".footer__copirayt", {
      className: "footer__copirayt hide",
    });
  });

  mmAgency.add("(max-width: 1920px) and (min-width: 320px)", () => {
    ScrollTrigger.create({
      trigger: ".footer__container-wrapper",
      start: "top bottom",
      end: "+=85%",
      animation: footerPin,
      scrub: true,
      markers: false,
    });
  
    const agency = document.querySelectorAll(".agency");
    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        scrub: true,
      },
    });
  
    tlFooter.from(
      ".footer__logo",
      {
        yPercent: 200,
        duration: 2,
      },
      1
    );
    tlFooter.from(".footer__logo img", {
      duration: 2,
      scale: 2,
      opacity: 0,
      ease: "expoScale(2, 1)",
    });
    tlFooter.from(".footer__list", {
      className: "footer__list hide",
    });
    tlFooter.from(".footer__copirayt", {
      className: "footer__copirayt hide",
    });
  });
}
