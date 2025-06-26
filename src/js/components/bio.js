export function bio() {
  const biowrapper = gsap.utils.toArray(".bioPage__wrapper");
  const bioRightBio = gsap.utils.toArray(".right-bio");
  const bioRightContent = gsap.utils.toArray(".right-bio__content");
  const bioLeftImg = gsap.utils.toArray(".left-bio__img");
  const bioLeftImgVideo = gsap.utils.toArray(".left-bio__img video");

  gsap.matchMedia().add("(min-width:991.98px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bioPage",
        start: "top top",
        end: "+=20000",
        scrub: 1.2,
        pin: true,
      },
    });
    biowrapper.forEach((item, i) => {
      const scrollHeight = Math.round(
        ((bioRightContent[i].offsetHeight - bioLeftImg[i].offsetHeight) /
          bioRightContent[i].offsetHeight) *
          100
      );
      if (i === 0) {
        tl.to(item, {
          xPercent: -50,
          delay:0.1,
          onReverseComplete: () => {
            document.querySelector(".left-bio__img").classList.add("hide");
          },
          onStart: () => {
            document.querySelector(".left-bio__img").classList.remove("hide");
          },
        });
      } else {
        tl.to(item, {
          xPercent: -150,
        });
        tl.to(item, {
          xPercent: -200,
        });
      }
      tl.to(
        bioLeftImgVideo[i],
        {
          xPercent: 25,
          
          
        },
        "<"
      );
      tl.from(
        bioRightContent[i],
        {

          xPercent: 30,
          yPercent: 30,
        },
        "<"
      );

      tl.to(bioRightContent[i], {
        yPercent: scrollHeight > 0 ? -scrollHeight : 0,
      });
      tl.to(
        bioRightContent[i],
        {
          y: 30,
        },
        "<"
      );
    });
  });
}
