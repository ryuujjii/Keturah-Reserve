export function footerBio() {
  if (document.querySelector(".main-inner .footer-bio")) {
    let mmFooterBio = gsap.matchMedia();
    const tlFooterBio = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-bio",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    tlFooterBio.to(
      ".footer-bio__btn",
      {
        opacity: 1,
        autoAlpha: 100,
        cursor: "pointer",
      },
      1.5
    );

    tlFooterBio.to(
      ".footer-bio__close-text",
      {
        opacity: 1,
      },
      1.6
    );

    tlFooterBio.to(
      ".footer-bio__line",
      {
        height: "100%",
      },
      1.9
    );
    mmFooterBio.add("(max-width: 2500px) and (min-width: 993px)", () => {
      tlFooterBio.to(
        ".footer-bio__img",
        {
          duration: 1,
          clipPath: "circle(8% at 50% 50%)",
        },
        0.5
      );

      tlFooterBio.to(
        ".footer-bio__img img",
        {
          scale: 0.4,
          duration: 0.5,
        },
        1
      );
    });
    mmFooterBio.add("(max-width: 992px) and (min-width: 577px)", () => {
      tlFooterBio.to(
        ".footer-bio__img",
        {
          duration: 1,
          clipPath: "circle(10% at 50% 50%)",
        },
        0.5
      );

      tlFooterBio.to(
        ".footer-bio__img img",
        {
          scale: 0.5,
          duration: 0.5,
        },
        1
      );
    });
    mmFooterBio.add("(max-width: 576px) and (min-width: 320px)", () => {
      tlFooterBio.to(
        ".footer-bio__img",
        {
          duration: 1,
          clipPath: "circle(10% at 50% 50%)",
        },
        0.5
      );

      tlFooterBio.to(
        ".footer-bio__img img",
        {
          scale: 0.4,
          duration: 0.8,
        },
        1
      );
    });
  }
}
