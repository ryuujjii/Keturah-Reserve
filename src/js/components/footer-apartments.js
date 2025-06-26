export function footerApartments() {
    if (document.querySelector(".main-inner .footer-apartments")) {
      let mmFooterApartment = gsap.matchMedia();
      const tlFooterApartment = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-apartments__wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: ".footer-apartments__container",
        },
      });
  
      tlFooterApartment.from(
        ".footer-apartments__bg-img-color",
        {
          duration: 1,
          opacity: 0,
        },
        0
      );
  
      tlFooterApartment.from(
        ".footer-apartments__title",
        {
          duration: 0.5,
          opacity: 1,
          autoAlpha: 0,
          y: 50,
        },
        1
      );
  
      tlFooterApartment.to(
        ".footer-apartments__title",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
        },
        2.7
      );
  
      tlFooterApartment.to(
        ".footer-apartments__bg-img",
        {
          opacity: 0,
          display: "none"
        },
        3.5
      );
  
      tlFooterApartment.to(
        ".footer-apartments__btn",
        {
          opacity: 1,
          autoAlpha: 100,
          cursor: "pointer",
        },
        3
      );
  
      tlFooterApartment.to(
        ".footer-apartments__line",
        {
          height: "100%",
          duration: 2,
        },
        3.5
      );
  
      tlFooterApartment.to(
        ".footer-apartments__subtitle",
        {
          opacity: 1,
        },
        4.5
      );
  
      tlFooterApartment.from(
        ".footer-apartments__close",
        {
          opacity: 0,
        },
        4.8
      );
  
      mmFooterApartment.add("(max-width: 5000px) and (min-width: 1281px)", () => {
        tlFooterApartment.to(
          ".footer-apartments__bg-img",
          {
            clipPath: "circle(7% at 50% 50%)",
            duration: 0.8,
          },
          2.6
        );
  
        tlFooterApartment.to(
          ".footer-apartments__bg-img img",
          {
            scale: 0.3,
            duration: 0.8,
          },
          3
        );
        tlFooterApartment.from(
          ".footer-apartments__appartements-title",
          {
            opacity: 0,
            x: -200,
          },
          4
        );
  
        tlFooterApartment.from(
          ".footer-apartments__villas-title",
          {
            opacity: 0,
            x: 200,
          },
          4
        );
        tlFooterApartment.to(
          ".footer-apartments__appartements .footer-apartments__img",
          {
            x: -130,
          },
          4
        );
  
        tlFooterApartment.to(
          ".footer-apartments__villas .footer-apartments__img",
          {
            x: 130,
          },
          "<"
        );
      });
  
      mmFooterApartment.add("(max-width: 1280px) and (min-width: 993px)", () => {
        tlFooterApartment.to(
          ".footer-apartments__bg-img",
          {
            clipPath: "circle(10% at 50% 50%)",
            duration: 0.8,
          },
          2.6
        );
  
        tlFooterApartment.to(
          ".footer-apartments__bg-img img",
          {
            scale: 0.3,
            duration: 0.7,
          },
          3
        );
        tlFooterApartment.from(
          ".footer-apartments__appartements-title",
          {
            opacity: 0,
            x: -200,
          },
          4
        );
  
        tlFooterApartment.from(
          ".footer-apartments__villas-title",
          {
            opacity: 0,
            x: 200,
          },
          4
        );
        tlFooterApartment.to(
          ".footer-apartments__appartements .footer-apartments__img",
          {
            x: -90,
          },
          4
        );
  
        tlFooterApartment.to(
          ".footer-apartments__villas .footer-apartments__img",
          {
            x: 90,
          },
          "<"
        );
      });
  
      mmFooterApartment.add("(max-width: 993px) and (min-width: 577px)", () => {
        tlFooterApartment.to(
          ".footer-apartments__bg-img",
          {
            clipPath: "circle(10% at 50% 50%)",
            duration: 0.8,
          },
          2.6
        );
  
        tlFooterApartment.to(
          ".footer-apartments__bg-img img",
          {
            scale: 0.4,
            duration: 0.7,
          },
          3
        );
        tlFooterApartment.from(
          ".footer-apartments__appartements-title",
          {
            opacity: 0,
            y: -200,
          },
          4
        );
  
        tlFooterApartment.from(
          ".footer-apartments__villas-title",
          {
            opacity: 0,
            y: 200,
          },
          4
        );
        tlFooterApartment.to(
          ".footer-apartments__appartements .footer-apartments__img",
          {
            y: -100,
          },
          4
        );
  
        tlFooterApartment.to(
          ".footer-apartments__villas .footer-apartments__img",
          {
            y: 100,
          },
          "<"
        );
      });
      mmFooterApartment.add("(max-width: 576px) and (min-width: 320px)", () => {
        tlFooterApartment.to(
          ".footer-apartments__bg-img",
          {
            clipPath: "circle(10% at 50% 50%)",
            duration: 0.8,
          },
          2.6
        );
  
        tlFooterApartment.to(
          ".footer-apartments__bg-img img",
          {
            scale: 0.4,
            duration: 0.7,
          },
          3
        );
        tlFooterApartment.from(
          ".footer-apartments__appartements-title",
          {
            opacity: 0,
            y: 200,
          },
          4
        );
  
        tlFooterApartment.from(
          ".footer-apartments__villas-title",
          {
            opacity: 0,
            y: -200,
          },
          4
        );
        tlFooterApartment.to(
          ".footer-apartments__appartements .footer-apartments__img",
          {
            y: -70,
          },
          4
        );
  
        tlFooterApartment.to(
          ".footer-apartments__villas .footer-apartments__img",
          {
            y: 70,
          },
          "<"
        );
      });
    }
  }
  