export function footerVillas() {
  if (document.querySelector(".main-inner .footer-villas")) {
    let mmFooterVillas = gsap.matchMedia();
    const tlFooterVillas = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-villas__wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".footer-villas__container",
      },
    });

    tlFooterVillas.from(
      ".footer-villas__bg-img-color",
      {
        duration: 1,
        opacity: 0,
      },
      0
    );

    tlFooterVillas.from(
      ".footer-villas__title",
      {
        duration: 0.5,
        opacity: 1,
        autoAlpha: 0,
        y: 50,
      },
      1
    );

    tlFooterVillas.to(
      ".footer-villas__title",
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
      },
      2.7
    );

    tlFooterVillas.to(
      ".footer-villas__bg-img",
      {
        opacity: 0,
        display: "none"
      },
      3.5
    );

    tlFooterVillas.to(
      ".footer-villas__btn",
      {
        opacity: 1,
        autoAlpha: 100,
        cursor: "pointer",
      },
      3
    );

    tlFooterVillas.to(
      ".footer-villas__line",
      {
        height: "100%",
        duration: 2,
      },
      3.5
    );

    tlFooterVillas.to(
      ".footer-villas__subtitle",
      {
        opacity: 1,
      },
      4.5
    );

    tlFooterVillas.from(
      ".footer-villas__close",
      {
        opacity: 0,
      },
      4.8
    );

    mmFooterVillas.add("(max-width: 5000px) and (min-width: 1281px)", () => {
      tlFooterVillas.to(
        ".footer-villas__bg-img",
        {
          clipPath: "circle(7% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterVillas.to(
        ".footer-villas__bg-img img",
        {
          scale: 0.3,
          duration: 0.8,
        },
        3
      );
      tlFooterVillas.from(
        ".footer-villas__appartements-title",
        {
          opacity: 0,
          x: -200,
        },
        4
      );

      tlFooterVillas.from(
        ".footer-villas__villas-title",
        {
          opacity: 0,
          x: 200,
        },
        4
      );
      tlFooterVillas.to(
        ".footer-villas__appartements .footer-villas__img",
        {
          x: -130,
        },
        4
      );

      tlFooterVillas.to(
        ".footer-villas__villas .footer-villas__img",
        {
          x: 130,
        },
        "<"
      );
    });

    mmFooterVillas.add("(max-width: 1280px) and (min-width: 993px)", () => {
      tlFooterVillas.to(
        ".footer-villas__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterVillas.to(
        ".footer-villas__bg-img img",
        {
          scale: 0.3,
          duration: 0.7,
        },
        3
      );
      tlFooterVillas.from(
        ".footer-villas__appartements-title",
        {
          opacity: 0,
          x: -200,
        },
        4
      );

      tlFooterVillas.from(
        ".footer-villas__villas-title",
        {
          opacity: 0,
          x: 200,
        },
        4
      );
      tlFooterVillas.to(
        ".footer-villas__appartements .footer-villas__img",
        {
          x: -90,
        },
        4
      );

      tlFooterVillas.to(
        ".footer-villas__villas .footer-villas__img",
        {
          x: 90,
        },
        "<"
      );
    });

    mmFooterVillas.add("(max-width: 993px) and (min-width: 577px)", () => {
      tlFooterVillas.to(
        ".footer-villas__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterVillas.to(
        ".footer-villas__bg-img img",
        {
          scale: 0.4,
          duration: 0.7,
        },
        3
      );
      tlFooterVillas.from(
        ".footer-villas__appartements-title",
        {
          opacity: 0,
          y: -200,
        },
        4
      );

      tlFooterVillas.from(
        ".footer-villas__villas-title",
        {
          opacity: 0,
          y: 200,
        },
        4
      );
      tlFooterVillas.to(
        ".footer-villas__appartements .footer-villas__img",
        {
          y: -100,
        },
        4
      );

      tlFooterVillas.to(
        ".footer-villas__villas .footer-villas__img",
        {
          y: 100,
        },
        "<"
      );
    });
    mmFooterVillas.add("(max-width: 576px) and (min-width: 320px)", () => {
      tlFooterVillas.to(
        ".footer-villas__bg-img",
        {
          clipPath: "circle(10% at 50% 50%)",
          duration: 0.8,
        },
        2.6
      );

      tlFooterVillas.to(
        ".footer-villas__bg-img img",
        {
          scale: 0.4,
          duration: 0.7,
        },
        3
      );
      tlFooterVillas.from(
        ".footer-villas__appartements-title",
        {
          opacity: 0,
          y: 200,
        },
        4
      );

      tlFooterVillas.from(
        ".footer-villas__villas-title",
        {
          opacity: 0,
          y: -200,
        },
        4
      );
      tlFooterVillas.to(
        ".footer-villas__appartements .footer-villas__img",
        {
          y: -70,
        },
        4
      );

      tlFooterVillas.to(
        ".footer-villas__villas .footer-villas__img",
        {
          y: 70,
        },
        "<"
      );
    });
  }
}
