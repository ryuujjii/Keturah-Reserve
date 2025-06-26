export function location() {
  const matchMediaLandmarks = gsap.matchMedia();
  const matches = window.matchMedia("(max-width:479.98px)").matches;
  const landmarksTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".landmarks",
      start: "top top",
      end: `+=${!matches ? 6000 : 3000}`,
      pin: true,
      scrub: true,
    },
  });

  window.addEventListener("resize", () => {
    landmarksTimeLine.scrollTrigger.refresh();
  });

  const landmarksCard = gsap.utils.toArray(".landmarks__card");
  const landmarksImgFont = gsap.utils.toArray(".landmarks__img_font");
  const landmarksImg = gsap.utils.toArray(".landmarks__img");
  const text = gsap.utils.toArray(".text-landmarks");
  const landmarksSvg1 = document.querySelector(".landmarks__svg1");
  const landmarksSvg2 = document.querySelector(".landmarks__svg2");
  const landmarksTextSmall = gsap.utils.toArray(".text-landmarks__small p");
  const landmarksImgContent = gsap.utils.toArray(".landmarks__img_i");
  const landmarksBg = gsap.utils.toArray(".landmarks__bg");
  const brochureWrapper = document.querySelector(".brochure");
  let landmarksPositionCircle;

  const observer = new IntersectionObserver(
    (entries) => {
      entries[0].target.classList.remove("active");
    },
    { rootMargin: `0px 0px -${window.innerHeight / 8}px 0px `, threshold: 1 }
  );

  landmarksBg[0].classList.add("active");
  gsap.set(landmarksCard[0], {
    yPercent: -100,
  });
  gsap.set(landmarksImg[0], {
    clipPath: "circle(100% at 50% 50%)",
    width: "100%",
    height: "100%",
    zIndex: 10,
  });

  gsap.set(landmarksImgFont[0], {
    scale: 0,
    bottom: "50%",
  });

  // gsap.set(landmarksImgContent[0], {
  // 	yPercent: -10,
  // });

  gsap.matchMedia().add("(max-width:768px)", () => {
    gsap.set(landmarksImgContent[0], {
      yPercent: 0,
    });
    landmarksTimeLine.to(landmarksImg[0], {
      clipPath: "circle(28% at 50% 50%)",
      duration: 2,
      onComplete: () => {
        text[0].classList.add("active-first");
      },
    });
    landmarksTimeLine.to(
      landmarksImgContent[0],
      {
        yPercent: 11,
      },
      "<70%"
    );
    landmarksTimeLine.to(
      landmarksImgContent[0],
      {
        scale: 0.95,
        duration: 1,
        yPercent:15
      },
      "<80%"
    );
  });

  gsap.matchMedia().add("(min-width:767.98px)", () => {
    landmarksTimeLine.to(landmarksImg[0], {
      clipPath: "circle(15% at 50% 50%)",
      duration: 2,
      onComplete: () => {
        text[0].classList.add("active-first");
      },
    });
    landmarksTimeLine.to(
      landmarksImgContent[0],
      {
        yPercent: 8,
      },
      "<70%"
    );
    landmarksTimeLine.to(
      landmarksImgContent[0],
      {
        scale: 0.8,
        duration: 1,
      },
      "<90%"
    );
  });

  landmarksTimeLine.to(
    landmarksImgFont,
    {
      bottom: "50%",
    },
    "<70%"
  );

  for (let i = 0; i < landmarksCard.length - 1; i++) {
    for (let j = i + 1; j < i + 2; j++) {
      //Заходит
      landmarksTimeLine.to(landmarksCard[j], {
        yPercent: -100,
        duration: 2,
        onStart: () => {
          landmarksCard[j].classList.add("completed");
          landmarksSvg1.classList.add("active");
          landmarksSvg2.classList.add("active");
          landmarksBg[j].classList.add("active");
        },
        onComplete: () => {
          landmarksPositionCircle =
            landmarksCard[j].getBoundingClientRect().top;
          text[j].classList.add("active");
          landmarksSvg1.classList.remove("active");
          landmarksSvg2.classList.remove("active");
          textHide();
        },
        onReverseComplete: () => {
          text[j].classList.remove("active");
          landmarksCard[j].classList.remove("completed");
          landmarksBg[j].classList.remove("active");
          // observer.disconnect();
          if (landmarksCard[j] === landmarksCard[1]) {
            text[0].classList.add("active-first");
          }
        },
      });

      // if (landmarksImgFont[j] === landmarksImgFont.at(-1)) {
      landmarksTimeLine.to(
        landmarksImgFont[j],
        {
          scale: 0,
          duration: 2,
        },
        "<"
      );
      if (landmarksImg[j] === landmarksImg.at(-1)) {
        landmarksTimeLine.to(
          landmarksImg[j],
          {
            clipPath: `circle(${!matches ? 15 : 75}% at 50% 50%)`,
            duration: 4,
            onStart: () => {
              document.querySelector(".location").classList.contains("hide")
                ? document.querySelector(".location").classList.remove("hide")
                : null;
            },
            onComplete: () => {
              document.querySelector(".location__dots").classList.add("show");
            },
            onReverseComplete: () => {
              document
                .querySelector(".location__dots")
                .classList.remove("show");
              document.querySelector(".location").classList.add("hide");
            },
          },
          "<"
        );
        landmarksTimeLine.to(landmarksImg[j], {
          clipPath: "circle(100% at 50% 50%)",
          duration: 3,
        });
      } else {
        landmarksTimeLine.to(
          landmarksImg[j],
          {
            clipPath: "circle(23% at 50% 50%)",
            duration: 2,
          },
          "<"
        );
      }
      landmarksTimeLine.to(
        ".landmarks__svg3",
        {
          height: "100vh",
          duration: 3,
        },
        "<"
      );
    }
    //выходит
    landmarksTimeLine.to(
      landmarksCard[i],
      {
        yPercent: -136 + i * 5,
        duration: matches && i === landmarksCard.length - 2 ? 0.5 : 2,
        onStart: () => {
          text[i].classList.remove("active");
          landmarksCard[i].classList.remove("completed");
          text[i].classList.remove("active-first");
          landmarksBg[i].classList.remove("active");
        },
        onComplete: () => {
          landmarksTextSmall[i].classList.add("active");
          // landmarksImgFont[i].classList.add('show-white-circle');
          gsap.set(landmarksImgFont[i], { scale: 0.24 });
        },
        onReverseComplete: () => {
          text[i].classList.add("active");
          landmarksCard[i].classList.add("completed");
          landmarksBg[i].classList.add("active");
          // textHide();
        },
        onUpdate: () => {
          landmarksTextSmall[i].classList.remove("active");
          // landmarksImgFont[i].classList.remove('show-white-circle');
          gsap.set(landmarksImgFont[i], { scale: 0 });
        },
      },
      `${i === landmarksCard.length - 2 ? "<-130%" : "<"}`
    );
    if (matches && landmarksCard[i] === landmarksCard.at(-2)) {
      landmarksTimeLine.to(
        landmarksImg[i],
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 0.6,
        },
        "<"
      );
    } else {
      landmarksTimeLine.to(
        landmarksImg[i],
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 2,
        },
        "<"
      );
    }
  }

  function textHide() {
    text.forEach((item) => {
      observer.observe(item);
    });
  }
  //========================================================================================================================================================
  const location = document.querySelector(".location");

  function initMap() {
    const tips = gsap.utils.toArray(
      ".dot-location__tip:not(.dot-location__main)"
    );

    //========================================================================================================================================================
    if (window.matchMedia("(max-width:767.98px)").matches) {
      tips.forEach((marker, i) => {
        // * Расположение точек на карте
        const x = +marker.dataset.xMob;
        const y = +marker.dataset.yMob;
        marker.style.cssText = `
          right: ${x - 65}px;
          top: ${y + 280}px;
        `;
      });
    } else {
      tips.forEach((marker, i) => {
        // * Расположение точек на карте
        const x = +marker.dataset.x - 43;
        const y = +marker.dataset.y - 187;
        marker.style.cssText = `
          right: ${x}px;
          top: ${y}px;
        `;
      });
    }

    // unoque
    // bay avenu
    const items = gsap.utils.toArray(".location__item");
    const list = document.querySelector(".location__list");
    const parentsOfDots = gsap.utils.toArray(".dot-location");
    document.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".location__item")) {
        //*  Clicked target
        const itemTarget = target.closest(".location__item");
        if (itemTarget.classList.contains("location__item_all")) {
          !location.classList.contains("show-all")
            ? location.classList.add("show-all")
            : null;
          // * Clear if exist
          items.forEach((item) => {
            item.classList.contains("_active")
              ? item.classList.remove("_active")
              : null;
          });
          !itemTarget.classList.contains("_active")
            ? itemTarget.classList.add("_active")
            : null;

          parentsOfDots.forEach((currentItem) => {
            !currentItem.classList.contains('_active"')
              ? currentItem.classList.add("_active")
              : null;
          });
        } else {
          location.classList.contains("show-all")
            ? location.classList.remove("show-all")
            : null;

          const indexOfTarget = indexInParent(list, itemTarget) - 1;
          const targetParent = parentsOfDots[indexOfTarget];
          // * Clear if exist
          items.forEach((item) => {
            item.classList.contains("_active")
              ? item.classList.remove("_active")
              : null;
          });
          parentsOfDots.forEach((dot) => {
            dot.classList.contains("_active")
              ? dot.classList.remove("_active")
              : null;
          });
          // * Add if not exist
          if (
            !itemTarget.classList.contains("_active") &&
            !targetParent.classList.contains("_active")
          ) {
            itemTarget.classList.add("_active");
            targetParent.classList.add("_active");
          }
        }

        gsap.matchMedia().add("(max-width:767.98px)", () => {
          document.querySelector(".location__list_btn p").innerHTML =
            itemTarget.innerHTML;
          document.querySelector(".location__scroll").classList.remove("show");
        });
      }
      gsap.matchMedia().add("(max-width:767.98px)", () => {
        if (target.closest(".location__list_btn")) {
          document.querySelector(".location__scroll").classList.add("show");
        }else{
          document.querySelector(".location__scroll").classList.remove("show");
        }
      });
    });
  }
  function indexInParent(parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
  }
  if (location) {
    initMap();
  }
}
