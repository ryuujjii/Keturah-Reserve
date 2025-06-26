export function gallery() {
  if (document.querySelector(".gallery")) {
    gsap.matchMedia().add("(min-width:991.98px)", () => {
      const gallerywrapper = gsap.utils.toArray(".gallery__wrapper");
      const galleryRightgallery = gsap.utils.toArray(".right-gallery");
      const galleryRightContent = gsap.utils.toArray(
        ".right-gallery__content__height"
      );

      const galleryLeftImg = gsap.utils.toArray(".right-gallery__left");
      const galleryLeftImgObj = gsap.utils.toArray(
        ".right-gallery__left > img"
      );
      const galleryShaddow = gsap.utils.toArray(".shadow-gallery_desc");
      console.log(galleryShaddow)

      //todo под адаптив подправить старт
      const galleryTimeLine2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "top bottom",
          end: "bottom-=30px bottom",
          scrub: true,
        },
      });

      galleryTimeLine2.from(".left-gallery__img_one", {
        clipPath: "polygon(20% 35%, 80% 35%, 80% 100%, 20% 100%)",
      });
      galleryTimeLine2.from(
        ".gallery__img-scale",
        {
          scale: 1.5,
          duration: 1,
        },
        "<"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "top top",
          end: "+=8000",
          scrub: 1.2,
          pin: true,
        },
      });

      galleryRightgallery.forEach((item, i) => {
        const scrollHeight = Math.round(
          ((galleryRightContent[i].offsetHeight -
            galleryLeftImg[i].offsetHeight) /
            galleryRightContent[i].offsetHeight) *
            100
        );
        i === 0
          ? tl.to(item, {
              xPercent: -100,
            })
          : tl.to(item, {
              xPercent: -300,
            });
        tl.from(
          galleryRightgallery[i],
          {
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 25% 100%);",
          },
          "<"
        );
        tl.from(
          galleryLeftImgObj[i],
          {
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 25% 100%);",
            scale: 3,
          },
          "<"
        );
        tl.from(
          galleryRightContent[i],
          {
            xPercent: i !== 0 ? 30 : 10,
            yPercent: i !== 0 ? 150 : 50,
          },
          "<"
        );
        tl.to(galleryRightContent[i], {
          yPercent: scrollHeight > 0 ? -scrollHeight : 0,
          onComplete: () => {
            galleryShaddow[i].classList.add("show");
          },
          onReverseComplete: () => {
            galleryShaddow[i].classList.remove("show");
          },
        });
        tl.to(
          galleryRightContent[i],
          {
            y: 30,
          },
          "<"
        );
      });
      tl.to(galleryLeftImg.at(-1), {
        flexBasis: "100%",
        onStart: () => {
          galleryShaddow.at(-1).classList.add("show");
        },
        onReverseComplete: () => {
          galleryShaddow.at(-1).classList.remove("show");
        },
      });
    });
  }
}
