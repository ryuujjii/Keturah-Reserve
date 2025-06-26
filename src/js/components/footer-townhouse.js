export function footerTownhouse() {
  if (document.querySelector(".main-inner .footer-townhouse")) {
    let mmFooterTownhouse = gsap.matchMedia();
    const tlFooterTownhouse = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-townhouse__wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".footer-townhouse__container",
      },
    });

    tlFooterTownhouse.from(
      ".footer-townhouse__bg-img-color",
      {
        duration: 1,
        opacity: 0,
      },
      0
    );

    tlFooterTownhouse.from(
      ".footer-townhouse__title",
      {
        duration: 0.5,
        opacity: 1,
        autoAlpha: 0,
        y: 50,
      },
      1
    );

    tlFooterTownhouse.to(
      ".footer-townhouse__title",
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
      },
      2.7
    );

    tlFooterTownhouse.to(
      ".footer-townhouse__bg-img",
      {
        opacity: 0,
        display: "none"
      },
      3.5
    );

    tlFooterTownhouse.to(
      ".footer-townhouse__btn",
      {
        opacity: 1,
        autoAlpha: 100,
        cursor: "pointer",
      },
      3
    );

    tlFooterTownhouse.to(
      ".footer-townhouse__line",
      {
        height: "100%",
        duration: 2,
      },
      3.5
    );

    tlFooterTownhouse.to(
      ".footer-townhouse__subtitle",
      {
        opacity: 1,
      },
      4.5
    );

    tlFooterTownhouse.from(
      ".footer-townhouse__close",
      {
        opacity: 0,
      },
      4.8
    );

    mmFooterTownhouse.add("(max-width: 5000px) and (min-width: 1281px)", () => {
      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img",
        {
          clipPath: "circle(7% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img img",
        {
          scale: 0.3,
          duration: 0.8,
        },
        3
      );
      tlFooterTownhouse.from(
        ".footer-townhouse__appartements-title",
        {
          opacity: 0,
          x: -200,
        },
        4
      );

      tlFooterTownhouse.from(
        ".footer-townhouse__villas-title",
        {
          opacity: 0,
          x: 200,
        },
        4
      );
      tlFooterTownhouse.to(
        ".footer-townhouse__appartements .footer-townhouse__img",
        {
          x: -130,
        },
        4
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__villas .footer-townhouse__img",
        {
          x: 130,
        },
        "<"
      );
    });

    mmFooterTownhouse.add("(max-width: 1280px) and (min-width: 993px)", () => {
      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img img",
        {
          scale: 0.3,
          duration: 0.7,
        },
        3
      );
      tlFooterTownhouse.from(
        ".footer-townhouse__appartements-title",
        {
          opacity: 0,
          x: -200,
        },
        4
      );

      tlFooterTownhouse.from(
        ".footer-townhouse__villas-title",
        {
          opacity: 0,
          x: 200,
        },
        4
      );
      tlFooterTownhouse.to(
        ".footer-townhouse__appartements .footer-townhouse__img",
        {
          x: -90,
        },
        4
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__villas .footer-townhouse__img",
        {
          x: 90,
        },
        "<"
      );
    });

    mmFooterTownhouse.add("(max-width: 993px) and (min-width: 577px)", () => {
      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img img",
        {
          scale: 0.4,
          duration: 0.7,
        },
        3
      );
      tlFooterTownhouse.from(
        ".footer-townhouse__appartements-title",
        {
          opacity: 0,
          y: -200,
        },
        4
      );

      tlFooterTownhouse.from(
        ".footer-townhouse__villas-title",
        {
          opacity: 0,
          y: 200,
        },
        4
      );
      tlFooterTownhouse.to(
        ".footer-townhouse__appartements .footer-townhouse__img",
        {
          y: -100,
        },
        4
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__villas .footer-townhouse__img",
        {
          y: 100,
        },
        "<"
      );
    });
    mmFooterTownhouse.add("(max-width: 576px) and (min-width: 320px)", () => {
      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__bg-img img",
        {
          scale: 0.4,
          duration: 0.7,
        },
        3
      );
      tlFooterTownhouse.from(
        ".footer-townhouse__appartements-title",
        {
          opacity: 0,
          y: 200,
        },
        4
      );

      tlFooterTownhouse.from(
        ".footer-townhouse__villas-title",
        {
          opacity: 0,
          y: -200,
        },
        4
      );
      tlFooterTownhouse.to(
        ".footer-townhouse__appartements .footer-townhouse__img",
        {
          y: -70,
        },
        4
      );

      tlFooterTownhouse.to(
        ".footer-townhouse__villas .footer-townhouse__img",
        {
          y: 70,
        },
        "<"
      );
    });
  }
}
